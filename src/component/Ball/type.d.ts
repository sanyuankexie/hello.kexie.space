import { CSSProperties } from "react";

export interface Prop {
    unique: boolean;
    avatar?: string;
    styles?: CSSProperties;
    onDoubleClick: (e?: React.MouseEvent) => void;
}

export interface Handles {
    displayTalkMsg: (msg: string) => void;
}