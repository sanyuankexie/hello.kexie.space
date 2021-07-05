import axios from 'axios'
import { getCliendIp } from '../utils';

export class DocumentAPI {
    static async getMarkdownByUrl(url: string) {
        return await axios.get(url)
    }
}

export class CommentAPI {
    static GithubIssueUrl: string = "https://api.github.yuuza.net/repos/sanyuankexie/hellokexie/issues/6/comments"
}

export class MusicAPI {
    static BaseUrl = "https://music.server.therainisme.com";

    static async getMusicsDetailsByIds(id: number | string) {
        const data = await axios.get(`${this.BaseUrl}/song/detail?ids=${id}`);
        const res = data.data.songs.map((x: any) => {
            return {
                id: x.id,
                name: x.name,
                singer: x.ar[0].name,
                poster: x.al.picUrl,
            }
        })
        return res;
    }

    static async getMusicAudioAndLyric(id: string) {
        // const clientIp = getCliendIp();
        // const res1 = await axios.get(`${this.BaseUrl}/song/url?id=${id}&realIP=${clientIp}`);
        const audio = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
        const res2 = await axios.get(`${this.BaseUrl}/lyric?id=${id}`);
        const lyric = res2.data.lrc !== undefined ? res2.data.lrc.lyric : "";
        return {audio, lyric};
    }
}