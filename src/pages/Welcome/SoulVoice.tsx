import React from "react";
import Section from "../../component/Section";
import CommentList from "./CommentList";
import ProjectList from "./ProjectList";
import style from "./css/index.module.scss";

function SoulVoice() {
    return (
        <Section title="心灵之声">
            <div className={style.sectionContainer} style={{ marginBottom: "10vh" }}>
                <div className={style.subSectionContainer}>
                    <CommentList />
                </div>
                <div className={style.subSectionContainer}>
                    <ProjectList />
                </div>
            </div>
        </Section>
    )
}

export default SoulVoice;