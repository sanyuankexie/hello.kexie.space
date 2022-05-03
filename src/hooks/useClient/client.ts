export default class Client {
    name?: string
    avatar?: string
    token?: string
    visitor: boolean = true
    ws?: WebSocket;
    onmessage?: (ev: MessageEvent<any>) => void;
    reconnectTimer?: any

    open(dispatch: any) {
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


        this.ws = new WebSocket("wss://kexie.therainisme.com/connect");
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

        this.ws.onmessage = dispatch;
    }

    send(data: any) {
        try {
            // console.log("客户端发送了", JSON.stringify(data))
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