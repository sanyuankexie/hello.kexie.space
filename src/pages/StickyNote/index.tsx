import React from "react"
import Float from "../../component/Float"
import style from './index.module.css'

function StickyNote() {
    return (
        <>
            <Float speed={64} initPosition={{ x: 0, y: 0 }}>
                <div className={style.container}>
                    <div className={style.title}>StickyNote</div>
                    <Note></Note>
                </div>
            </Float>
        </>
    )
}

export default StickyNote

function Note() {
    return (
        <div className={style.note}>
            <div className={style.bar}>
                <img className={style.avatar} src="https://avatars.githubusercontent.com/u/41776735?v=4&s=24" alt="" />
                These are responsive.
            </div>
            <div className={style.body}>For a total of 49 different combinations!</div>
        </div>
    )
} 

// function 