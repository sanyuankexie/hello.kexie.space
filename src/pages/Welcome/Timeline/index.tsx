import { Steps } from "antd";
import React from "react";
import welcomeStyle from '../Welcome.module.css'

const { Step } = Steps

function Timeline() {
    return (
        <>
            <div className={welcomeStyle.subSectionContainer}>
                <Steps direction="vertical" current={1}>
                    <Step title="报名阶段" description="This is a description." />
                    <Step title="科技交流会" description="This is a description." />
                    <Step title="笔试" description="This is a description." />
                    <Step title="面试" description="This is a description." />
                    <Step title="绘蓝杯科技竞赛" description="This is a description." />
                </Steps>
            </div>
            <div className={welcomeStyle.subSectionContainer}>
                <h1>科技交流会</h1>
                <p style={{ textIndent: "2em" }}>
                    科协大合照通知：
                    匆匆一年，转眼又到了科协一年一度的大合照时刻，为给只属于更'卷'科协人的2021年留下镜头记录，决定拍摄合照。
                    拍摄时间：5月20日（周四今天）12：30-13：30；
                    拍摄地点：科技广场升旗台（下雨：图书馆侧门）；
                    人员：17、18、19、20级科协全体成员；
                    准备：12：30之前在5108，5109集合，人员到齐后再去拍摄场地；
                </p>
                <p style={{ textIndent: "2em" }}>
                    庆幸在最好的时光里，有最美的你们
                    用镜头记录象牙塔中最后的欢声笑语
                    让光与影将科协的美好永远留存
                    愿金色年华里，留下在科协最美的定格。
                </p>
            </div>
        </>
    );
}

export default Timeline;