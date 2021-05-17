import React, {Component} from 'react';
import {Button, Comment, List} from 'antd';
import {GithubOutlined, CodeFilled} from '@ant-design/icons';

import {Typography} from 'antd';
import welcome from './Welcome.module.css'

import Section from "../../component/Section/Section";
import Footer from "../../component/Footer/Footer";
import CommentList from "./CommentList/CommentList";
import ProjectList from "./ProjectList/ProjectList";
import ContestList from "./ContestList/ContestList";
import LearningDirectionList from "./LearningDirectionList/LearningDirectionList";

import logo from "../../assets/images/logo.png"
import MD from "../../assets/images/department/multimedia-department.png"
import SD from "../../assets/images/department/software-depertment.png"
import HD from "../../assets/images/department/hardware-department.png"
import OD from "../../assets/images/department/organization-department.png"

const {Title} = Typography;

class Welcome extends Component {
    render() {
        return (
            <div>
                <section className={welcome.container}>
                    <div className={welcome.blank} style={{height: "20vh"}}/>
                    <img src={logo}
                         alt=""
                         width={200}
                         height={200}/>
                    <Title className={welcome.title} level={1}>桂电三院科协</Title>

                    <p className={welcome.description}>啦啦啦啦啦啊啦啦啊啦啦啦啦啦</p>

                    <div className={welcome.btnGroup}>
                        <Button className={welcome.btn} type="primary" shape="round" icon={<GithubOutlined/>}
                                size={"large"}>
                            加入我们
                        </Button>
                        <Button className={welcome.btn} type="primary" shape="round" icon={<CodeFilled/>}
                                size={"large"}>
                            练习编程
                        </Button>
                    </div>
                </section>

                <Section title="四大部门" description="科协有四大部门，不同的部门下有不同的学习方向">
                    <div className={welcome.sectionContainer}>
                        <div className={welcome.department}>
                            <img src={MD} width={250} alt=""/>
                        </div>
                        <div className={welcome.department}>
                            <img src={SD} width={250} alt=""/>
                        </div>

                        <div className={welcome.department}>
                            <img src={HD} width={250} alt=""/>
                        </div>
                        <div className={welcome.department}>
                            <img src={OD} width={250} alt=""/>
                        </div>
                    </div>

                </Section>

                <Section title="学习方向">
                    <div className={welcome.sectionContainer}>
                        <LearningDirectionList/>
                    </div>
                </Section>

                <Section title="近年参赛获奖" description="很多，还在整理当中......">
                    <div className={welcome.sectionContainer}>
                        {/*<ContestList/>*/}
                    </div>
                </Section>

                <Section title="心灵之声">
                    <div className={welcome.sectionContainer} style={{marginBottom: "10vh"}}>
                        <div className={welcome.comment}>
                            <CommentList/>
                        </div>
                        <div className={welcome.comment}>
                            <ProjectList/>
                        </div>
                    </div>
                </Section>

                <Footer/>
            </div>
        );
    }
}

export default Welcome;