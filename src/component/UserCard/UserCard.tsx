import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import css from './UserCard.module.css'
import { CommentOutlined } from '@ant-design/icons'
import { Loading } from "../Spin";



interface IProps {
    login: string
    displayAvatar?: boolean
}

function UserCard({ login, displayAvatar }: IProps) {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get(`https://api.github.com/users/${login}`)
            .then(res => {
                const { login, name, bio, avatar_url, html_url, location, company } = res.data
                setUser({ login, name, bio, avatar: avatar_url, htmlUrl: html_url, location, company })
            })
    }, []);

    const [content, setContent] = useState<JSX.Element>();
    useEffect(() => {
        if (!user) {
            setContent(<Loading size={30} />)
        }
        else {
            setContent(
                <div className={css.container}>
                    {!!displayAvatar || displayAvatar === undefined ? <img className={css.avatar} src={`${user.avatar}&s=60`} alt="" /> : ""}
                    <span className={css.right}>
                        <span className={css.name}>{user.login}</span>
                        <span className={css.bio}>{user.bio}</span>
                        <span className={css.location}>
                            {console.log(!user.company && !user.location)}
                            {!user.company && !user.location ? '' : <CommentOutlined style={{ marginRight: "5px" }} />}
                            {user.company ? user.company : user.location}
                        </span>
                    </span>
                </div>
            )
        }
    }, [user]);

    return (
        <div>
            {content}
        </div>
    )
}

interface IUser {
    login: string
    name: string
    bio: string
    avatar: string
    htmlUrl: string
    location?: string
    company?: string
}

export default UserCard