import axios from 'axios'

export class DocumentAPI {
    static async getMarkdownByUrl(url: string) {
        return await axios.get(url)
    }
}