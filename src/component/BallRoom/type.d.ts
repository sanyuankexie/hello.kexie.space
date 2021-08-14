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

export interface BallItem {
    userName: string;
    element: JSX.Element;
    floatRef?: any;
    ballRef?: {
        displayTalkMsg: (msg: string) => void
    }
}

export interface DirtyMethod {
    getBalls: () => BallItem[];
}