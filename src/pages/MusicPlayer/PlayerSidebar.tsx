import React, { Dispatch, ReactHTMLElement, useEffect, useRef, useState } from "react";
import style from './index.module.scss'
import welcomeStyle from '../Welcome/index.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { action, MusicPlayerState, parseLyric, RecommendMusics } from "../../store/MusicPlayerReducer";
import { MusicAPI } from "../../api";
import { AppReducer } from "../../store/AppReducer";
import { MsgAPI } from "../../store/ClientReducer";

const musics = RecommendMusics;

function PlayingSideBar() {
    const selected = useSelector(({ musicPlayerReducer }: AppReducer) => musicPlayerReducer.selected);
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
            // audioRef.current.play();
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
        client.send({ type: "switch music", data: { musicId: music.id }, userName: client.name });
    }

    const client = useSelector(({ clientReducer }: AppReducer) => clientReducer.client);

    useEffect(() => {
        let totalDiffServerTime = 0;
        let averageDiffServerTime = 0;
        let syncTimes = 0;
        let musicPlayTime = 0;
        let listeningTimer: any = undefined;

        client.addFuncListener('switch music', (msg) => {
            console.log(msg);
            const { data, userName } = JSON.parse(msg) as MsgAPI;
            const { musicId, playTimestamp } = data;

            musicPlayTime = playTimestamp;
            totalDiffServerTime = 0;
            averageDiffServerTime = 0;
            syncTimes = 0;
            dispatch({ type: "setSelected", selected: RecommendMusics.find(x => x.id === musicId)! });

            audioRef.current?.play();
            setTimeout(()=>{
                !audioRef.current.paused && audioRef.current.pause();
            }, 10);

        })

        client.addFuncListener('sync server time', (msg) => {
            const { data } = (JSON.parse(msg) as MsgAPI);
            const nowServerTimestamp = data.serverTimestamp;
            const clientTimestamp = new Date().getTime();
            totalDiffServerTime = totalDiffServerTime + clientTimestamp - nowServerTimestamp;
            syncTimes++;
            averageDiffServerTime = totalDiffServerTime / (1.0 * syncTimes);
            

            if (listeningTimer === undefined && audioRef.current.paused) {
                listeningTimer = setInterval(() => {
                    const clientTimestamp = new Date().getTime();
                    if (Math.abs(clientTimestamp - averageDiffServerTime - musicPlayTime) <= 10) {
                        if (audioRef.current.paused) {
                            console.log('start')
                            audioRef.current.play();
                            clearInterval(listeningTimer);
                            listeningTimer = undefined;
                        }
                    }
                    console.log(averageDiffServerTime), 'test.........';
                }, 1);
            }
        })
    }, []);

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

                <audio ref={audioRef} autoPlay={false}></audio>

            </div>
        </>
    )
}

export default PlayingSideBar;