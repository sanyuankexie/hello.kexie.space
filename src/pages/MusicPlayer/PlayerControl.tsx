import React, { Dispatch, useEffect } from "react";
import {
    SyncOutlined,
    StepBackwardFilled,
    PlayCircleFilled,
    PauseCircleFilled,
    StepForwardFilled,
    RedoOutlined,
} from '@ant-design/icons';
import style from './index.module.scss'
import { useSelector } from 'react-redux';
import { action, MusicPlayerState } from "./store";
import { useDispatch } from 'react-redux';

function PlayerControl() {
    const playerStatus = useSelector((state: MusicPlayerState) => state.playerStatus);
    const audioRef = useSelector((state: MusicPlayerState) => state.audioRef);
    const selected = useSelector((state: MusicPlayerState) => state.selected);
    const dispatch = useDispatch<Dispatch<action>>();

    useEffect(() => {
        dispatch({type: "setPlayerStatus", playerStatus: "playing"});
    }, [selected]);

    function handleOnMode() {

    }

    function handleOnPrevious() {

    }

    function handleOnPlay() {
        if (playerStatus === "playing") {
            audioRef.current.pause();
            dispatch({ type: "setPlayerStatus", playerStatus: "pausing" });
        } else {
            audioRef.current.play();
            dispatch({ type: "setPlayerStatus", playerStatus: "playing" });
        }
    }

    function handleOnNext() {

    }

    function handleOnReplay() {

    }

    return (
        <div className={style.control}>
            <div className={style.item} onClick={e => handleOnMode()}>
                <SyncOutlined />
            </div>
            <div className={style.item} onClick={e => handleOnPrevious()}>
                <StepBackwardFilled />
            </div>
            <div className={style.item} onClick={e => handleOnPlay()}>
                {playerStatus === "playing" ? < PauseCircleFilled /> : <PlayCircleFilled />}
            </div>
            <div className={style.item} onClick={e => handleOnNext()}>
                <StepForwardFilled />
            </div>
            <div className={style.item} onClick={e => handleOnReplay()}>
                <RedoOutlined />
            </div>
        </div>
    )
}

export default PlayerControl;