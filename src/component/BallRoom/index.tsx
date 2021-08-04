import React, { useEffect, useMemo, useRef, useState } from "react"
import Float from "../Float";
import Ball from "../Ball";
import { throttle } from "../../utils";

import ballStyle from '../Ball/index.module.scss';
import { useSelector } from 'react-redux';
import { Client } from "../../store/ClientReducer";
import { AppReducer } from "../../store/AReducer";
import { AtomUser, BallItem, DirtyMethod, HandleServerResponseFunc, MsgAPI, Position } from "./BallRoom";

function BallRoom() {
    const [balls, setBalls] = useState<BallItem[]>([]);
    const DirtyMethods = useRef<DirtyMethod>();
    DirtyMethods.current = {
        handleServerResponse,
        getBalls: () => balls
    }
    const client = useClient(DirtyMethods.current?.handleServerResponse!);

    function handleServerResponse(msg: string) {
        const { type, data, userName } = JSON.parse(msg) as MsgAPI;
        const nowBalls = DirtyMethods.current?.getBalls()!;
        switch (type) {
            case "hello":
                client.send({ type: "rename", userName: client.name, data: { avatar: client.avatar, visitor: client.visitor } });
                client.send({ type: "stand up", userName: client.name });
                break;

            case "stand up":
                initializeBalls(
                    data.map((x: any) => {
                        return ({ ...x, name: x.userName });
                    })
                )
                break;

            case "talk":
                nowBalls.forEach((ball) => {
                    if (ball.userName === userName) {
                        ball.ballRef!.displayMsg(data);
                    }
                });
                break;

            case "enter":
                const atomUser: AtomUser = {
                    name: userName,
                    position: data.position,
                    avatar: data.avatar,
                    visitor: data.visitor
                }
                setBalls([...nowBalls, createBall(atomUser)]);
                break;

            case "leave":
                setBalls(nowBalls.filter(self => {
                    return self.userName != userName;
                }))
                break;

            case "rename":
                break;

            case "move":
                const { x, y }: Position = data;
                if (userName === client.name) return;
                nowBalls.forEach((ball) => {
                    if (ball.userName === userName) {
                        ball.floatRef!.moveTo(x, y);
                    }
                })
                break;

            default:
                break;
        }
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
        const halo = { animation: `${unique ? ballStyle.uniqueshine : ballStyle.shine} 2s infinite` };
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
                    userName={atomUser.name}
                    avatar={atomUser.avatar}
                    visitor={atomUser.visitor}
                    styles={halo}
                    ref={ballRef}
                    onDoubleClick={unique ? ((e: React.MouseEvent) => client.send({ type: "talk", data: "你好呀！", userName: client.name })) : undefined}
                />
            </Float>
        )
        return { userName: atomUser.name, element };
    }

    return <>{balls ? balls.map(self => self.element) : ''}</>;
}

function useClient(handlerFunc: HandleServerResponseFunc) {
    const rest = useSelector(({ clientReducer }: AppReducer) => clientReducer.client);
    const client = useMemo<Client>(() => (rest), []);

    useEffect(() => {
        client.open();
        client.addFuncListener('ball room', handlerFunc);

        return () => {
            client.removeFuncListener('ball room');
            client.close();
        };
    }, []);

    return client;
}

export default BallRoom;