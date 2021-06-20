import React, { useState } from "react";
import {
    SyncOutlined,
    StepBackwardFilled,
    PlayCircleFilled,
    PauseCircleFilled,
    StepForwardFilled,
    RedoOutlined,
    SoundFilled,
} from '@ant-design/icons';
import style from "./index.module.css";
import Remixicon from '../../component/Remixicon/index';

function MusicPlayer() {
    const [isPlay, setIsPlay] = useState<boolean>(false);

    const [musics, setMusics] = useState(["星辰大海", "Lost Game", "Flurite Eye’s Song"]);
    const [select, setSelect] = useState("Flurite Eye’s Song");
    function handleOnMusic(music: string) {
        if (select === music) return;
        setSelect(music);
    }

    const [pass, setPass] = useState(20);
    function handleOnProgress(e: React.MouseEvent) {
        setPass((e.clientX / window.innerWidth) * 100);
    }

    function handleOnMode() {

    }

    function handleOnPrevious() {

    }

    function handleOnPlay() {
        setIsPlay(!isPlay);
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
                            className={`${style.item} ${select === music ? style.active : ''}`}
                            onClick={e => handleOnMusic(music)}>
                            {music}
                        </div>
                    );
                })}

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
                            {isPlay ? <PlayCircleFilled /> : <PauseCircleFilled />}
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