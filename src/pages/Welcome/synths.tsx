import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";

function PromotionalVideo() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

  return (
    <Section
      title="Synths"
      description="Ableton 出品的在线合成器"
      bannerStyle={{ width: "80%", height: "80vh" }}
    >
      <iframe
        src="https://learningsynths.ableton.com/en/playground"
        height="100%"
        width="100%"
        frameBorder="0"
        scrolling="0"
        style={{
          boxShadow:
            "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
        }}
        ref={addScrollAnimationRefs}
      ></iframe>
    </Section>
  );
}

export default PromotionalVideo;
