const tempLyric = "[00:00.000] 作词 : 温莨/瞿子千/刘涛\n[00:01.000] 作曲 : 瞿子千/刘涛\n[00:02.000] 编曲 : 瞿子千\n[00:03.000] 制作人 : 瞿子千/刘涛\n[00:15.579]我愿变成一颗恒星\n[00:20.899]守护海底的蜂鸣\n[00:26.510]It's my dream it's magic\n[00:29.565]照亮你的心\n[00:32.182]To your eyes 有多远的距离\n[00:37.732]穿过人海 别停下来\n[00:40.822]趁现在还有期待\n[00:46.389]会不会我们的爱\n[00:49.071]会被风吹向大海\n[00:53.356]不再回来\n[00:57.473]每当你向我走来\n[01:00.936]告诉我星辰大海\n[01:15.018]遥遥微光 与我同行\n[01:17.839]盛开在黎明\n[01:20.662]To your eyes 有多远的距离\n[01:26.400]穿过人海 别停下来\n[01:29.358]趁现在还有期待\n[01:34.989]会不会我们的爱\n[01:38.087]会被风吹向大海\n[01:41.635]不再回来\n[01:45.802]每当你向我走来\n[01:49.485]告诉我星辰大海\n[02:15.098]趁现在还有期待\n[02:20.412]会不会我们的爱\n[02:23.342]会被风吹向大海\n[02:27.409]不再回来\n[02:31.909]每当你向我走来\n[02:35.078]告诉我星辰大海\n[02:43.573]会不会我们的爱\n[02:46.473]像星辰守护大海\n[02:50.038]不曾离开\n[02:54.789]我向你奔赴而来\n[02:57.889]你就是星辰大海\n[03:11.932]我眼中炽热的恒星\n[03:18.352]长夜里照我前行\n[03:19.033] 吉他Guitar：谭侃侃/瞿子千\n[03:19.714] 弦乐String writing：Maosir\n[03:20.395] 合声Backing vocals：金天/瞿子千/黄霄雲/郭钰菲/陆晶晶\n[03:21.076] 混音师Mixing engineer：刘振东\n[03:21.757] 母带后期混音师Mastering engineer：刘振东\n[03:22.438] 监制Executive producer：陶诗\n[03:23.119] 艺人统筹Artist co ordination：高赫阳/吉娜\n[03:23.800] 录音棚Recording studio：好乐无荒（北京）录音棚\n[03:24.481] 制作公司Manufacturing company：好乐无荒\n[03:25.162] 推广策划Promotion planning：左左\n[03:25.843] OP：好乐无荒\n[03:26.524] SP：索尼音乐版权代理（北京）有限公司\n[03:27.205] 特别鸣谢：梦响强音文化传播（上海）有限公司\n[03:27.886] （本作品声明：著作权权利保留，未经许可，不得使用）\n"

export const RecommendMusics = [
    {
        id: "1811921555",
        name: "星辰大海",
        singer: "黄霄雲",
        poster: "https://p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg",
    },
    {
        id: "35625821",
        name: "记念",
        singer: "雷雨心",
        poster: "http://p2.music.126.net/W_srVOtG_DKS1-txPLqNQQ==/3273246117001205.jpg",
    },
    {
        id: "1849953578",
        name: "Fluorite Eye's Song",
        singer: "八木海莉",
        poster: "https://p2.music.126.net/V-t3V8sqYVLY05IplTjHkg==/109951166053365814.jpg",
    },
];

export interface Lyric {
    time: number;
    line: string;
}

export function parseLyric(original: string): Lyric[] {
    const lyricList = original.split("\n");
    const res = lyricList.map((x: string) => {
        const regex = (/\[(.+?)\]/g);
        const regexRes = regex.exec(x);
        if (regexRes) {
            const [zero, one] = regexRes;
            const time = Number((one.substring(0, 2))) * 60 + Number((one.substring(3, one.length)));
            const line = x.replace(zero, "").trim();
            return { time, line };
        }
    });
    return res.filter(x => !!x) as Lyric[];
}

export interface RecommendMusic {
    id: string;
    name: string;
    singer: string;
    poster: string;
}

export type MusicPlayerState = typeof init;

export type action =
    { type: "setPass", pass: number } |
    { type: "setSelected", selected: RecommendMusic } |
    { type: "setPlayerStatus", playerStatus: "playing" | "pausing" } |
    { type: "setAudioRef", audioRef: React.MutableRefObject<HTMLAudioElement> } |
    { type: "setLyrics", lyrics: Lyric[] } |
    { type: "setCurrentTime", currentTime: number } |
    { type: "setWaiting", waiting: number};

export function reducer(state: MusicPlayerState = init, action: action) {
    const newState = { ...state } as any;
    let key = action.type.substring(3);
    key = key.charAt(0).toLowerCase() + key.slice(1);
    newState[key] = (action as any)[key];
    return newState;
}

export default reducer;

const init = {
    pass: 0,
    selected: RecommendMusics[0],
    playerStatus: "pausing",
    audioRef: Object.create(new Object()) as React.MutableRefObject<HTMLAudioElement>,
    lyrics: parseLyric(tempLyric) as Lyric[],
    currentTime: 0,
    waiting: (new Date()).getTime(),
}

