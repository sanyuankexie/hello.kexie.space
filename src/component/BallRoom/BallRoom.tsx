import { Button, Input } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react"
import { throttle } from "../../utils";
import Ball from "../Ball/Ball";
import Float from "../Float/Float";

import css from './index.module.css'

interface AtomUser {
    userName: string;
    position: Position;
    avatar: string;
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
        handleMsgStream: (msg: string) => void
    }
}

function BallRoom() {
    const dispatch = (msg: string) => {
        console.log(msg)
        const { type, data, userName } = JSON.parse(msg) as MsgAPI
        switch (type) {
            case "hello":
                client.send({ type: "rename", userName: client.userName, data: { avatar: client.avatar } })
                client.send({ type: "stand up", userName: client.userName })
                break;

            case "stand up":
                initializeBalls(data)
                break;

            case "talk":
                handleReceiveMsg(data, userName)
                break;

            case "enter":
                const atomUser: AtomUser = {
                    userName,
                    position: data.position,
                    avatar: data.avatar,
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
                handleBallMoving(x, y, userName)
                break;

            default:
                break;
        }
    }

    const handleClickSendBtn = () => {
        const input = inputEl.current.input.value
        if (!input) return;

        const msg: MsgAPI = {
            type: "talk",
            data: input,
            userName: client.userName!
        }
        client.send(msg)
    }

    const handleReceiveMsg = (msg: string, userName: string) => {
        DirtyMethodContainer.current!.getBalls().forEach(x => {
            if (x.userName === userName) {
                x.ballRef!.handleMsgStream(msg)
            }
        });
    }

    const handleBallMoving = (x: number, y: number, userName: string) => {
        if (userName === client.userName) return

        DirtyMethodContainer.current!.getBalls().forEach(self => {
            if (self.userName === userName) {
                self.floatRef!.moveTo(x, y)
            }
        })
    }

    const initializeBalls = (data: Array<AtomUser>) => {
        setBalls(data.map(atomUser => createBall(atomUser)))
    }

    const createBall = (atomUser: AtomUser): Ball => {
        const userName = atomUser.userName

        const floatRef = (ref: Float) => {
            DirtyMethodContainer.current!.getBalls().forEach(self => {
                if (self.userName === userName) {
                    self.floatRef = ref
                }
            })
        }
        const ballRef = (ref: Ball['ballRef']) => {
            DirtyMethodContainer.current!.getBalls().forEach(self => {
                if (self.userName === userName) {
                    self.ballRef = ref
                }
            })
        }
        const onmoving = throttle((position: Position) => {
            if (client.userName === userName) {
                const res = { type: "move", data: position, userName }
                client.send(res)
            }
        }, 16);
        const element = (
            <Float speed={256} key={userName} ref={floatRef} crossBorder={false} onmoving={onmoving} initialPosition={atomUser.position}>
                <Ball userName={userName} avatar={atomUser.avatar} ref={ballRef} />
            </Float>
        )
        const res: Ball = { userName, element }
        return res
    }

    //todo check type
    const [balls, setBalls] = useState<Ball[]>([]);

    const inputEl = useRef<Input>(null!)

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

    if (!!balls) {
        return (
            <div>
                {balls.map(self => self.element)}

                <div className={css.inputContainer}>
                    <Input placeholder="想说的话都可以说呀啦啦啦啦啊啊啊" className={css.inputMsg} ref={inputEl} />
                    <Button type="primary" onClick={e => handleClickSendBtn()} className={css.btn}>发送</Button>
                </div>
            </div>
        )
    } else {
        return (<div>wdnmd</div>)
    }
}

class Client {
    userName?: string
    avatar?: string
    token?: string
    visitor: boolean = true
    ws?: WebSocket;
    onmessage?: (ev: MessageEvent<any>) => void;
    reconnectTimer?: any

    open() {
        const userString = localStorage.getItem('user')!
        if (!!userString) {
            const user = JSON.parse(userString)
            this.userName = user.userName
            this.avatar = user.avatar
            this.token = user.token
            this.visitor = user.visitor
        }
        console.log(this.visitor = true && !userString)
        if (this.visitor = true && !userString) {
            this.userName = `User-${Math.floor(100000 * Math.random()) as unknown as string}`
            this.avatar = ""
            this.token = this.userName
            this.visitor = true
            const user = {
                userName: this.userName,
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