export type action =
    { type: "setClient", pass: number };

export function clientReducer(state = init, action: action) {
    const newState = { ...state } as any;
    let key = action.type.substring(3);
    key = key.charAt(0).toLowerCase() + key.slice(1);
    newState[key] = (action as any)[key];
    return newState as ClientState;
}

export default clientReducer;

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

export type ClientState = typeof init;

const init = {
    client: new Client()
}