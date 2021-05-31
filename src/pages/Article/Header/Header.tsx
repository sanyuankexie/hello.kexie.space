import React from 'react';
import css from './Header.module.css'

interface IProps {
    icon: string
    title: string
    author: string
    published: string
}

function Header({ title: content, author, published, icon }: IProps) {
    return (
        <div className={css.container}>
            <h1 className={css.h1}>
                <img src={icon} alt="" className={css.icon} />
                {content}
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