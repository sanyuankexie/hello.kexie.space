import React, { useEffect, useState } from "react";
import PlayerMain from "./PlayerMain";
import PlayerPanel from "./PlayerPanel";
import PlayingSideBar from "./PlayerSidebar";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import defaultBackground from '../../assets/images/music/dahai.png';
import { ReduxState } from "../../store/appReducer";

function PlayerContainer() {
    const selected = useSelector(({ musicPlayerReducer }: ReduxState) => musicPlayerReducer.selected);
    const waiting = useSelector(({ musicPlayerReducer }: ReduxState) => musicPlayerReducer.waiting);

    const [poster, setPoster] = useState(defaultBackground);

    useEffect(() => {
        setPoster(selected.poster);
    }, [waiting]);


    return (
        <section className={style.container}>
            <div className={style.background}
                style={{ background: "url(" + poster + ")" }}
            ></div>
            <PlayingSideBar></PlayingSideBar>
            <PlayerMain></PlayerMain>
            <PlayerPanel></PlayerPanel>
        </section >
    )
}

export default PlayerContainer;