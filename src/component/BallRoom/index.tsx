import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button, Input } from "antd";
import Float from "../Float";
import Ball from "../Ball";
import { throttle } from "../../utils";

import style from './index.module.scss'
import ballStyle from '../Ball/index.module.scss';
import { useSelector } from 'react-redux';
import { Client } from "../../store/ClientReducer";
import { AppReducer } from "../../store/AReducer";

interface AtomUser {
    name: string;
    position: Position;
    avatar: string;
    visitor: boolean;
}

interface Position {
    x: number;
    y: number;
}

interface MsgAPI {
    type: string
    data: any
    userName: string
}

export interface DirtyMethod {
    handleServerResponse: (msg: string) => void;
    getBalls: () => Ball[];
}

interface Ball {
    userName: string
    element: JSX.Element
    floatRef?: Float
    ballRef?: {
        displayMsg: (msg: string) => void
    }
}

function BallRoom() {
    const handleServerResponse = (msg: string) => {
        const { type, data, userName } = JSON.parse(msg) as MsgAPI;
        const nowBalls = DirtyMethodContainer.current?.getBalls()!;
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
                nowBalls.forEach((ball: Ball) => {
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
                nowBalls.forEach((ball: Ball) => {
                    if (ball.userName === userName) {
                        ball.floatRef!.moveTo(x, y);
                    }
                })
                break;

            default:
                break;
        }
    }

    const [balls, setBalls] = useState<Ball[]>([]);
    const initializeBalls = (data: Array<AtomUser>) => {
        setBalls(data.map(atomUser => createBall(atomUser)));
    }

    const createBall = (atomUser: AtomUser): Ball => {

        const floatRef = (ref: Float) => {
            DirtyMethodContainer.current!.getBalls().forEach((ball: Ball) => {
                if (ball.userName === atomUser.name) {
                    ball.floatRef = ref;
                }
            })
        }
        const ballRef = (ref: Ball['ballRef']) => {
            DirtyMethodContainer.current!.getBalls().forEach((ball: Ball) => {
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
        const element = (
            <Float
                speed={256}
                key={atomUser.name}
                ref={floatRef}
                crossBorder={false}
                onmoving={onmoving}
                initialPosition={atomUser.position}
                zIndex={client.name === atomUser.name ? 200 : 100}
            >
                <Ball
                    userName={atomUser.name}
                    avatar={atomUser.avatar}
                    ref={ballRef}
                    visitor={atomUser.visitor}
                    styles={atomUser.name === client.name ? {animation: `${ballStyle.selfshine} 2s infinite`} : {}}
                />
            </Float>
        )
        const res: Ball = { userName: atomUser.name, element };
        return res;
    }

    const inputEl = useRef<Input>(null!);
    const handleTriggerSendBtn = (e?: React.KeyboardEvent) => {
        if (!e || e.key !== 'Enter' || e.keyCode !== 13) return;

        const input = inputEl.current.input.value;
        if (!input) return;

        const msg: MsgAPI = {
            type: "talk",
            data: input,
            userName: client.name!
        }
        client.send(msg);
    }

    const DirtyMethodContainer = useRef<DirtyMethod>();
    DirtyMethodContainer.current = {
        handleServerResponse: handleServerResponse,
        getBalls: () => balls
    }

    const rest = useSelector(({ clientReducer }: AppReducer) => clientReducer.client);
    const client = useMemo<Client>(() => (rest), []);
    const [inputHidden, setInputHidden] = useState(true);

    useEffect(() => {
        //todo get user by token
        client.open();
        client.addFuncListener('ball room', DirtyMethodContainer.current?.handleServerResponse!);

        let callTimes = 0;
        const callInputShortCut = (e: KeyboardEvent) => {
            if (!e || e.key !== 'm' || !(e.ctrlKey)) return;
            setInputHidden((callTimes++) % 2 !== 0);
        }

        document.documentElement.addEventListener('keydown', callInputShortCut);

        return () => {
            client.close()
            document.documentElement.removeEventListener('keydown', callInputShortCut);
        };
    }, []);

    return balls ? (
        <div>
            {balls.map(self => self.element)}

            <div
                className={inputHidden ? `${style.inputContainer} ${style.inputContainerHidden}` : style.inputContainer}
                onKeyDown={e => handleTriggerSendBtn(e)}
                style={{ display: client.visitor ? "none" : "block" }}
            >
                <Input placeholder="想说的话都可以说呀啦啦啦啦啊啊啊" className={style.inputMsg} ref={inputEl} />
                <Button type="primary" onClick={e => handleTriggerSendBtn()} className={style.btn}>发送</Button>
            </div>
        </div>
    ) : (<div>wdnmd</div>)
}



export default BallRoom;