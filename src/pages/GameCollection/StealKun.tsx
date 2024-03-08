import React from "react";
import { transform } from "typescript";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";

function PromotionalVideo() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();
  const url = "https://steal-kun.kexie.space";

  return (
    <Section
      title="StealKun"
      description="科协游戏开发方向蒲一帆的作品"
      url={url}
      url_title="全屏体验"
      bannerStyle={{ width: "80%", height: "80vh" }}
    >
      <iframe
        src={url}
        height="100%"
        width="100%"
        allowFullScreen={true}
        frameBorder="0"
        scrolling="no"
        style={{
          boxShadow:
            "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
          background: "black",
        }}
        ref={addScrollAnimationRefs}
      ></iframe>
    </Section>
  );
}

export default PromotionalVideo;
