import React from "react";
import style from './index.module.css'
import { useSelector } from 'react-redux';
import { MusicPlayerStore } from "./store";

function PlayingMusicInfo() {
    const selected = useSelector((state: MusicPlayerStore) => state.selected);

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