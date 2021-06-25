import React, { Dispatch, ReactHTMLElement, useEffect, useRef, useState } from "react";
import style from './index.module.scss'
import welcomeStyle from '../Welcome/index.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { action, MusicPlayerState, parseLyric, RecommendMusics } from "./store";
import { MusicAPI } from "../../api";

const musics = RecommendMusics;

function PlayingSideBar() {
    const selected = useSelector((state: MusicPlayerState) => state.selected);
    const audioRef = useRef<HTMLAudioElement>(null!);

    const dispatch = useDispatch<Dispatch<action>>();

    useEffect(() => {
        dispatch({ type: "setAudioRef", audioRef: audioRef });
    }, []);

    useEffect(() => {
        !audioRef.current.paused && audioRef.current.pause();
        dispatch({ type: "setLyrics", lyrics: [{ time: 0, line: '正在加载中......' }] });
        dispatch({ type: "setCurrentTime", currentTime: 0 });

        let interval: any = undefined;
        const loadingMusic = async () => {
            const res = await MusicAPI.getMusicAudioAndLyric(selected.id);
            audioRef.current.src = res.audio;
            audioRef.current.play();

            dispatch({ type: "setLyrics", lyrics: parseLyric(res.lyric) })
            interval = setInterval(() => {
                const { currentTime, duration } = audioRef.current;
                dispatch({ type: "setCurrentTime", currentTime });
                dispatch({ type: "setPass", pass: Math.floor(currentTime / duration * 100 * 100) / 100 });
            }, 100);
        }

        loadingMusic();

        return () => {
            clearInterval(interval);
        }
    }, [selected]);

    function handleOnClickMusicItem(music: any) {
        if (selected.name === music.name) return;
        dispatch({ type: "setSelected", selected: music });
    }

    const [isHidden, setIsHidden] = useState(false);
    function handleOnClickH() {
        setIsHidden(!isHidden);
    }

    return (
        <>
            <span className={`${welcomeStyle.btn} ${style.btn}`} onClick={e => handleOnClickH()}>
                H
            </span>

            <div className={isHidden ? `${style.sidebar} ${style.siderbarHidden}` : style.sidebar}>
                <div className={style.header}>
                    <span className={style.user}>
                        Therainisme
                    </span>
                </div>

                {musics.map(music => {
                    return (
                        <div
                            className={`${style.item} ${selected.name === music.name ? style.active : ''}`}
                            onClick={e => handleOnClickMusicItem(music)}
                            key={music.name}>
                            {music.name}
                        </div>
                    );
                })}

                <audio ref={audioRef}></audio>

            </div>
        </>
    )
}

export default PlayingSideBar;