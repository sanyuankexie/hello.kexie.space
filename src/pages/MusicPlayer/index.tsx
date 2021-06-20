import React, { useEffect, useRef, useState } from "react";
import {
    SyncOutlined,
    StepBackwardFilled,
    PlayCircleFilled,
    PauseCircleFilled,
    StepForwardFilled,
    RedoOutlined,
} from '@ant-design/icons';
import style from "./index.module.css";
import Remixicon from '../../component/Remixicon/index';
import { MusicAPI } from "../../api";

function MusicPlayer() {
    const [isPlay, setIsPlay] = useState<boolean>(true);

    const [musics, setMusics] = useState(RecommendMusics);
    const [select, setSelect] = useState(RecommendMusics[0]);
    const audioRef = useRef<HTMLAudioElement>(null!);
    useEffect(() => {
        let interval: any = undefined;
        const loadingMusic = async () => {
            const res = await MusicAPI.getMusicAudioAndLyric(select.id);
            audioRef.current.src = res.audio;
            audioRef.current.play();
            interval = setInterval(() => {
                const { currentTime, duration } = audioRef.current;
                setPass(Math.floor(currentTime / duration * 100 * 100) / 100);
            }, 100);
        }
        loadingMusic();

        return () => {
            clearInterval(interval);
        }
    }, [select]);

    function handleOnClickMusicItem(music: any) {
        if (select.name === music.name) return;
        setSelect(music);
    }

    const [pass, setPass] = useState(20);
    function handleOnProgress(e: React.MouseEvent) {
        const newPass = (e.clientX / window.innerWidth) * 100;
        const { duration } = audioRef.current;
        audioRef.current.currentTime = newPass / 100 * duration
        setPass(newPass);
    }

    function handleOnMode() {

    }

    function handleOnPrevious() {

    }

    function handleOnPlay() {
        const { paused } = audioRef.current;
        if (!paused) {
            setIsPlay(false);
            audioRef.current.pause();
        } else {
            setIsPlay(true);
            audioRef.current.play();
        }
    }

    function handleOnNext() {

    }

    function handleOnReplay() {

    }

    return (
        <section className={style.container}>
            <div className={style.sidebar}>
                <div className={`${style.item} ${style.user}`}>Therainisme</div>

                {musics.map(music => {
                    return (
                        <div
                            className={`${style.item} ${select.name === music.name ? style.active : ''}`}
                            onClick={e => handleOnClickMusicItem(music)}>
                            {music.name}
                        </div>
                    );
                })}

                <audio ref={audioRef}></audio>

            </div>
            <div className={style.main}>
                <div className={style.background}></div>
                <div className={style.lyric}>
                </div>

                <div className={style.panel}>
                    <div className={style.progress} onClick={e => handleOnProgress(e)}>
                        <div className={style.pass} style={{ width: `${pass}%` }}></div>
                        <div className={style.circle} style={{ left: `${pass}%` }}></div>
                    </div>

                    <div className={style.info}>
                        <img className={style.poster} src={`https://p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg`}></img>
                        <div className={style.detail}>
                            <div className={style.musicName}>星辰大海</div>
                            <div className={style.singer}>黄霄云</div>
                        </div>
                    </div>

                    <div className={style.control}>
                        <div className={style.item} onClick={e => handleOnMode()}>
                            <SyncOutlined />
                        </div>
                        <div className={style.item} onClick={e => handleOnPrevious()}>
                            <StepBackwardFilled />
                        </div>
                        <div className={style.item} onClick={e => handleOnPlay()}>
                            {isPlay ? < PauseCircleFilled/> : <PlayCircleFilled />}
                        </div>
                        <div className={style.item} onClick={e => handleOnNext()}>
                            <StepForwardFilled />
                        </div>
                        <div className={style.item} onClick={e => handleOnReplay()}>
                            <RedoOutlined />
                        </div>
                    </div>

                    <div className={style.volume}>
                        <span className={style.item}>
                            <Remixicon.VolumeUpFill className={style.item} />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MusicPlayer;

const RecommendMusics = [
    {
        id: "1811921555",
        name: "星辰大海",
        singer: "黄霄雲",
        poster: "https://p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg",
    },
    {
        id: "1849953578",
        name: "Fluorite Eye's Song",
        singer: "八木海莉",
        poster: "https://p2.music.126.net/V-t3V8sqYVLY05IplTjHkg==/109951166053365814.jpg",
    },
] as const;