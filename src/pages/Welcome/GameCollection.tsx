import React from "react";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import { Video } from "../../static/cos";

function Movie() {
	const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

	return (
		<Section
			title="科协游戏作品合集"
			description="历代科协游戏人的优秀作品合集"
			bannerStyle={{ width: "80%", height: "80vh" }}
		>
			<div
				style={{
					boxShadow:
						"0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
					borderRadius: 16
				}}
				ref={addScrollAnimationRefs}
			>
				<a href="/game">
					<img
						src={Video.DeepLearning.poster}
						width={"100%"}
						height={"100%"}
						style={{borderRadius: 16}}
					/>
				</a>
			</div>
		</Section>
	);
}

export default Movie;
