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