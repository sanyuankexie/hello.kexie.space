import React, {Component} from 'react';
import {Button} from 'antd';
import {GithubOutlined, CodeFilled} from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import {Typography} from 'antd';
import css from './Welcome.module.css'

import Section from "../../component/Section/Section";
import CommentList from "./CommentList/CommentList";
import ProjectList from "./ProjectList/ProjectList";
import LearningDirectionList from "./LearningDirectionList/LearningDirectionList";

import logo from "../../assets/images/logo.png"
import MD from "../../assets/images/department/multimedia-department.png"
import SD from "../../assets/images/department/software-depertment.png"
import HD from "../../assets/images/department/hardware-department.png"
import OD from "../../assets/images/department/organization-department.png"
import { Department } from '../../static/resource';

const {Title} = Typography;

class Welcome extends Component {
    render() {
        return (
            <div>
                <section className={css.container}>
                    <div className={css.blank} style={{height: "20vh"}}/>
                    <img src={logo}
                         alt=""
                         width={200}
                         height={200}/>
                    <Title className={css.title} level={1}>桂电三院科协</Title>

                    <p className={css.description}>啦啦啦啦啦啊啦啦啊啦啦啦啦啦</p>

                    <div className={css.btnGroup}>
                        <Button className={css.btn} type="primary" shape="round" icon={<GithubOutlined/>}
                                size={"large"}>
                            加入我们
                        </Button>
                        <Button className={css.btn} type="primary" shape="round" icon={<CodeFilled/>}
                                size={"large"}>
                            练习编程
                        </Button>
                    </div>
                </section>

                <Section title="四大部门" description="科协有四大部门，不同的部门下有不同的学习方向">
                    <div className={css.sectionContainer}>
                        <div className={css.department}>
                            <NavLink to={{pathname: `/introduction/${Department.MD.FullName}`, state: {icon: Department.MD.Logo}}}>
                                <img src={MD} className={css.imgScale} width={250} alt=""/>
                            </NavLink>
                        </div>
                        <div className={css.department}>
                            <img src={SD} width={250} alt=""/>
                        </div>

                        <div className={css.department}>
                            <img src={HD} width={250} alt=""/>
                        </div>
                        <div className={css.department}>
                            <img src={OD} width={250} alt=""/>
                        </div>
                    </div>

                </Section>

                <Section title="学习方向">
                    <div className={css.sectionContainer}>
                        <LearningDirectionList/>
                    </div>
                </Section>

                <Section title="近年参赛获奖" description="很多，还在整理当中......">
                    <div className={css.sectionContainer}>
                    </div>
                </Section>

                <Section title="心灵之声">
                    <div className={css.sectionContainer} style={{marginBottom: "10vh"}}>
                        <div className={css.comment}>
                            <CommentList/>
                        </div>
                        <div className={css.comment}>
                            <ProjectList/>
                        </div>
                    </div>
                </Section>


            </div>
        );
    }
}

export default Welcome;