import React from "react";
import { Logo } from './../../static/cos';
import style from './css/index.module.scss';
import { Typography } from 'antd';
import { useScrollAnimationRefs } from "../../hooks";
import Section from "../../component/Section";

// 在这里开始使用bootstrap真是一大败笔
function Departments() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollAnimationRefs();

    return (
        <Section title="五大部门" description="科协有五大部门，不同的部门下有不同的学习方向">
            <section className={`projects-horizontal ${style.section}`}>
                <div className="row projects" >
                    {departmentIntroductionData.map(x => {
                        return (
                            <div
                                className="col-md-12 col-lg-12 col-xl-5 item"
                                key={x.name}
                                ref={addScrollAnimationRefs}
                            >
                                <div className="row">
                                    <div className="col-md-12 col-lg-12" style={{ textAlign: "center" }}>
                                        <img className="img-fluid" src={x.logo} width={250} />
                                    </div>
                                    <div className="col col-xl-10 col-md-8" style={{ margin: "auto" }}>
                                        <Typography.Title level={3}>{x.name}</Typography.Title>
                                        {x.descriptions}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Section>
    )
}

export default Departments;

const departmentIntroductionData = [
    {
        name: "多媒体部",
        logo: Logo.Multimedia,
        descriptions: (
            <>
                <p>
                    科协多媒体部主要方向的网站开发、UI设计、视频剪辑和小程序开发均依托多媒体技术，以极强的浸透力进入学校日常生活的方方面面。
                </p>
                <p>
                    四个方向相互联系紧密，网站与小程序需要界面优美的UI设计，界面优美的UI设计需要网站或小程序去实现，它们也可以通过视频剪辑技术以易展现的形式与周围人分享。
                </p>
            </>
        )
    },
    {
        name: "软件部",
        logo: Logo.Software,
        descriptions: (
            <>
                <p>软件部是科协专攻软件开发的部门其主要方向包括深度学习、APP开发和游戏开发。</p>
                <p>软件部注重培养成员在遵循软件工程开发体系的要求，去设计并开发一款或多款具备创新、实用等特点的软件的实践能力，旨在让成员能够承接校内信息化项目的同时，也能够参加校外高水平的竞赛。</p>
            </>
        )
    },
    {
        name: "硬件部",
        logo: Logo.Hardware,
        descriptions: (
            <>
                <p>硬件部致力于将传统的嵌入式软硬件设计与互联网资源结合，充分体现“互联网+”精神，真正将我们在计算机专业中学习到的知识应用与生活，设计制作真正服务与生活的嵌入式智能硬件；引导同学们进行科技研发，从而提高同学们的创新意识，加强同学们的动手能力以及理论与实际相结合的能力，培养创新型人才。</p>
            </>
        )
    },
    {
        name: "组织部",
        logo: Logo.Organization,
        descriptions: (
            <>
                <p>组织部是一个协调科协主席团和其他三大技术部门的综合性管理兼学术部门，主管组织、人事工作、素质拓展和团队建设。负责协调科协的组织建设，管理科协的日常事务，策划和组织科协的各类活动，管理科协成员和内部的各种设施，同时，协调和处理学校、学院领导的指示要求，代表三院科协与学校、学院的各个社团进行沟通交流。</p>
            </>
        )
    },
    {
        name: "安全部",
        logo: Logo.Safe,
        descriptions: (
            <>
                <p>安全部聚焦网络安全技术，以 CTF 竞赛为实践入口，将竞赛里的解题思路、攻防技巧，转化为真实场景中漏洞挖掘的能力。从代码逻辑排查到程序底层分析，覆盖覆盖 WEB（代码审计、漏洞攻防 ）与二进制（漏洞利用、逆向分析 ）方向，通过 “以赛促战”，让成员掌握从发现风险到实战防御的全流程技能，筑牢安全防线。</p>
            </>
        )
    },
] as const;