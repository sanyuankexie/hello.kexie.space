import React from 'react';
import { Component, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';

import welcome from "../Welcome.module.css";

import { Department } from '../../../static/department';
import COSBaseUrl, { Logo } from './../../../static/cos';

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
                <div key={self.key} className={welcome.displayItem}>
                    <Title style={{ textAlign: "center" }} level={2}>{self.name}</Title>
                    <NavLink to={{ pathname: `introduction/${Department.getByLearningDirection(self.name).fullName}#${self.key}` }}>
                        <img src={self.logo} alt="" width={self.width} style={self.style || {}} className={welcome.imgScale} />
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
        key: "web",
        logo: Logo.Web,
        width: 170,
    }, {
        name: "游戏制作",
        key: "game",
        logo: Logo.Game,
        width: 270,
        style: { marginTop: "2em" }
    }, {
        name: "安卓开发",
        key: "android",
        logo: Logo.Android,
        width: 150
    }, {
        name: "UI设计",
        key: "ui",
        logo: Logo.UI,
        width: 200,
        style: { marginTop: "0.5em" }
    }, {
        name: "硬件开发",
        key: "hardware",
        logo: Logo.Embedded,
        width: 140,
        style: { background: "#2e2459", marginTop: "0.6em" }
    }, {
        name: "机器学习",
        key: "machine-learning",
        logo: Logo.MachineLearning,
        width: 150,
    }, {
        name: "小程序",
        key: "applet",
        logo: Logo.Applet,
        width: 140,
    }, {
        name: "视频剪辑",
        key: "video",
        logo: Logo.Video,
        width: 150,
    },
]