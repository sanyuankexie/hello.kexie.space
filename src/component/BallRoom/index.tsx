import React, { useEffect, useRef, useState } from "react"
import Float from "../Float";
import Ball from "../Ball";
import { throttle } from "../../utils";
import useClient from "../../hooks/useClient";
import { AtomUser, BallItem, DirtyMethod, Position } from "./type";


function BallRoom() {
    const [balls, setBalls] = useState<BallItem[]>([]);
    const DirtyMethods = useRef<DirtyMethod>();
    DirtyMethods.current = {
        getBalls: () => balls
    }
    const [client, setDeliverier] = useClient();

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
        const nowBalls = DirtyMethods.current?.getBalls()!;

        const atomUser: AtomUser = {
            name: userName,
            position: data.position,
            avatar: data.avatar,
            visitor: data.visitor
        }
        setBalls([...nowBalls, createBall(atomUser)]);
    }

    function handleTalkAction({ data, userName }: ServerResponse) {
        const nowBalls = DirtyMethods.current?.getBalls()!;

        nowBalls.forEach((ball) => {
            if (ball.userName === userName) {
                ball.ballRef!.displayTalkMsg(data);
            }
        });
    }

    function handleMoveAction({ data, userName }: ServerResponse) {
        const nowBalls = DirtyMethods.current?.getBalls()!;

        const { x, y }: Position = data;
        if (userName === client.name) return;
        nowBalls.forEach((ball) => {
            if (ball.userName === userName) {
                ball.floatRef!.moveTo(x, y);
            }
        })
    }

    function handleStandUpAction({ data, userName }: ServerResponse) {
        initializeBalls(
            data.map((x: any) => {
                return ({ ...x, name: x.userName });
            })
        )
    }

    function handleLeaveAction({ data, userName }: ServerResponse) {
        const nowBalls = DirtyMethods.current?.getBalls()!;
        setBalls(nowBalls.filter(self => {
            return self.userName != userName;
        }))
    }

    function initializeBalls(data: Array<AtomUser>) {
        setBalls(data.map(atomUser => createBall(atomUser)));
    }
    function createBall(atomUser: AtomUser): BallItem {
        function floatRef(ref: Float) {
            DirtyMethods.current!.getBalls().forEach(ball => {
                if (ball.userName === atomUser.name) {
                    ball.floatRef = ref;
                }
            })
        }
        function ballRef(ref: BallItem['ballRef']) {
            DirtyMethods.current!.getBalls().forEach(ball => {
                if (ball.userName === atomUser.name) {
                    ball.ballRef = ref;
                }
            })
        }
        const onmoving = throttle((position: Position) => {
            if (client.name === atomUser.name) {
                const res = { type: "move", data: position, userName: atomUser.name };
                client.send(res);
            }
        }, 16);
        const unique = client.name === atomUser.name;
        const onDoubelClick = () => {
            client.send({ type: "talk", data: "你好呀！", userName: client.name })
        }
        const element = (
            <Float
                key={atomUser.name}
                speed={256}
                crossBorder={false}
                initialPosition={atomUser.position}
                zIndex={unique ? 200 : 100}
                onmoving={onmoving}
                ref={floatRef}
            >
                <Ball
                    unique={unique}
                    avatar={atomUser.avatar}
                    ref={ballRef}
                    onDoubleClick={onDoubelClick}
                />
            </Float>
        )
        return { userName: atomUser.name, element };
    }

    return <>{balls ? balls.map(self => self.element) : ''}</>;
}

export default BallRoom;