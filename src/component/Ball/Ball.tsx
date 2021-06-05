import React, { useEffect, useState, useRef, RefObject } from 'react';
import { Button, Input } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router'
import css from './index.module.css'
import welcomeCss from '../../pages/Welcome/Welcome.module.css'
import logo from '../../assets/images/logo.png'
import Float from '../Float/Float';
import UserCard from '../UserCard/UserCard';
import config from '../../static/config';

interface IProps {
    userName: string
    showMsg?: (msg: string) => void
}

function Ball({ userName, showMsg }: IProps) {
    const [cardDisplay, setCardDisplay] = useState(false);
    const [user, setUser] = useState<{ name: string, avatar: string, token: string }>();
    const [socket, setSocket] = useState<WebSocket>();
    const [cardContent, setCardContent] = useState<JSX.Element>();

    const inputRef = useRef<Input>(null)

    useEffect(() => {
        //todo get user by token
        const userString = localStorage.getItem('user')!
        const user = JSON.parse(userString)
        const socket = new WebSocket("ws://10.33.39.225:4000/connect")
        setTimeout(() => {
            // socket.send(`{"action":"rename","userName":"${user.name}"}`)
        }, 2000)
        socket.onmessage = msg => handleMsgStream(msg.data)
        setSocket(socket)
        setUser(user)
        return () => {
            socket.close()
        }
    }, []);

    useEffect(() => {
        if (!!cardContent) {
            setCardDisplay(true)
            setTimeout(() => {
                setCardDisplay(false)
            }, 2000)
        }
    }, [cardContent]);

    function handleMsgStream(msg: string) {
        if (!!msg) {
            // socket!.send(`{"action":"talk","message":"${msg}","userName":"${user!.name}"}`)
            setCardDisplay(true)
            setCardContent(
                <div className={css.cardFont}>
                    {msg}
                </div>
            )
        }
    }

    function handlerGithubLogin(e: React.MouseEvent) {
        //todo github oauth
        // window.open(`https://github.yuuza.net/login/oauth/authorize?client_id=${config.GitHub.ClientId}`)
    }

    function handlerDoubleClick(e: React.MouseEvent) {
        if (!user) {
            // User not logged in
            // const Login = (
            //     <>
            //         <Button onClick={e => handlerGithubLogin(e)} type="primary" size={'large'} icon={<GithubOutlined />} className={welcomeCss.btn} >
            //             我们非常推荐使用Github登陆
            //         </Button>
            //         <Button type="primary" size={'large'} icon={<WechatOutlined />} className={welcomeCss.btn} >
            //             因为我们的微信登陆还没写好!
            //         </Button>
            //     </>
            // )
            // setCardContent(Login)
        } else {
            const info = (
                <>
                    <span style={{ color: "white" }}>
                        <UserCard login="therainisme" displayAvatar={false} />
                    </span>
                </>
            )
            setCardContent(info)
        }
    }
    return (
        <div>
            <span onDoubleClick={e => handlerDoubleClick(e)}>
                <img className={css.logo} src={user === undefined ? logo : user.avatar} alt="" />
            </span>

            <span style={{ display: !cardDisplay ? "none" : "block" }}>
                <div className={css.CardContainer}>
                    <div className={css.triangle}></div>
                    <div className={css.card}>
                        {cardContent}
                    </div>
                </div>
            </span>


            <div className={css.inputContainer}>
                <Input placeholder="想说的话都可以说呀啦啦啦啦啊啊啊" className={css.inputMsg} ref={inputRef} />
                <Button type="primary" onClick={e => handleMsgStream(inputRef.current!.state.value)} className={css.btn}>发送</Button>
            </div>
        </div>
    );
}

export default Ball;