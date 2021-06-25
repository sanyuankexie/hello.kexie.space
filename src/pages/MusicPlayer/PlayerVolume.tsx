import React from "react";
import style from './index.module.css'
import Remixicon from "../../component/Remixicon";

function PlayingVolume() {

    return (
        <div className={style.volume}>
            <span className={style.item}>
                <Remixicon.VolumeUpFill className={style.item} />
            </span>
        </div>
    )
}

export default PlayingVolume;