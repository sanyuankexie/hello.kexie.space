import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import css from './index.module.scss'
import { CommentOutlined } from '@ant-design/icons'
import { Loading } from "../Spin";

interface IProps {
    name: string
    displayAvatar?: boolean
}

function UserCard({ name, displayAvatar }: IProps) {
    const [content, setContent] = useState<any>(<Loading size={30} />);
    useEffect(() => {
        (async function () {
            const res = await axios.get(`https://api.github.yuuza.net/users/${name}`);
            const { login, bio, avatar_url, html_url, location, company } = res.data;
            setContent(
                <div className={css.container}>
                    {!!displayAvatar || displayAvatar === undefined ? <img className={css.avatar} src={`${avatar_url}&s=60`} alt="" /> : ""}
                    <span className={css.right}>
                        <span className={css.name}>{login}</span>
                        <span className={css.bio}>{bio}</span>
                        <span className={css.location}>
                            {!company && !location ? '' : <CommentOutlined style={{ marginRight: "5px" }} />}
                            {company ? company : location}
                        </span>
                    </span>
                </div>
            )
        })()
    }, []);

    return content;
}

export default UserCard