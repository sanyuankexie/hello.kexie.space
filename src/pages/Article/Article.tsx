import { useEffect, useRef, useState } from 'react';

import './code.css'

import css from './Article.module.css'
import Header from "./Header/Header";

import { Department } from "../../static/department"
import { DocumentAPI } from './../../api/document';

const MarkdownIt = require('markdown-it')
const hljs = require('highlight.js')
const md = new MarkdownIt({
    highlight: function (str: string, lang: string) {
        try {
            return '<pre class="code-block"><code>' +
                hljs.highlight(str, { language: lang }).value +
                '</code></pre>'
        } catch (__) { }
        return '';
    }
});


interface IProps {
    location: any
    match: any
}

function Article({ location, match }: IProps) {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const markdownElementsContainer = useRef<HTMLDivElement>(null);

    const { params } = match
    const department = params.target.split('#')[0]
    const icon = Department.getByFullName(department).logo

    useEffect(() => {
        DocumentAPI.getMarkdownByUrl(`/docs/introduction/${department}.md`)
            .then((res) => {
                let content = md.render(res.data)
                const title = content.match(/<h1>(\S*)<\/h1>/)[1]
                content = content.replace(content.match(/<h1>(\S*)<\/h1>/)[0], "")
                setContent(content)
                setTitle(title)
            })
    }, []);

    useEffect(() => {
        const h2List: HTMLCollection = markdownElementsContainer.current!.getElementsByTagName('h2')
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const { hash } = location;
        document.documentElement.scrollTop = 110
        // todo modified scroll height
    }, [content]);

    return (
        <article className={`${css.article} ${css.container}`}>
            <Header
                icon={icon}
                title={title}
                author="Therainisme"
                published="March 22, 2021"
            />
            <span dangerouslySetInnerHTML={{ __html: content }} ref={markdownElementsContainer}>
            </span>
        </article>
    );
}

export default Article;