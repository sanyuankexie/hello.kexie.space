import React from "react";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import reducer, { MusicPlayerState } from './store'
import PlayerContainer from './PlyerContainer';
const store = createStore(reducer as any);

function MusicPlayer() {


    return (
        <Provider store={store}>
            <PlayerContainer></PlayerContainer>
        </Provider>
    );
}

export default MusicPlayer;



