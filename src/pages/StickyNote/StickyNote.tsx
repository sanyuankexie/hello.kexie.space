import React from "react"
import Float from "../../component/Float/Float"
import css from './StickyNote.module.css'

function StickyNote() {
    return (
        <>
            <Float speed={64}>
                <div className={css.container}>
                    <div className={css.title}>StickyNote</div>
                </div>
            </Float>
        </>
    )
}

export default StickyNote