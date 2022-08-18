import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";


function PromotionalVideo() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="Sword"
            description="科协游戏开发方向李一奔的作品"
            url="全屏体验"
            bannerStyle={{ width: "80%", height: "80vh" }}>
                <iframe src="https://game.kexie.space/"
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no"
                style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                ref={addScrollAnimationRefs}
            ></iframe>
           
        </Section>
    );
}

export default PromotionalVideo;