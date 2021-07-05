
import { combineReducers } from 'redux';
import clientReducer from './ClientReducer';
import { musicPlayerReducer, MusicPlayerState } from './MusicPlayerReducer';

const appReducer = combineReducers({
    clientReducer,
    musicPlayerReducer
});

export interface AppReducer {
    musicPlayerReducer: MusicPlayerState
}


export default appReducer;