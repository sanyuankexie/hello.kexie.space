import React, { useEffect, useMemo, useRef, useState } from "react"
import Ball from "../Ball/Ball";
import Float from "../Float/Float";

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

    const receiveMsg = (msg: string, userName: string) => {
        ballsRef!.forEach(x => {
            if (x.userName === userName) {
                x.ref.handleMsgStream(msg)
            }
        });
    }

    const haveAUserRename = (newName: string, oldName: string) => {
        // Not recommend rename
    }

    const moveBallTo = (x: number, y: number, userName: string) => {
        console.log(x, y, floatsRef)
        floatsRef?.forEach(self => {
            if (self.userName === userName) {
                self.ref.moveTo(x, y)
            }
        })
    }

    const createBalls = (data: Array<string>) => {
        setBalls(data.map(userName => {
            //todo avatar position
            const floatRef = (ref: IFloatRef['ref']) => {
                setFloatsRef([...floatsRef, { userName: userName, ref }])
            }
            const ballRef = (ref: IBallsRef['ref']) => {
                setBallsRef([...ballsRef, { userName: userName, ref }])
            }
            const onmoving = throttle(({ x, y }: { x: number, y: number }) => {
                client.send(`moving ${x} ${y}`)
            }, 100);
            
            const element = (
                <Float speed={256} key={userName} ref={floatRef} crossBorder={false} onmoving={onmoving}>
                    <Ball userName={userName} ref={ballRef} />
                </Float>
            )
            const res = { userName, element }
            return res
        }))
    }

    //todo check type
    const [ballsRef, setBallsRef] = useState<IBallsRef[]>([]);
    const [floatsRef, setFloatsRef] = useState<IFloatRef[]>([]);
    const [balls, setBalls] = useState<IBall[]>([]);

    const refDispatch = useRef<typeof dispatch>(null!);
    refDispatch.current = dispatch;

    const handleSelfBallPositionChange = () => {
        // todo get position from float
        // and send to server
    }

    const client = useMemo<Client>(() => new Client(), []);
    useEffect(() => {
        //todo get user by token
        client.open();
        client.onmessage = msg => refDispatch.current(msg.data)

        // todo get online user list
        createBalls(["therainisme"])
        return () => client.close();
    }, []);

    if (!!balls) {
        return (
            <div>
                {balls.map(x => {
                    return x.element
                })}
            </div>
        )
    } else {
        return (<div>wdnmd</div>)
    }
}

class Client {
    ws?: WebSocket;
    onmessage?: (ev: MessageEvent<any>) => void;

    reconnectTimer? : any

    open() {
        const userString = localStorage.getItem('user')!
        const user = JSON.parse(userString)
        this.ws = new WebSocket("ws://10.33.39.225:4000/connect")
        this.ws.onerror = (e) => {
            console.error('ws error', e);
        };
        this.ws.onclose = (e) => {
            console.error('ws closed', e);
            this.reconnectTimer = setTimeout(() => {
                this.open()
            }, 3000)
        };
        this.ws.onmessage = (x) => this.onmessage?.(x);
    }

    send(data: string) {
        try {
            this.ws!.send(data);
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

function throttle<T extends (...arg: any[]) => void>(func: T, interval: number) {
    let _args: any = null;
    let _timer: any = null;
    return (...args: Parameters<T>) => {
        _args = args;
        if (!_timer) {
            _timer = setTimeout(() => {
                func(..._args);
                _timer = null;
            }, interval);
        }
    }
}


export default BallRoom;