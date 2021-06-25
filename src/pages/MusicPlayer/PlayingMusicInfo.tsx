import React from "react";
import style from './index.module.scss'
import { useSelector } from 'react-redux';
import { MusicPlayerState } from "./store";

function PlayingMusicInfo() {
    const selected = useSelector((state: MusicPlayerState) => state.selected);

    return (
        <div className={style.info}>
            <img className={style.poster} src={selected.poster}></img>
            <div className={style.detail}>
                <div className={style.musicName}>{selected.name}</div>
                <div className={style.singer}>{selected.singer}</div>
            </div>
        </div>
    )
}

export default PlayingMusicInfo;