import { combineReducers } from 'redux';
import clientReducer, { ClientState } from './ClientReducer';
import { musicPlayerReducer, MusicPlayerState } from './MusicPlayerReducer';

const appReducer = combineReducers({
    clientReducer,
    musicPlayerReducer
});

export interface AppReducer {
    clientReducer: ClientState;
    musicPlayerReducer: MusicPlayerState;
}


export default appReducer;