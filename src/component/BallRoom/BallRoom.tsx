import React, { useEffect, useRef, useState } from "react"
import Ball from "../Ball/Ball";
import Float from "../Float/Float";

interface MsgAPI {
    type: string
    data: any
    userName: string
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
        balls!.forEach(x => {
            if (x.userName === userName) {
                x.showMsg(msg)
            }
        });
    }

    const haveAUserRename = (newName: string, oldName: string) => {
        // Not recommend rename
    }

    const moveBallTo = (x: number, y: number, userName: string) => {
        ballsRef.forEach(self => {
            if (self.userName === userName) {
                self.ref.moveTo(x, y)
            }
        })
    }

    const createBalls = (data: Array<string>) => {
        setBalls(data.map(x => {
            //todo avatar position
            function showMsg(msg: string) {
            }
            const elementRef = (ref: Float) => {
                setBallsRef([...ballsRef, { userName: x, ref }])
            }
            const element = (
                <Float speed={256} key={x} onRef={elementRef} crossBorder={false}>
                    <Ball userName={x} showMsg={showMsg} />
                </Float>
            )
            let methods: Float | null = null
            const res = { userName: x, showMsg, methods, element }
            return res
        }))
    }

    const [ballsRef, setBallsRef] = useState<{ userName: string, ref: Float }[]>([]);
    const [socket, setSocket] = useState<WebSocket>();
    const [balls, setBalls] = useState<{ userName: string, element: JSX.Element, methods: Float | null, showMsg: (msg: string) => void }[]>();

    useEffect(() => {
        //todo get user by token
        const userString = localStorage.getItem('user')!
        const user = JSON.parse(userString)
        const socket = new WebSocket("ws://10.33.39.225:4000/connect")
        // const hellomsg =    
        socket.onmessage = msg => dispatch(msg.data)
        setSocket(socket)

        createBalls(["therainisme"])
    }, []);

    useEffect(() => {

    }, [ballsRef]);

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