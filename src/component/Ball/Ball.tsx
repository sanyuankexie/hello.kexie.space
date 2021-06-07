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
import { debounce } from '../../utils';

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
                <div className={css.cardFont}>
                    {msg}
                </div>
            )
            delaySetContentDisplay(false)
        }
    }

    function handlerGithubLogin(e: React.MouseEvent) {
        //todo github oauth
        // window.open(`https://github.yuuza.net/login/oauth/authorize?client_id=${config.GitHub.ClientId}`)
    }

    function handlerDoubleClick(e: React.MouseEvent) {
        if (visitor === true || visitor === undefined) {
            // User not logged in
            setCardContent(
                <>
                    <Button onClick={e => handlerGithubLogin(e)} type="primary" size={'large'} icon={<GithubOutlined />} className={welcomeCss.btn} >
                        我们非常推荐使用Github登陆
                    </Button>
                    <Button type="primary" size={'large'} icon={<WechatOutlined />} className={welcomeCss.btn} >
                        因为我们的微信登陆还没写好!
                    </Button>
                </>
            )
        } else {
            setCardContent(
                <span style={{ color: "white" }}>
                    <UserCard login={userName} displayAvatar={false} />
                </span>
            )
        }
        setContentDisplay(!contentDisplay)
    }

    return (
        <div>
            <span onDoubleClick={e => handlerDoubleClick(e)}>
                <img className={css.logo} src={avatar ? avatar : logo} alt="" />
            </span>

            <span style={{ display: !contentDisplay ? "none" : "block" }}>
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