import React, { useEffect, useState } from "react"
import { match } from "react-router-dom"
import { History } from 'history'
import axios from 'axios';
import { Spin } from 'antd';
import { Loading } from "../../component/Spin";


interface Props {
    match: match;
    location: Location;
    history: History
}

function GithubAuth({ location, history }: Props) {
    const [msg, setMsg] = useState<string>("正在请求授权");

    useEffect(() => {
        const githubAuth = async () => {
            const code = location.search.split('=')[1]
            try {
                const res = await axios.post(`http://localhost:4000/github-auth/${code}`)
                const user = {
                    name: res.data.name,
                    avatar: res.data.avatar,
                    token: res.data.token,
                    visitor: false
                }
                localStorage.setItem('user', JSON.stringify(user))
                history.push('/')
                window.location.reload()
            } catch (error) {
                console.error('github auth error', error)
                setMsg("请求授权失败")
            } finally {
            }
        }
        githubAuth()
    }, []);

    return (
        <>
            <div style={{ position: "fixed", width: "100vw", height: "100vh", background: "black", textAlign: "center" }}>
                <div style={{ left: "50%", top: "50%", width: "200px", position: "absolute", transform: "translate(-50%,-50%)" }}>
                    <h1 style={{ color: "#FBF9F8" }}>{msg}</h1>
                    <Loading size={200} />
                </div>
            </div>
        </>
    )
}

export default GithubAuth