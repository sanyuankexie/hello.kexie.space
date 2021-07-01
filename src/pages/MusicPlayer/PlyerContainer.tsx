import React, { useEffect, useState } from "react";
import PlayerMain from "./PlayerMain";
import PlayerPanel from "./PlayerPanel";
import PlayingSideBar from "./PlayerSidebar";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { MusicPlayerState } from "./store";
import defaultBackground from '../../assets/images/music/dahai.png';

function PlayerContainer() {
    const selected = useSelector((state: MusicPlayerState) => state.selected);
    const waiting = useSelector((state: MusicPlayerState) => state.waiting);

    const [poster, setPoster] = useState(defaultBackground);

    useEffect(() => {
        setPoster(selected.poster);
    }, [waiting]);


    return (
        <section className={style.container}>
            <div className={style.background} style={{background: `url("${poster}")`}}></div>
            <PlayingSideBar></PlayingSideBar>
            <PlayerMain></PlayerMain>
            <PlayerPanel></PlayerPanel>
        </section >
    )
}

export default PlayerContainer;