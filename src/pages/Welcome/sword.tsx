import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";


function PromotionalVideo() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="Sword"
            description="科协游戏开发方向李一奔的作品"
            bannerStyle={{ width: "80%", height: "80vh" }}>
                <a href="http://game.kexie.space/">
                     <img height="100%"
                width="100%" 
                src="../src/assets/images/sword.jpg" 
                ref={addScrollAnimationRefs}   
                style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }} />
                </a>
           
        </Section>
    );
}

export default PromotionalVideo;