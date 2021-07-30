import React from 'react';
import { useEffect, useRef, useState } from 'react';

import './code.scss'

import css from './index.module.scss'
import Header from "./Header";

import { Department, DepartmentFullName } from "../../static/department"
import MarkdownParser from '../../utils/markdown';
import axios from 'axios';
import  { Docs, Logo } from '../../static/cos';
import { match } from 'react-router-dom';

interface Props {
    location: Location
    match: match<{target: string}>
}

function Article({ location, match }: Props) {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const markdownElementsContainer = useRef<HTMLDivElement>(null);

    const { params } = match;
    const filename = params.target.split('#')[0] as DepartmentFullName;
    let icon = Department.getByFullName(filename)?.logo;
    !icon && (icon = Logo[filename as (keyof typeof Logo)] as any)

    useEffect(() => {
        (async function() {
            const res = await axios.get(`${Docs.PrefixUrl}/${filename}.md`);
            let content = MarkdownParser.render(res.data);
            const title = content.match(/<h1>(\S*)<\/h1>/)![1];
            content = content.replace(content.match(/<h1>(\S*)<\/h1>/)![0], "");
            setContent(content);
            setTitle(title);
        })();
    }, []);

    return (
        <div style={{ background: "white", paddingBottom: "200px" }}>
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
        </div>
    );
}

export default Article;