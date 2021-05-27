import React, {Component} from 'react';

import css from './Header.module.css'

interface Props {
    icon: string
    title: string
    author: string
    published: string
}

class Header extends Component<Props> {
    render() {
        const {title: content, author, published, icon} = this.props
        return (
            <div className={css.container}>
                <h1 className={css.h1}>
                    <img src={icon} alt="" className={css.icon}/>
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
}

export default Header;