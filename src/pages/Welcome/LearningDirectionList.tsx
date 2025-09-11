import React from 'react';
import { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';

import style from "./css/index.module.scss";

import { Logo } from '../../static/cos';
import { usePageJumpSaveScrollTop, useScrollAnimationRefs } from '../../hooks';
import Section from '../../component/Section';

interface LDirection {
    name: string
    key: string
    logo: string
    width: number
    style?: CSSProperties
}

function LearningDirectionList() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollAnimationRefs();

    const saveScrollTop = usePageJumpSaveScrollTop()

    return (
        <Section
            title="学习方向"
            description="点击图标查看方向介绍"
        >
            <div className={style.sectionContainer}>
                {data.map((self: LDirection, index: number) => {
                    return (
                        <div key={self.key} className={`${style.displayItem}`} >
                            <Typography.Title style={{ textAlign: "center" }} level={2}>{self.name}</Typography.Title>
                            <NavLink
                                onClick={e => saveScrollTop()}
                                to={{ pathname: `introduction/${self.key}` }}
                                ref={addScrollAnimationRefs}>
                                <div className={`float-uad-item delay-${index}`}>
                                    <img
                                        src={self.logo}
                                        alt=""
                                        width={self.width}
                                        style={self.style || {}}
                                        className={`${style.imgScale}`} />
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </Section>
    );
}

export default LearningDirectionList;

const data: Array<LDirection> = [
    {
        name: "前端开发",
        key: "WebFront",
        logo: Logo.WebFront,
        width: 170,
    },
    {
        name: "后端开发",
        key: "WebServer",
        logo: Logo.WebServer,
        width: 170,
    },
    {
        name: "游戏制作",
        key: "Game",
        logo: Logo.Game,
        width: 270,
        style: { marginTop: "2em" }
    }, {
        name: "APP开发",
        key: "AppDev",
        logo: Logo.AppDev,
        width: 200
    }, {
        name: "UI设计",
        key: "UI",
        logo: Logo.UI,
        width: 200,
        style: { marginTop: "0.5em" }
    }, {
        name: "硬件开发",
        key: "Embedded",
        logo: Logo.Embedded,
        width: 140,
        style: { background: "#2e2459", marginTop: "0.6em" }
    }, {
        name: "深度学习",
        key: "DeepLearning",
        logo: Logo.DeepLearning,
        width: 150,
    }, {
        name: "视频剪辑",
        key: "Video",
        logo: Logo.Video,
        width: 150,
    },
    {
        name: "逆向工程",
        key: "Reverse",
        logo: Logo.ReverseProject,
        width: 150,
    },
    {
        name: "密码学",
        key: "Cryptology",
        logo: Logo.Cryptology,
        width: 150,
    },
    {
        name: "web安全",
        key: "WebSafe",
        logo: Logo.WebSafe,
        width: 150,
    },
    {
        name: "PWN",
        key: "pwn",
        logo: Logo.Pwn,
        width: 150,
    },
]