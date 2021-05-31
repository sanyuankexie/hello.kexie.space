import axios from "axios";
import { useEffect, useState } from "react";
import css from './UserCard.module.css'
import { CommentOutlined } from '@ant-design/icons'
import { Loading } from "../Spin";



interface IProps {
    login: string
}

function UserCard({ login }: IProps) {
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
                    <img className={css.avatar} src={user.avatar} alt="" />
                    <span className={css.right}>
                        <span className={css.name}>{user.name}</span>
                        <span className={css.bio}>{user.bio}</span>
                        <span className={css.location}>
                            <CommentOutlined style={{ marginRight: "5px" }} />
                            {user.company}
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