import React from 'react';
import './css/dirty.scss';
import LearningDirectionList from "./LearningDirectionList";
import Timeline from './Timeline';
import ContestList from './ContestList';
import Departments from './Departments';
import Jumbotron from './Jumbotron';
import PromotionalVideo from './PromotionalVideo';
import Mikutap from './Mikutap';
import DeepLearningVideo from './DeepLearningVideo';
import SoulVoice from './SoulVoice';

function Welcome() {
    return (
        <>
            <Jumbotron />
            <PromotionalVideo />
            <Mikutap />
            <DeepLearningVideo />
            <Departments />
            <LearningDirectionList />
            <Timeline />
            <ContestList />
            <SoulVoice/>
        </>
    );
}

export default Welcome;