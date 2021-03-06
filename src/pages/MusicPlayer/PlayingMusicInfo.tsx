import React, { Dispatch, useEffect } from "react";
import style from './index.module.scss'
import { useSelector } from 'react-redux';
import { action, MusicPlayerState } from "../../store/MusicPlayerReducer";
import { useDispatch } from 'react-redux';
import { AppReducer } from "../../store/AReducer";

function PlayingMusicInfo() {
    const selected = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.selected);
    const dispatch = useDispatch<Dispatch<action>>();


    return (
        <div className={style.info}>
            <img className={style.poster} src={selected.poster} onLoad={e => dispatch({ type: "setWaiting", waiting: new Date().getTime() })}></img>
            <div className={style.detail}>
                <div className={style.musicName}>{selected.name}</div>
                <div className={style.singer}>{selected.singer}</div>
            </div>
        </div>
    )
}

export default PlayingMusicInfo;