import React from "react";
import Sword from "./Sword";
import Kill from "./Kill";
import StealKun from "./StealKun";

function GameCollection() {
	return (
		<div style={{padding: "8rem 0"}}>
			<div style={{display: "flex", justifyContent: "center"}}>
				<span contentEditable="false" style={{fontSize: "4rem", fontWeight: "bold"}}>游戏合集</span>
			</div>
      <Kill />
      <Sword />
      <StealKun />
		</div>		
	)
}

export default GameCollection;
