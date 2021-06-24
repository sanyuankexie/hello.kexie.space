import { RecommendMusic } from ".";

const RecommendMusics = [
    {
        id: "1811921555",
        name: "星辰大海",
        singer: "黄霄雲",
        poster: "https://p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg",
    },
    {
        id: "1849953578",
        name: "Fluorite Eye's Song",
        singer: "八木海莉",
        poster: "https://p2.music.126.net/V-t3V8sqYVLY05IplTjHkg==/109951166053365814.jpg",
    },
] as const;

const init = {
    pass: 0,
    selected: RecommendMusics[0],
    playerStatus: "pausing",
}

export type MusicPlayerStore = typeof init;

export type action =
    { type: "setPass", pass: number } |
    { type: "setSelected", selected: RecommendMusic } |
    { type: "setPlayerStatus", playerStatus: "playing" | "pausing" };

function reducer(state: MusicPlayerStore = init, action: action) {
    switch (action.type) {
        case "setPass":
            return {
                ...state,
                pass: action.pass
            };
        case "setSelected":
            return {
                ...state,
                selected: action.selected
            };
        case "setPlayerStatus":
            return {
                ...state,
                playerStatus: action.playerStatus
            }
        default:
            return state;
    }
}

export default reducer;

