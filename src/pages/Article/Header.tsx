import React from 'react';
import css from './index.module.scss'

interface IProps {
    icon: string
    title: string
    author: string
    published: string
}

function Header({ title, author, published, icon }: IProps) {
    return (
        <div className={css.headerContainer}>
            <h1 className={css.h1}>
                <img
                    src={icon}
                    alt=""
                    className={css.icon}
                    style={title === "嵌入式开发" ? { background: "rgb(46, 36, 89)" } : {}} />
                {title}
            </h1>
            <span className={css.author}>
                <span className={css.caption}>
                    <span className={css.captionHeading}>Written By</span>
                    <span>{author}</span>
                </span>

                <span className={css.caption}>
                    <span className={css.captionHeading}>published</span>
                    <span>{published}</span>
                </span>
            </span>
        </div>
    );
}

export default Header;