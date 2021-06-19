import React from "react";
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

function MusicPlayer() {
    return (
        <section className={style.container}>
            <div className={style.sidebar}>
                <div className={`${style.item} ${style.user}`}>Therainisme</div>
                <div className={`${style.item} ${style.active}`}>星辰大海</div>
                <div className={style.item}>Lost Game</div>
            </div>
            <div className={style.main}>
                <div className={style.background}></div>
                <div className={style.lyric}>
                </div>


                <div className={style.panel}>
                    <div className={style.progress}>
                        <div className={style.pass}></div>
                        <div className={style.circle}></div>
                    </div>

                    <div className={style.info}>
                        <img className={style.poster} src={`https://p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg`}></img>
                        <div className={style.detail}>
                            <div className={style.musicName}>星辰大海</div>
                            <div className={style.singer}>黄霄云</div>
                        </div>
                    </div>

                    <div className={style.control}>
                        <div className={style.mode}>
                            <SyncOutlined />
                        </div>
                        <div className={style.previous}>
                            <StepBackwardFilled />
                        </div>
                        <div className={style.play} >
                            <PlayCircleFilled />
                        </div>
                        <div className={style.next}>
                            <StepForwardFilled />
                        </div>
                        <div className={style.replay}>
                            <RedoOutlined />
                        </div>
                    </div>

                    <div className={style.volume}>
                        <SoundFilled />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MusicPlayer;