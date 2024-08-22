import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import { Video } from "../../static/cos";

function PromotionalVideo() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

  return (
    <Section
      title="宣传视频"
      description="2023科协招新介绍视频"
      bannerStyle={{ width: "80%" }}
      bannerClassName={`aspect-ratio`}
    >
      <div>
        <video
          controls
          style={{
            boxShadow:
              "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
            borderRadius: 16
          }}
          ref={addScrollAnimationRefs}
          poster={Video.MachineLearning.poster}
        >
          <source src={Video.PromotionalVideo.url} type="video/mp4"></source>
        </video>
      </div>
    </Section>
  );
}

export default PromotionalVideo;

