import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import { Video } from "../../static/cos";
import style from "./css/index.module.scss";

function DeepLearningVideo() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="深度学习"
            description="趣味视频 “当逮虾户遇上目标检测”"
            bannerStyle={{ width: "80%" }}
            bannerClassName={`aspect-ratio`}
        >
            <video
                controls
                style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                ref={addScrollAnimationRefs}
            >
                <source src={Video.MachineLearning.url} type="video/mp4"></source>
            </video>
        </Section>
    );
}

export default DeepLearningVideo;