import React, { useEffect } from "react"
import { match } from "react-router-dom"
import { History } from 'history'
import axios from 'axios';

interface Props {
    match: match;
    location: Location;
    history: History
}

function GithubAuth({ location, history }: Props) {

    useEffect(() => {
        const githubAuth = async () => {
            const code = location.search.split('=')[1]
            try {
                const res = await axios.post(`http://localhost:4000/github-auth/${code}`)
                const user = {
                    userName: res.data.name,
                    avatar: res.data.avatar,
                    token: res.data.token,
                    visitor: false
                }
                localStorage.setItem('user', JSON.stringify(user))
            } catch (error) {
                console.error('github auth error', error)
            } finally {
                history.push('/')
                window.location.reload()
            }
        }
        githubAuth()
    }, []);

    return (
        <></>
    )
}

export default GithubAuth