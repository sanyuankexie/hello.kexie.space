import React from "react";

import style from "./index.module.css";
import PlayerPanel from "./PlayerPanel";
import PlayingSideBar from "./PlayerSidebar";
import PlayerMain from "./PlayerMain";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './store'
const store = createStore(reducer as any);

function MusicPlayer() {

    return (
        <Provider store={store}>
            <section className={style.container}>
                <PlayingSideBar></PlayingSideBar>
                <PlayerMain></PlayerMain>
                <PlayerPanel></PlayerPanel>
            </section >
        </Provider>
    );
}

export default MusicPlayer;



