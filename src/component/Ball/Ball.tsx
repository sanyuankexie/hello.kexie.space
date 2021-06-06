import React, { useEffect, useState, useRef, RefObject, useImperativeHandle, forwardRef } from 'react';
import { Button, Input } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router'
import css from './index.module.css'
import welcomeCss from '../../pages/Welcome/Welcome.module.css'
import logo from '../../assets/images/logo.png'
import Float from '../Float/Float';
import UserCard from '../UserCard/UserCard';
import config from '../../static/config';
import axios from 'axios';
import { useMemo } from 'react';
import { delay } from '../../utils';

interface IProps {
    userName: string;
    avatar: string;
}

function Ball({ userName, avatar }: IProps, ref: React.Ref<unknown> | undefined) {
    const [cardDisplay, setCardDisplay] = useState(false);
    const [cardContent, setCardContent] = useState<JSX.Element>();
    const [user, setUser] = useState<{ userName: string, avatar: string }>();
    const delaySetCardDisplay = useMemo<ReturnType<typeof delay>>(() => delay(setCardDisplay, 2000), [])

    useImperativeHandle(ref, () => ({
        handleMsgStream
    }), [])

    useEffect(() => {
        setUser({ userName, avatar })
    }, []);

    useEffect(() => {
        if (!!cardContent) {
            setCardDisplay(true)
            delaySetCardDisplay(false)
        }
    }, [cardContent]);

    function handleMsgStream(msg: string) {
        if (!!msg) {
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
            const Login = (
                <>
                    <Button onClick={e => handlerGithubLogin(e)} type="primary" size={'large'} icon={<GithubOutlined />} className={welcomeCss.btn} >
                        我们非常推荐使用Github登陆
                    </Button>
                    <Button type="primary" size={'large'} icon={<WechatOutlined />} className={welcomeCss.btn} >
                        因为我们的微信登陆还没写好!
                    </Button>
                </>
            )
            setCardContent(Login)
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
        </div>
    );
}



export default forwardRef(Ball);