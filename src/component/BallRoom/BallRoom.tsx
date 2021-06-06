import React, { useEffect, useRef, useState } from "react"
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
        floatsRef.forEach(self => {
            if (self.userName === userName) {
                self.ref.moveTo(x, y)
            }
        })
    }

    const createBalls = (data: Array<string>) => {
        setBalls(data.map(x => {
            //todo avatar position
            const floatRef = (ref: IFloatRef['ref']) => {
                setFloatsRef([...floatsRef, { userName: x, ref }])
            }
            const ballRef = (ref: IBallsRef['ref']) => {
                setBallsRef([...ballsRef, { userName: x, ref }])
            }
            const element = (
                <Float speed={256} key={x} onRef={floatRef} crossBorder={false}>
                    <Ball userName={x} ref={ballRef} />
                </Float>
            )
            const res = { userName: x, element }
            return res
        }))
    }

    //todo check type
    const [ballsRef, setBallsRef] = useState<IBallsRef[]>([]);
    const [floatsRef, setFloatsRef] = useState<IFloatRef[]>([]);
    const [balls, setBalls] = useState<IBall[]>([]);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        //todo get user by token
        const userString = localStorage.getItem('user')!
        const user = JSON.parse(userString)
        const socket = new WebSocket("ws://10.33.39.225:4000/connect")
        setSocket(socket)
        // const hellomsg =    
        socket.onmessage = msg => dispatch(msg.data)
        setSocket(socket)

        createBalls(["therainisme"])
    }, []);

    if (!!balls) {
        return (
            <div>
                {balls!.map(x => {
                    return x.element
                })}
            </div>
        )
    } else {
        return (<div>error</div>)
    }
}


export default BallRoom;