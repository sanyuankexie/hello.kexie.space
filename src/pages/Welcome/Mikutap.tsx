import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";

function Mikutap() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

  return (
    <Section
      title="Mikutap"
      description="一个有趣的音乐互动网站"
      bannerStyle={{ width: "80%", height: "80vh" }}
    >
      <iframe
        src="https://mikutap.msqt.fun"
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

export default Mikutap;
