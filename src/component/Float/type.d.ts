import { Position } from "../BallRoom/type";

export interface Prop {
    children: React.ReactNode;
    crossBorder?: boolean;
    speed?: number;
    initPosition?: Position;
    zIndex?: number;
    drag?: boolean
    onMoving?: (position: { x: number, y: number }) => void;
}

export interface Handles {
    letItMoveTo: (target: Position) => void;
}