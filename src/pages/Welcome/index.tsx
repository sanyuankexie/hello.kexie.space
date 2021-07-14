import React from 'react';
import { Button } from 'antd';
import { GithubOutlined, CodeFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { Typography } from 'antd';
import style from './css/index.module.scss';
import './css/dirty.scss';

import Section from "../../component/Section";
import CommentList from "./CommentList";
import ProjectList from "./ProjectList";
import LearningDirectionList from "./LearningDirectionList";
import Timeline from './Timeline';

import { Department, departmentShortNameMap } from '../../static/department';
import { Logo } from '../../static/cos';
import ContestList from './ContestList';
import Departments from './Departments';

const { Title } = Typography;

function Welcome() {
    return (
        <div>
            <section className={style.helloContainer}>
                <div className={`${style.star} ${style.star1}`}/>
                <div className={`${style.star} ${style.star2}`}/>
                <div className={`${style.star} ${style.star3}`}/>
                <div className={`${style.star} ${style.star4}`}/>
                <div className={`${style.star} ${style.star5}`}/>
                <div className={`${style.star} ${style.star6}`}/>
                <div className={`${style.star} ${style.star7}`}/>
                <div className={`${style.star} ${style.star8}`}/>

                <div className={style.blank} style={{ height: "20vh" }} />
                <img src={Logo.Kexie}
                    alt=""
                    width={200}
                    height={200}
                    style={{zIndex: 1}} />
                <Title className={style.title} level={1}>桂电三院科协</Title>

                <p className={style.description}>啦啦啦啦啦啊啦啦啊啦啦啦啦啦</p>

                <div className={style.btnGroup}>
                    <Button className={style.btn} type="primary" shape="round" icon={<GithubOutlined />}
                        size={"large"}>
                        加入我们
                    </Button>
                    <Button className={style.btn} type="primary" shape="round" icon={<CodeFilled />}
                        size={"large"}>
                        练习编程
                    </Button>
                </div>
            </section>

            <Section title="四大部门" description="科协有四大部门，不同的部门下有不同的学习方向">
                <div className={style.sectionContainer}>
                    <Departments/>
                </div>
            </Section>

            <Section title="学习方向">
                <div className={style.sectionContainer}>
                    <LearningDirectionList />
                </div>
            </Section>

            <Section title="招新时间线">
                <div className={style.sectionContainer}>
                    <Timeline />
                </div>
            </Section>

            <Section title="近年参赛获奖" description="很多，还在整理当中，下面展示是2020年国家级、省部级获奖的一部分......">
                <div className={style.sectionContainer}>
                    <ContestList />
                </div>
            </Section>

            <Section title="心灵之声">
                <div className={style.sectionContainer} style={{ marginBottom: "10vh" }}>
                    <div className={style.subSectionContainer}>
                        <CommentList />
                    </div>
                    <div className={style.subSectionContainer}>
                        <ProjectList />
                    </div>
                </div>
            </Section>


        </div>
    );
}

export default Welcome;