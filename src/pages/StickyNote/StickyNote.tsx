import React from "react"
import Float from "../../component/Float/Float"
import css from './StickyNote.module.css'

function StickyNote() {
    return (
        <>
            <Float speed={64} initialPosition={{ x: 0, y: 0 }}>
                <div className={css.container}>
                    <div className={css.title}>StickyNote</div>
                    <Note></Note>
                </div>
            </Float>
        </>
    )
}

export default StickyNote

function Note() {
    return (
        <div className={css.note}>
            <div className={css.bar}>
                <img className={css.avatar} src="https://avatars.githubusercontent.com/u/41776735?v=4&s=24" alt="" />
                These are responsive.
            </div>
            <div className={css.body}>For a total of 49 different combinations!</div>
        </div>
    )
} 

// function 