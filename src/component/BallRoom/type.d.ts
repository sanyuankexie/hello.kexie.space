import Float from "../Float";

interface AtomUser {
    name: string;
    position: Position;
    avatar: string;
    visitor: boolean;
}

interface Position {
    x: number;
    y: number;
}

interface BallItem {
    userName: string
    element: JSX.Element
    floatRef?: Float
    ballRef?: {
        displayTalkMsg: (msg: string) => void
    }
}

interface DirtyMethod {
    getBalls: () => BallItem[];
}