import axios from 'axios'

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

    static async getMusicById(id: number | string) {
        const data = await axios.get(`/song/detail?ids=${id}`);
    }
}