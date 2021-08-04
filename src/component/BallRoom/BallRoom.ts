import Float from "../Float";

export interface AtomUser {
    name: string;
    position: Position;
    avatar: string;
    visitor: boolean;
}

export interface Position {
    x: number;
    y: number;
}

export interface MsgAPI {
    type: string
    data: any
    userName: string
}

export interface BallItem {
    userName: string
    element: JSX.Element
    floatRef?: Float
    ballRef?: {
        displayMsg: (msg: string) => void
    }
}

export type HandleServerResponseFunc = (msg: string) => void;

export interface DirtyMethod {
    handleServerResponse: HandleServerResponseFunc
    getBalls: () => BallItem[];
}