import React from "react";
import "./css/dirty.scss";
import LearningDirectionList from "./LearningDirectionList";
import Timeline from "./Timeline";
import ContestList from "./ContestList";
import Departments from "./Departments";
import Jumbotron from "./Jumbotron";
import PromotionalVideo from "./PromotionalVideo";
import Mikutap from "./Mikutap";
import DeepLearningVideo from "./DeepLearningVideo";
import SoulVoice from "./SoulVoice";
import Sword from "./sword";
import Synths from "./synths";
import StealKun from "./stealKun";

import MachineTrain from "./MachineTrain";
import Essay from "./Essay";

function Welcome() {
  return (
    <>
      <Jumbotron />
      {/* <MachineTrain /> */}
      <PromotionalVideo />
      <Departments />
      <LearningDirectionList />
      <Mikutap />
      <Synths />
      <DeepLearningVideo />
      <Sword />
      <StealKun />
      <Timeline />
      {/* <Essay /> */}
      <ContestList />
      <SoulVoice />
    </>
  );
}

export default Welcome;

