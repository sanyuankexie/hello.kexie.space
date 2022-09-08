import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import { Video } from "../../static/cos";

function PromotionalVideo() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="宣传视频"
            description="2022科协招新电影正在热播中"
            bannerStyle={{ width: "80%" }}
            bannerClassName={`aspect-ratio`}>
            <video
                controls
                style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                ref={addScrollAnimationRefs}
                poster={Video.MachineLearning.poster}
            >
                <source src={Video.PromotionalVideo.url} type="video/mp4"></source>
            </video>
        </Section>
    );
}

export default PromotionalVideo;