type Handler = (msg: ServerResponse) => void;
type Deliverier = Record<string, Handler>;

interface ServerResponse {
    type: string
    data: any
    userName: string
}