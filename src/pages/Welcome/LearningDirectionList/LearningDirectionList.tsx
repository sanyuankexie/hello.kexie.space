import React, {Component, CSSProperties} from 'react';
import {Typography} from 'antd';

import welcome from "../Welcome.module.css";

import react from "../../../assets/images/learning-direction/react.png";
import unity from "../../../assets/images/learning-direction/unity.png";
import android from "../../../assets/images/learning-direction/android.png"
import python from "../../../assets/images/learning-direction/python.png"
import wechat from "../../../assets/images/learning-direction/wechat.png"
import embedded from "../../../assets/images/learning-direction/embedded.svg"
import bilibili from "../../../assets/images/learning-direction/bilibili.png"
import ui from "../../../assets/images/learning-direction/ui.png"

const {Title} = Typography

interface LDirection {
    name: string
    logo: string
    width: number
    style?: CSSProperties
}

class LearningDirectionList extends Component {
    render() {
        return data.map((self: LDirection) => {
            return (
                <div className={welcome.displayItem}>
                    <Title style={{textAlign: "center"}} level={2}>{self.name}</Title>
                    <img src={self.logo} alt="" width={self.width} style={self.style || {}}/>
                </div>
            )
        });
    }
}

export default LearningDirectionList;

const data: Array<LDirection> = [
    {
        name: "网站开发",
        logo: react,
        width: 170,
    }, {
        name: "游戏制作",
        logo: unity,
        width: 270,
        style: {marginTop: "2em"}
    }, {
        name: "安卓开发",
        logo: android,
        width: 150
    }, {
        name: "UI设计",
        logo: ui,
        width: 200,
        style: {marginTop: "0.5em"}
    }, {
        name: "硬件开发",
        logo: embedded,
        width: 140,
        style: {background: "#2e2459", marginTop: "0.6em"}
    }, {
        name: "机器学习",
        logo: python,
        width: 150,
    }, {
        name: "小程序",
        logo: wechat,
        width: 140,
    }, {
        name: "视频剪辑",
        logo: bilibili,
        width: 150,
    },
]