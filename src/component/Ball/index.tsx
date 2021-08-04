import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import style from './index.module.scss'
import welcomeStyle from '../../pages/Welcome/css/index.module.scss'
import config from '../../static/config';
import { useMemo, CSSProperties } from 'react';
import { debounce } from '../../utils';
import { Logo } from '../../static/cos';

interface Props {
    userName: string;
    avatar?: string;
    visitor?: boolean;
    styles?: CSSProperties;
    onDoubleClick?: (e: React.MouseEvent) => void;
}

function Ball({ userName, avatar, visitor, styles, onDoubleClick }: Props, ref: React.Ref<unknown> | undefined) {

    useImperativeHandle(ref, () => ({
        displayMsg
    }), [])

    const [content, setContent] = useState<string | null>(null);
    const delaySetContent = useMemo(() => debounce(setContent, 5000), [])

    function displayMsg(msg: string) {
        if (!!msg) {
            setContent(msg)
            delaySetContent(null);
        }
    }

    return (
        <div>
            <span onDoubleClick={e => onDoubleClick && onDoubleClick(e as any)}>
                <img className={style.logo} src={avatar ? avatar : Logo.Kexie} alt="" style={styles} />
            </span>

            <span style={{ display: content ? "block" : "none" }}>
                <div className={style.container}>
                    <div className={style.triangle}></div>
                    <div className={style.content}>
                        <div className={style.font}>
                            {content}
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
}



export default forwardRef(Ball);