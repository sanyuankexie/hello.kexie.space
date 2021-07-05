import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from './index.module.scss'
import { action } from "../../store/MusicPlayerReducer";
import { AppReducer } from "../../store/AppReducer";

function PlayerProgress() {
    const pass = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.pass);
    const audioRef = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.audioRef);
    const dispatch = useDispatch<Dispatch<action>>();

    function handleOnProgress(e: React.MouseEvent) {
        const newPass = (e.clientX / window.innerWidth) * 100;
        const { duration } = audioRef.current;
        audioRef.current.currentTime = Number.isNaN(duration) ? 0 : newPass / 100 * duration
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