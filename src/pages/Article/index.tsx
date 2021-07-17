import React from 'react';
import { useEffect, useRef, useState } from 'react';

import './code.scss'

import css from './index.module.scss'
import Header from "./Header";

import { Department } from "../../static/department"
import MarkdownParser from '../../utils/markdown';
import axios from 'axios';
import { Logo } from '../../static/cos';

interface IProps {
    location: any
    match: any
}

function Article({ location, match }: IProps) {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const markdownElementsContainer = useRef<HTMLDivElement>(null);

    const { params } = match;
    const filename = params.target.split('#')[0];
    let icon = Department.getByFullName(filename)?.logo;
    !icon && (icon = Logo[filename as (keyof typeof Logo)] as any)

    useEffect(() => {
        axios.get(`/docs/introduction/${filename}.md`)
            .then((res) => {
                let content = MarkdownParser.render(res.data);
                const title = content.match(/<h1>(\S*)<\/h1>/)![1];
                content = content.replace(content.match(/<h1>(\S*)<\/h1>/)![0], "");
                setContent(content);
                setTitle(title);
            });
    }, []);

    useEffect(() => {
        const h2List: HTMLCollection = markdownElementsContainer.current!.getElementsByTagName('h2')
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const { hash } = location;
        // document.documentElement.scrollTop = 110
        // todo modified scroll height
    }, [content]);

    return (
        <article className={`${css.article} ${css.articleContainer}`}>
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