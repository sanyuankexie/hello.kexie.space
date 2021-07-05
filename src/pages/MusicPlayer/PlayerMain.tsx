import React, { useEffect, useState } from "react";
import style from './index.module.scss'
import { useSelector } from 'react-redux';
import { AppReducer } from "../../store/AReducer";

function PlayingMain() {
    const currentTime = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.currentTime);
    const selected = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.selected);
    const lyrics: any[] = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.lyrics);

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