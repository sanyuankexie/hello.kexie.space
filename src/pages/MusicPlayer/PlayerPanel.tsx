import React from "react";
import style from './index.module.css'
import PlayerProgress from "./PlayerProgress";
import PlayingMusicInfo from "./PlayingMusicInfo";
import PlayerVolume from "./PlayerVolume";
import PlayerControl from "./PlayerControl";

function PlayerPanel() {

    return (
        <div className={style.panel}>
            <PlayerProgress></PlayerProgress>

            <PlayingMusicInfo></PlayingMusicInfo>

            <PlayerControl></PlayerControl>

            <PlayerVolume></PlayerVolume>
        </div>
    )
}

export default PlayerPanel;