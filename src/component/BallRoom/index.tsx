import React, { useEffect, useRef, useState } from "react"
import Float from "../Float";
import Ball from "../Ball";
import { throttle } from "../../utils";
import useClient from "../../hooks/useClient";
import { AtomUser, Position } from "./type";
import { Handles as FloatHandles } from "../Float/type";
import { Handles as BallHandles } from "../Ball/type";

function BallRoom() {
    const [client, setDeliverier] = useClient();
    const [userList, setUserList] = useState<Array<AtomUser>>([]);

    const userListRef = useRef<() => Array<AtomUser>>();
    userListRef.current = () => userList;

    const floatRefs = useRef(new Map<string, FloatHandles>());
    function floatRef(user: AtomUser) {
        return (el: FloatHandles) => {
            floatRefs.current.set(user.name, el);
        }
    }

    const ballRefs = useRef(new Map<string, BallHandles>());
    function ballRef(user: AtomUser) {
        return (el: BallHandles) => {
            ballRefs.current.set(user.name, el);
        }
    }

    useEffect(() => {
        // 连接上服务器，服务器会主动回传。
        setDeliverier({ "hello": handleHelloAction });

        // 当有人连接上服务器，服务器会向其它用户发送这个消息。
        setDeliverier({ "enter": handleEnterAction });

        // 当有人发送消息至服务器，服务器会向所有用户广播这个的消息。
        setDeliverier({ "talk": handleTalkAction });

        // 当有人移动的行为发送至服务器，服务器会向其他用户广播这个消息。
        setDeliverier({ "move": handleMoveAction });

        // 客户端可以向服务器请求当前在线用户的信息。
        setDeliverier({ "stand up": handleStandUpAction });

        // 用户下线，服务器会向其他用户广播这个消息。
        setDeliverier({ "leave": handleLeaveAction });
    }, []);

    function handleHelloAction() {
        client.send({ type: "rename", userName: client.name, data: { avatar: client.avatar, visitor: client.visitor } });
        client.send({ type: "stand up", userName: client.name });
    }

    function handleEnterAction({ data, userName }: ServerResponse) {
        const newUser: AtomUser = {
            name: userName,
            position: data.position,
            avatar: data.avatar,
            visitor: data.visitor
        }
        setUserList([...userListRef.current!(), newUser]);
    }

    function handleTalkAction({ data, userName }: ServerResponse) {
        const el = ballRefs.current.get(userName);
        el?.displayTalkMsg(data);
    }

    function handleMoveAction({ data, userName }: ServerResponse) {
        if (userName === client.name) return;

        const { x, y }: Position = data;
        const el = floatRefs.current.get(userName);
        el?.letItMoveTo({ x, y })
    }

    function handleStandUpAction({ data, userName }: ServerResponse) {
        setUserList(data.map((serverUser: any) => {
            return {
                name: serverUser.userName,
                position: serverUser.position,
                avatar: serverUser.avatar,
                visitor: serverUser.visitor
            }
        }));
    }

    function handleLeaveAction({ data, userName }: ServerResponse) {
        setUserList(userListRef.current!().filter(self => {
            return self.name !== userName;
        }));
    }

    return <>
        {userList.map(user => {
            const unique: boolean = client.name === user.name;

            /**
             * 双击一个小球（不论是否是自己的），（随机）发送消息
             */
            const onDoubelClick = () => {
                client.send({ type: "talk", data: "你好呀！", userName: client.name });
            }

            /**
             * 拖动自己的小球，将位置信息发送至服务器
             */
            const onMoving = throttle((position: Position) => {
                if (!unique) return;
                const res = { type: "move", data: position, userName: user.name };
                client.send(res);
            }, 16);

            return (
                <Float
                    key={user.name}
                    speed={256}
                    crossBorder={false}
                    initPosition={user.position}
                    zIndex={unique ? 200 : 100}
                    onMoving={onMoving}
                    ref={floatRef(user)}
                >
                    <Ball
                        unique={unique}
                        avatar={user.avatar}
                        ref={ballRef(user)}
                        onDoubleClick={onDoubelClick}
                    />
                </Float>
            );
        })}
    </>;
}

export default BallRoom;