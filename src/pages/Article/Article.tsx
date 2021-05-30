import React, { Component } from 'react';

// import 'highlight.js/styles/railscasts.css'
// import 'highlightjs-material-dark-theme/css/materialdark.css'
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


interface Props {
    location: any
    match: any
}

class Article extends Component<Props> {
    state = {
        content: "",
        title: ""
    }

    private markdownElements: React.RefObject<HTMLElement> = React.createRef()

    render() {
        const { params } = this.props.match
        const department = params.target.split('#')[0]
        const icon = Department.getByFullName(department).logo

        const { title, content } = this.state
        return (
            <article className={`${css.article} ${css.container}`}>
                <Header
                    icon={icon}
                    title={title}
                    author="Therainisme"
                    published="March 22, 2021"
                />
                <span dangerouslySetInnerHTML={{ __html: content }} ref={this.markdownElements}>
                </span>
            </article>
        );
    }

    componentDidMount() {
        const { params } = this.props.match
        const department = params.target.split('#')[0]
        DocumentAPI.getMarkdownByUrl(`/docs/introduction/${department}.md`)
            .then((res) => {
                let content = md.render(res.data)
                const title = content.match(/<h1>(\S*)<\/h1>/)[1]
                content = content.replace(content.match(/<h1>(\S*)<\/h1>/)[0], "")
                this.setState({ content, title })
            })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        const h2List: HTMLCollection = this.markdownElements.current!.getElementsByTagName('h2')
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const { hash } = window.location;
        // todo modified scroll height
    }
}

export default Article;