import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import css from './index.module.scss'
import { CommentOutlined } from '@ant-design/icons'
import { Loading } from "../Spin";

interface IProps {
    name: string
}

function UserCard({ name }: IProps) {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        (async function () {
            const res = await axios.get(`https://api.github.yuuza.net/users/${name}`);
            const { login, bio, avatar_url, html_url, location, company } = res.data;
            setUser({
                name: login,
                bio,
                avatar: avatar_url,
                profile: html_url,
                location, company
            });
        })();
    }, []);

    return (
        !user ? <Loading size={30} /> :
            <div className={css.container}>
                <img className={css.avatar} src={`${user.avatar}&s=60`} alt="" />
                <span className={css.right}>
                    <span className={css.name}>{user.name}</span>
                    <span className={css.bio}>{user.bio}</span>
                    <span className={css.location}>
                        {!user.company && !user.location ? '' : <CommentOutlined style={{ marginRight: "5px" }} />}
                        {user.company ? user.company : user.location}
                    </span>
                </span>
            </div>
    );
}

export default UserCard