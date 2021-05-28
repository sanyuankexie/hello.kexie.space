import React, { Component, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';

import welcome from "../Welcome.module.css";

import react from "../../../assets/images/learning-direction/react.png";
import unity from "../../../assets/images/learning-direction/unity.png";
import android from "../../../assets/images/learning-direction/android.png"
import python from "../../../assets/images/learning-direction/python.png"
import wechat from "../../../assets/images/learning-direction/wechat.png"
import embedded from "../../../assets/images/learning-direction/embedded.svg"
import bilibili from "../../../assets/images/learning-direction/bilibili.png"
import ui from "../../../assets/images/learning-direction/ui.png"

import { Department } from '../../../static/department';

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
        logo: react,
        width: 170,
    }, {
        name: "游戏制作",
        key: "game",
        logo: unity,
        width: 270,
        style: { marginTop: "2em" }
    }, {
        name: "安卓开发",
        key: "android",
        logo: android,
        width: 150
    }, {
        name: "UI设计",
        key: "ui",
        logo: ui,
        width: 200,
        style: { marginTop: "0.5em" }
    }, {
        name: "硬件开发",
        key: "hardware",
        logo: embedded,
        width: 140,
        style: { background: "#2e2459", marginTop: "0.6em" }
    }, {
        name: "机器学习",
        key: "machine-learning",
        logo: python,
        width: 150,
    }, {
        name: "小程序",
        key: "applet",
        logo: wechat,
        width: 140,
    }, {
        name: "视频剪辑",
        key: "video",
        logo: bilibili,
        width: 150,
    },
]