import React from "react";
import "./css/dirty.scss";
import LearningDirectionList from "./LearningDirectionList";
import Timeline from "./Timeline";
import ContestList from "./ContestList";
import Departments from "./Departments";
import Jumbotron from "./Jumbotron";
import PromotionalVideo from "./PromotionalVideo";
import Movie from "./Movie";
import Mikutap from "./Mikutap";
import DeepLearningVideo from "./DeepLearningVideo";
import SoulVoice from "./SoulVoice";

import MachineTrain from "./MachineTrain";
import GameCollection from "./GameCollection";
import Essay from "./Essay";
import GuethubApp from "./GuethubApp";

function Welcome() {
  return (
    <>
      <Jumbotron />
      <PromotionalVideo />
      <Departments />
      <LearningDirectionList />
      <Movie />
      <GuethubApp/>
      <Mikutap />
      {/*<MachineTrain />*/}
      <GameCollection />
      {/* <DeepLearningVideo /> */}

      <Timeline />
      {/* <Essay /> */}
      <ContestList />
			<SoulVoice />
    </>
  );
}

export default Welcome;
