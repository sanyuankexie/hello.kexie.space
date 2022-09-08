import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";


function PromotionalVideo() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="人工智能炫技现场"
            description="一个好玩的AI手势训练模型"
            bannerStyle={{ width: "80%", height: "80vh" }}>
            
            <iframe src="http://127.0.0.1:5500/gestureRecognition/index.html"
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no"
                allow="microphone;camera;midi;encrypted-media;"
                style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" ,background:"black"}}
                ref={addScrollAnimationRefs}
            ></iframe>
           
        </Section>
    );
}

export default PromotionalVideo;