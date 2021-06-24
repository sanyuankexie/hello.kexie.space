import React, { Dispatch } from "react";
import {
    SyncOutlined,
    StepBackwardFilled,
    PlayCircleFilled,
    PauseCircleFilled,
    StepForwardFilled,
    RedoOutlined,
} from '@ant-design/icons';
import style from './index.module.css'
import { useSelector } from 'react-redux';
import { action, MusicPlayerStore } from "./store";
import PlayerProgress from "./PlayerProgress";
import PlayingMusicInfo from "./PlayingMusicInfo";
import PlayerVolume from "./PlayerVolume";
import { useDispatch } from 'react-redux';

function PlayerPanel() {
    const playerStatus = useSelector((state: MusicPlayerStore) => state.playerStatus);
    const dispatch = useDispatch<Dispatch<action>>();

    function handleOnMode() {

    }

    function handleOnPrevious() {

    }

    function handleOnPlay() {
        if (playerStatus === "playing") {
            dispatch({ type: "setPlayerStatus", playerStatus: "pausing" });
        } else {
            dispatch({ type: "setPlayerStatus", playerStatus: "playing" });
        }
    }

    function handleOnNext() {

    }

    function handleOnReplay() {

    }

    return (
        <div className={style.panel}>
            <PlayerProgress></PlayerProgress>

            <PlayingMusicInfo></PlayingMusicInfo>

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

            <PlayerVolume></PlayerVolume>
        </div>
    )
}

export default PlayerPanel;