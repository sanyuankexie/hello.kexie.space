import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button, Input } from "antd";
import Float from "../Float/Float";
import Ball from "../Ball/Ball";
import { throttle } from "../../utils";

import css from './index.module.css'

interface AtomUser {
    name: string;
    position: Position;
    avatar: string;
    visitor: boolean;
}

interface DirtyMethod {
    dispatch: (msg: string) => void
    getBalls: () => Ball[]
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
    const dispatch = (msg: string) => {
        console.log(msg)
        const { type, data, userName } = JSON.parse(msg) as MsgAPI
        switch (type) {
            case "hello":
                client.send({ type: "rename", userName: client.name, data: { avatar: client.avatar, visitor: client.visitor } })
                client.send({ type: "stand up", userName: client.name })
                break;

            case "stand up":
                initializeBalls(
                    data.map((x: any) => {
                        return ({ ...x, name: x.userName })
                    })
                )
                break;

            case "talk":
                balls.forEach((ball: Ball) => {
                    console.log(ball.userName, userName)
                    if (ball.userName === userName) {
                        ball.ballRef!.displayMsg(data)
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
                setBalls([...balls, createBall(atomUser)])
                break;

            case "leave":
                setBalls(balls.filter(self => {
                    return self.userName != userName
                }))
                break;

            case "rename":
                break;

            case "move":
                const { x, y }: Position = data
                if (userName === client.name) return

                balls.forEach((ball: Ball) => {
                    if (ball.userName === userName) {
                        ball.floatRef!.moveTo(x, y)
                    }
                })
                break;

            default:
                break;
        }
    }

    const [balls, setBalls] = useState<Ball[]>([]);
    const initializeBalls = (data: Array<AtomUser>) => {
        setBalls(data.map(atomUser => createBall(atomUser)))
    }

    const createBall = (atomUser: AtomUser): Ball => {

        const floatRef = (ref: Float) => {
            DirtyMethodContainer.current!.getBalls().forEach((ball: Ball) => {
                if (ball.userName === atomUser.name) {
                    ball.floatRef = ref
                }
            })
        }
        const ballRef = (ref: Ball['ballRef']) => {
            DirtyMethodContainer.current!.getBalls().forEach((ball: Ball) => {
                if (ball.userName === atomUser.name) {
                    ball.ballRef = ref
                }
            })
        }
        const onmoving = throttle((position: Position) => {
            if (client.name === atomUser.name) {
                const res = { type: "move", data: position, userName: atomUser.name }
                client.send(res)
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
                />
            </Float>
        )
        const res: Ball = { userName: atomUser.name, element }
        return res
    }

    const inputEl = useRef<Input>(null!)
    const handleTriggerSendBtn = (e?: React.KeyboardEvent) => {
        if (e) {
            if (e.key !== 'Enter' || e.keyCode !== 13) return
        }

        const input = inputEl.current.input.value
        if (!input) return;

        const msg: MsgAPI = {
            type: "talk",
            data: input,
            userName: client.name!
        }
        client.send(msg)
    }

    const DirtyMethodContainer = useRef<DirtyMethod>()
    DirtyMethodContainer.current = {
        dispatch,
        getBalls: () => balls
    }

    const client = useMemo<Client>(() => new Client(), []);
    useEffect(() => {
        //todo get user by token
        client.open();
        client.onmessage = msg => DirtyMethodContainer.current?.dispatch(msg.data)
        // todo get online user list

        return () => client.close();
    }, []);

    return balls ? (
        <div>
            {balls.map(self => self.element)}

            <div className={css.inputContainer} onKeyDown={e => handleTriggerSendBtn(e)}>
                <Input placeholder="想说的话都可以说呀啦啦啦啦啊啊啊" className={css.inputMsg} ref={inputEl} />
                <Button type="primary" onClick={e => handleTriggerSendBtn()} className={css.btn}>发送</Button>
            </div>
        </div>
    ) : (<div>wdnmd</div>)
}

class Client {
    name?: string
    avatar?: string
    token?: string
    visitor: boolean = true
    ws?: WebSocket;
    onmessage?: (ev: MessageEvent<any>) => void;
    reconnectTimer?: any

    open() {
        const userString = localStorage.getItem('user')
        if (userString) {
            const user = JSON.parse(userString)
            this.name = user.name
            this.avatar = user.avatar
            this.token = user.token
            this.visitor = user.visitor
        }
        if (userString === null) {
            this.name = `User-${Math.floor(100000 * Math.random()) as unknown as string}`
            this.avatar = ""
            this.token = this.name
            this.visitor = true
            const user = {
                name: this.name,
                avatar: this.avatar,
                token: this.token,
                visitor: this.visitor
            }
            localStorage.setItem('user', JSON.stringify(user))
        }


        this.ws = new WebSocket("ws://10.33.39.225:4000/connect")
        this.ws.onerror = (e) => {
            console.error('ws error', e);
        };
        this.ws.onclose = (e) => {
            console.error('ws closed', e);
            // this.reconnectTimer = setTimeout(() => {
            //     this.open()
            // }, 3000)
        };
        this.ws.onmessage = (x) => this.onmessage?.(x);
    }

    send(data: any) {
        try {
            this.ws!.send(JSON.stringify(data));
        } catch (error) {
            console.error('ws send error', error);
        }
    }

    close() {
        try {
            clearTimeout(this.reconnectTimer)
            this.ws?.close();
        } catch (error) {
            console.error('ws closing error', error);
        }
    }
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

export default BallRoom;