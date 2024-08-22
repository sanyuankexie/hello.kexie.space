import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import { Video } from "../../static/cos";

function Movie() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

  return (
    <Section
      title="2023科协招新大电影"
      description="由覃永鹏导演制作的科协大电影«重生4年，我要进科协»正在热播中！"
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
          <source src={Video.MovieVideo.url} type="video/mp4"></source>
        </video>
      </div>
    </Section>
  );
}

export default Movie;
