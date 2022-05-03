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
        client.send({ type: "rename", data: { avatar: client.avatar, visitor: client.visitor, name: client.name } });
        client.send({ type: "stand up" });
    }

    function handleEnterAction({ data }: ServerResponse) {
        const newUser: AtomUser = {
            name: data.name,
            position: data.position,
            avatar: data.avatar,
            visitor: data.visitor
        }
        setUserList([...userListRef.current!(), newUser]);
    }

    function handleTalkAction({ data }: ServerResponse) {
        const el = ballRefs.current.get(data.name);
        el?.displayTalkMsg(data.content);
    }

    function handleMoveAction({ data }: ServerResponse) {
        if (data.name === client.name) return;

        const { x, y }: Position = data.position;
        const el = floatRefs.current.get(data.name);
        el?.letItMoveTo({ x, y })
    }

    function handleStandUpAction({ data, userName }: ServerResponse) {
        // console.log(data)
        setUserList(data.onlineUser.map((serverUser: any) => {
            return {
                name: serverUser.name,
                position: serverUser.position,
                avatar: serverUser.avatar,
                visitor: serverUser.visitor
            }
        }));
    }

    function handleLeaveAction({ data}: ServerResponse) {
        setUserList(userListRef.current!().filter(self => {
            return self.name !== data.name;
        }));
    }

    return <>
        {userList.map(user => {
            const unique: boolean = client.name === user.name;
            console.log(client.name, user.name)

            /**
             * 双击一个小球（不论是否是自己的），（随机）发送消息
             */
            const onDoubelClick = () => {
                client.send({ type: "talk", data: { content: "你好呀！", name: client.name }});
            }

            /**
             * 拖动自己的小球，将位置信息发送至服务器
             */
            const onMoving = throttle((position: Position) => {
                if (!unique) return;
                const res = { type: "move", data: {position, name: client.name}};
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