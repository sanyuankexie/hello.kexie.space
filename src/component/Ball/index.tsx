import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import style from './index.module.css'
import welcomeStyle from '../../pages/Welcome/index.module.scss'
import UserCard from '../UserCard';
import config from '../../static/config';
import { useMemo } from 'react';
import { debounce } from '../../utils';
import { Logo } from '../../static/cos';

interface IProps {
    userName: string;
    avatar?: string;
    visitor?: boolean
}

function Ball({ userName, avatar, visitor }: IProps, ref: React.Ref<unknown> | undefined) {

    useImperativeHandle(ref, () => ({
        displayMsg
    }), [])

    const [cardContent, setCardContent] = useState<JSX.Element>();
    const [contentDisplay, setContentDisplay] = useState(false);
    const delaySetContentDisplay = useMemo<ReturnType<typeof debounce>>(() => debounce(setContentDisplay, 5000), [])

    function displayMsg(msg: string) {
        if (!!msg) {
            setContentDisplay(true)
            setCardContent(
                <div className={style.cardFont}>
                    {msg}
                </div>
            )
            delaySetContentDisplay(false)
        }
    }

    function handlerGithubLogin(e: React.MouseEvent) {
        window.open(`https://github.yuuza.net/login/oauth/authorize?client_id=${config.GitHub.ClientId}`)
    }

    function handlerDoubleClick(e: React.MouseEvent) {
        if (visitor === true || visitor === undefined) {
            // User not logged in
            setCardContent(
                <>
                    <Button onClick={e => handlerGithubLogin(e)} type="primary" size={'large'} icon={<GithubOutlined />} className={welcomeStyle.btn} >
                        我们非常推荐使用Github登陆
                    </Button>
                    <Button type="primary" size={'large'} icon={<WechatOutlined />} className={welcomeStyle.btn} >
                        因为我们的微信登陆还没写好!
                    </Button>
                </>
            )
        } else {
            setCardContent(
                <span style={{ color: "white" }}>
                    <UserCard name={userName} displayAvatar={false} />
                </span>
            )
        }
        setContentDisplay(!contentDisplay)
    }

    return (
        <div>
            <span onDoubleClick={e => handlerDoubleClick(e)}>
                <img className={style.logo} src={avatar ? avatar : Logo.Kexie} alt="" />
            </span>

            <span style={{ display: !contentDisplay ? "none" : "block" }}>
                <div className={style.CardContainer}>
                    <div className={style.triangle}></div>
                    <div className={style.card}>
                        {cardContent}
                    </div>
                </div>
            </span>
        </div>
    );
}



export default forwardRef(Ball);