import React from 'react';
import { Component, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';

import style from "./index.module.scss";

import { Department } from '../../static/department';
import { Logo } from '../../static/cos';

const { Title } = Typography

interface LDirection {
    name: string
    key: string
    logo: string
    width: number
    style?: CSSProperties
}

class LearningDirectionList extends Component {
    render() {
        return data.map((self: LDirection) => {
            return (
                <div key={self.key} className={style.displayItem}>
                    <Title style={{ textAlign: "center" }} level={2}>{self.name}</Title>
                    <NavLink to={{ pathname: `introduction/${self.key}` }}>
                        <img src={self.logo} alt="" width={self.width} style={self.style || {}} className={style.imgScale} />
                    </NavLink>
                </div>
            )
        });
    }
}

export default LearningDirectionList;

const data: Array<LDirection> = [
    {
        name: "网站开发",
        key: "Web",
        logo: Logo.Web,
        width: 170,
    }, {
        name: "游戏制作",
        key: "Game",
        logo: Logo.Game,
        width: 270,
        style: { marginTop: "2em" }
    }, {
        name: "安卓开发",
        key: "Android",
        logo: Logo.Android,
        width: 150
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
        name: "机器学习",
        key: "MachineLearning",
        logo: Logo.MachineLearning,
        width: 150,
    }, {
        name: "小程序",
        key: "Applet",
        logo: Logo.Applet,
        width: 140,
    }, {
        name: "视频剪辑",
        key: "Video",
        logo: Logo.Video,
        width: 150,
    },
]