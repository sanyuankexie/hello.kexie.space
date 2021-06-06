import { Button, Input } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react"
import { throttle } from "../../utils";
import Ball from "../Ball/Ball";
import Float from "../Float/Float";

import css from './index.module.css'

interface MsgAPI {
    type: string
    data: any
    userName: string
}

interface IBall {
    userName: string
    element: JSX.Element
}

interface IFloatRef {
    userName: string
    ref: Float
}

interface IBallsRef {
    userName: string
    ref: {
        handleMsgStream: (msg: string) => void
    }
}

function BallRoom() {
    const dispatch = (msg: string) => {
        console.log(msg)
        const { type, data, userName } = JSON.parse(msg) as MsgAPI
        switch (type) {
            case "hello":
                const userString = localStorage.getItem('user')!
                const me = JSON.parse(userString)
                client.send({ type: "rename", userName: client.userName, data: { avatar: me.avatar } })
                client.send({ type: "stand up", userName: client.userName })
                break;
            case "stand up":
                createBalls(data)
                break;
            case "talk":
                receiveMsg(data, userName)
                break;
            case "enter":
                break;
            case "rename":
                break;
            case "move":
                const { x, y } = data
                moveBallTo(x, y, userName)
                break;
            default:
                break;
        }
    }

    const handleClickSendBtn = () => {
        const input = inputRef.current.input.value
        if (!input) return;
        const msg: MsgAPI = {
            type: "talk",
            data: input,
            userName: client.userName!
        }
        client.send(msg)
    }

    const receiveMsg = (msg: string, userName: string) => {
        ballsRef!.forEach(x => {
            if (x.userName === userName) {
                x.ref.handleMsgStream(msg)
            }
        });
    }

    const moveBallTo = (x: number, y: number, userName: string) => {
        if (userName === client.userName) {
            return
        }
        floatsRef?.forEach(self => {
            if (self.userName === userName) {
                self.ref.moveTo(x, y)
            }
        })
    }

    const createBalls = (data: Array<{ userName: string, position: { x: number, y: number }, avatar: string }>) => {
        let newBallsRef: IBallsRef[] = []
        let newFloatsRef: IFloatRef[] = []
        setBalls(data.map(user => {
            const userName = user.userName
            //todo avatar position
            const floatRef = (ref: IFloatRef['ref']) => {
                newFloatsRef = [...floatsRef, { userName, ref }]
            }
            const ballRef = (ref: IBallsRef['ref']) => {
                newBallsRef = [...newBallsRef, { userName, ref }]
            }
            const onmoving = throttle(({ x, y }: { x: number, y: number }) => {
                if (client.userName === userName) {
                    const res = { type: "move", data: { x, y }, userName }
                    client.send(res)
                }
            }, 16);
            const element = (
                <Float speed={256} key={userName} ref={floatRef} crossBorder={false} onmoving={onmoving} initialPosition={user.position}>
                    <Ball userName={userName} avatar={user.avatar} ref={ballRef} />
                </Float>
            )
            const res = { userName, element }
            return res
        }))
        setBallsRef(newBallsRef)
        setFloatsRef(newFloatsRef)
    }

    //todo check type
    const [ballsRef, setBallsRef] = useState<IBallsRef[]>([]);
    const [floatsRef, setFloatsRef] = useState<IFloatRef[]>([]);
    const [balls, setBalls] = useState<IBall[]>([]);

    const inputRef = useRef<Input>(null!)
    const refDispatch = useRef<typeof dispatch>(null!);
    refDispatch.current = dispatch;

    const client = useMemo<Client>(() => new Client(), []);
    useEffect(() => {
        //todo get user by token
        client.open();
        client.onmessage = msg => refDispatch.current(msg.data)
        // todo get online user list

        return () => client.close();
    }, []);

    if (!!balls) {
        return (
            <div>
                {balls.map(x => {
                    return x.element
                })}

                <div className={css.inputContainer}>
                    <Input placeholder="想说的话都可以说呀啦啦啦啦啊啊啊" className={css.inputMsg} ref={inputRef} />
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
    ws?: WebSocket;
    onmessage?: (ev: MessageEvent<any>) => void;
    reconnectTimer?: any

    open() {
        const userString = localStorage.getItem('user')!
        const user = JSON.parse(userString)
        this.userName = user.name
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


export default BallRoom;