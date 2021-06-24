import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from './index.module.css'
import { action, MusicPlayerStore } from "./store";

function PlayerProgress() {
    const pass = useSelector((state: MusicPlayerStore) => state.pass);
    const dispatch = useDispatch<Dispatch<action>>();

    function handleOnProgress(e: React.MouseEvent) {
        const newPass = (e.clientX / window.innerWidth) * 100;
        // todo
        // const { duration } = audioRef.current;
        // audioRef.current.currentTime = Number.isNaN(duration) ? 0 : newPass / 100 * duration
        dispatch({ type: "setPass", pass: newPass });
    }

    return (
        <div className={style.progress} onClick={e => handleOnProgress(e)}>
            <div className={style.pass} style={{ width: `${pass}%` }}></div>
            <div className={style.circle} style={{ left: `${pass}%` }}></div>
        </div>
    )
}

export default PlayerProgress;