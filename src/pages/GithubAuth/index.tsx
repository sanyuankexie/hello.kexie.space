import React, { useEffect, useState } from "react"
import { match } from "react-router-dom"
import { History } from 'history'
import axios from 'axios';
import { Button, Result, Card } from 'antd';
import { ResultStatusType } from "antd/lib/result";
import welcomeStyle from '../Welcome/css/index.module.scss'
import style from './index.module.scss';


interface Props {
    match: match;
    location: Location;
    history: History
}

function GithubAuth({ location, history }: Props) {
    const [process, setProcess] = useState({
        title: "正在请求授权",
        status: "info",
        subTitle: "请保持网络畅通，不要关闭此页面"
    });

    useEffect(() => {
        const githubAuth = async () => {
            const code = location.search.split('=')[1]
            try {
                const res = await axios.post(`https://kexie.therainisme.com:5203/github-auth/${code}`)
                const user = {
                    name: res.data.name,
                    avatar: res.data.avatar,
                    token: res.data.token,
                    visitor: false
                }
                localStorage.setItem('user', JSON.stringify(user))
                setProcess({
                    title: "授权成功，登陆态已保存",
                    status: "success",
                    subTitle: "5S之后将自动返回主页。"
                })
                setTimeout(() => {
                    history.push('/')
                    window.location.reload()
                }, 5000)
            } catch (error) {
                console.error('github auth error', error)
                setProcess({
                    title: "请求授权失败",
                    status: "error",
                    subTitle: "请确认网络是否通畅，相比于流量，校园网稳定性较差，麻烦切换移动网络后重试。"
                })
            } finally {
            }
        }
        githubAuth()
    }, []);

    return (
        <>
            <div className={style.container}>
                <Card className={style.card}>
                    <Result
                        status={process.status as ResultStatusType}
                        title={
                            <h2>{process.title}
                            </h2>
                        }
                        subTitle={<p>{process.subTitle}</p>}
                        extra={[
                            <Button
                                type="primary"
                                key="contact"
                                className={welcomeStyle.btnFilled}
                                loading={process.status === "info" ? true : false}>
                                联系管理员
                            </Button>,
                            <Button
                                key="return"
                                className={welcomeStyle.btnDefault}
                                loading={process.status === "info" ? true : false}>
                                返回主页
                            </Button>,
                        ]}
                    />
                </Card>
            </div>
        </>
    )
}

export default GithubAuth