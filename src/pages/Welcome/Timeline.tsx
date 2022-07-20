import { Steps, Divider } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import React from "react";
import style from './css/index.module.scss'
import MarkdownParser from "../../utils/markdown";
import { useScrollAnimationRefs } from "../../hooks";
import Section from "../../component/Section";

const { Step } = Steps

function Timeline() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollAnimationRefs();

    return (
        <Section title="招新时间线">
            <div className={style.sectionContainer}>
                <Divider />
                <div className={style.subSectionContainer} ref={addScrollAnimationRefs}>
                    <Steps direction="vertical" current={0}>
                        <Step title="报名阶段" description="报名时间截止到笔试前" icon={<LoadingOutlined />} />
                        <Step title="入门学习" description="学会使用Online Judge实现问题求解"  />
                        <Step title="科技交流会" description="集结三院各大科技类社团的科技活动" />
                        <Step title="笔试 & 面试" description="期待脱颖而出的你！" />
                        <Step title="绘蓝杯科技竞赛" description="绽放你们的光芒！" />
                    </Steps>
                </div>
                <Divider className={style.mobile} />
                <div className={style.subSectionContainer} ref={addScrollAnimationRefs}>
                    <p
                        style={{ textIndent: "2em" }}
                        dangerouslySetInnerHTML={{ __html: MarkdownParser.render(content) }}>
                    </p>
                </div>
            </div>
        </Section>
    );
}

const content = `
三院科协是依托于计算机与信息安全学院，面向全校的校级技术社团。我们的活动包括技术学习，承办和策划各类科技赛事和颁奖仪式，组织创新创业训练等。科协设有软件部、硬件部、多媒体部、组织部共四个部门，致力于对成员技术能力及创新能力的培养。

在科协，你不仅能提高自身的技术，结交志同道合的伙伴，还能收获前辈的悉心指导，共享优质的资源服务。

科协的大门将为你们敞开，我们期待你们的到来，欢迎与我们一起畅游在技术的海洋！
`

export default Timeline;