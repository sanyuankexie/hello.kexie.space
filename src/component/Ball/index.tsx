import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import style from './index.module.scss'
import welcomeStyle from '../../pages/Welcome/css/index.module.scss'
import UserCard from '../UserCard';
import config from '../../static/config';
import { useMemo, CSSProperties } from 'react';
import { debounce } from '../../utils';
import { Logo } from '../../static/cos';

interface IProps {
    userName: string;
    avatar?: string;
    visitor?: boolean;
    styles?: CSSProperties;
    onDoubleClick?: (e: React.MouseEvent) => void;
}

function Ball({ userName, avatar, visitor, styles, onDoubleClick }: IProps, ref: React.Ref<unknown> | undefined) {

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

    return (
        <div>
            <span onDoubleClick={e => onDoubleClick && onDoubleClick(e as any)}>
                <img className={style.logo} src={avatar ? avatar : Logo.Kexie} alt="" style={styles} />
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