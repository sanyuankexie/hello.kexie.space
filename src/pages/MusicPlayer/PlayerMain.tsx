import React, { useState } from "react";
import style from './index.module.scss'
import { useSelector } from 'react-redux';
import { MusicPlayerState } from "./store";

function PlayingMain() {
    const currentTime = useSelector((state: MusicPlayerState) => state.currentTime);
    const selected = useSelector((state: MusicPlayerState) => state.selected);
    const lyrics = useSelector((state: MusicPlayerState) => state.lyrics);

    let [scrollTop, setScrollTop] = useState(250);

    return (
        <div className={style.main}>
                <div className={style.bigName}>{selected.name}</div>
                <div className={style.lyric}>
                    <div className={style.scroller} style={{ marginTop: scrollTop }} >
                        {lyrics.map((x, index, self) => {
                            let isActive = false;
                            const target = currentTime + 0.5;
                            if (self[index + 1]?.time >= target) {
                                if (x.time < target) {
                                    isActive = true;
                                    if (scrollTop !== 250 - 41 * index) {
                                        setScrollTop(250 - 41 * index);
                                    }
                                }
                            }
                            return (
                                <p
                                    key={x.time + x.line}
                                    className={`${isActive ? style.active : ''} ${style.item}`}>{x.line}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
    )
}

export default PlayingMain;