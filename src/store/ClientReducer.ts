import React from "react";

export type action =
    { type: "setClient", pass: number }

export function clientReducer(state = init, action: action) {
    const newState = { ...state } as any;
    let key = action.type.substring(3);
    key = key.charAt(0).toLowerCase() + key.slice(1);
    newState[key] = (action as any)[key];
    return newState as ClientState;
}

export default clientReducer;

const MsgType = {
    BallRoom: ["hello", "stand up", "talk", "enter", "leave", "rename", "move"],
    MusicPlayer: ["switch music"]
}

/**
 * 一个WebSocket客户端类
 */
export class Client {
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


        this.ws = new WebSocket("wss://kexie.therainisme.com/connect")
        // this.ws = new WebSocket("ws://10.33.39.225:5201/connect")
        this.ws.onerror = (e) => {
            console.error('ws error', e);
        };
        this.ws.onclose = (e) => {
            console.error('ws closed', e);
            // 断线重连
            // this.reconnectTimer = setTimeout(() => {
            //     this.open()
            // }, 3000)
        };
        this.ws.onmessage = (x) => this.handleMessage(x);
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

    /**
     * 实现不同的事件的转发
     * 比如说收到移动球的消息，会转发到BallRoom
     * 而收到切歌的消息，会转发到MusicPlayer
     */
    funcListeners: FuncListener[] = [];
    addFuncListener(name: string, func: ((msg: string) => void)) {
        this.funcListeners.filter(x => name !== x.name);
        this.funcListeners.push({ name, func: (func as any) });
    }

    removeFuncListener(name: string) {
        this.funcListeners.filter(x => x.name !== name);
    }

    handleMessage({ data: msg }: MessageEvent<any>) {
        const { type, data, userName } = JSON.parse(msg) as MsgAPI;
        if (MsgType.BallRoom.find((x) => x === type)) {
            this.funcListeners.forEach(x => {
                if (x.name === "ball room") {
                    x.func(msg);
                }
            })
        } else {
            this.funcListeners.forEach(x => {
                if (x.name === type) x.func(msg);
            })
        }
    }
    // 事件分发的末尾
}

export type FuncListener = { name: string, func: (msg: string) => void };

export interface MsgAPI {
    type: string
    data: any
    userName: string
}

export type ClientState = typeof init;

const init = {
    client: new Client(),
    ScrollAnimationRefs: [] = [] as any[],
}