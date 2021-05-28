import React, {Component} from 'react';

import css from './Article.module.css'
import Header from "./Header/Header";

import logo from "../../assets/images/logo.png"
import {Department} from "../../static/department"

import { DocumentAPI } from './../../api/document';

const MarkdownIt = require('markdown-it')

interface Props {
    location: any
    match: any
}

class Article extends Component<Props> {
    state = {
        content: ""
    }

    private markdownElements: React.RefObject<HTMLElement> = React.createRef()

    render() {
        const {params} = this.props.match
        const department = params.target.split('#')[0]
        const icon = Department.getByFullName(department).logo
        return (
            <article className={`${css.article} ${css.container}`}>
                <Header
                    icon={icon}
                    title="我现在是想测试一下多媒体部的效果"
                    author="Therainisme"
                    published="March 22, 2021"
                />
                <span dangerouslySetInnerHTML={{__html: this.state.content}} ref={this.markdownElements}>
                </span>
            </article>
        );
    }

    componentDidMount() {
        // todo get markdown text from server
        const {target} = this.props.match.params
        const md = new MarkdownIt();
        DocumentAPI.getMarkdownByUrl('/docs/introduction/multimedia-department.md')
        .then((res) => {
            const content = md.render(res.data)
            this.setState({content})
        })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        const h2List: HTMLCollection = this.markdownElements.current!.getElementsByTagName('h2')
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const {hash} = window.location;
        // todo modified scroll height
    }
}

export default Article;