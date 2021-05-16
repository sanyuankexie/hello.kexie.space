import React, {Component} from 'react';
import {Button, Comment, List} from 'antd';
import {GithubOutlined, CodeFilled} from '@ant-design/icons';

import {Typography} from 'antd';
import welcome from './Welcome.module.css'

import Section from "../component/Section/Section";
import Footer from "../component/Footer/Footer";
import CommentList from "../component/CommentList/CommentList";
import ProjectList from "../component/ProjectList/ProjectList";

import fuchuang from "../assets/images/contest/fuchuang.png";
import logo from "../assets/images/logo.png"
import MD from "../assets/images/department/multimedia-department.png"
import SD from "../assets/images/department/software-depertment.png"
import HD from "../assets/images/department/hardware-department.png"
import OD from "../assets/images/department/organization-department.png"

const {Title} = Typography;

class Welcome extends Component {
    render() {
        return (
            <div>
                <section className={welcome.container}>
                    <div className={welcome.blank}/>
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
                    <div className={welcome.departmentContainer}>
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

                <Section title="近年参赛获奖">
                    <div className={welcome.contestContainer}>
                        {this.parseContest()}
                        {this.parseContest()}
                        {this.parseContest()}
                        {this.parseContest()}
                    </div>
                </Section>

                <Section title="我们希望倾听你的声音">
                    <div className={welcome.contestContainer}>
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

    parseContest() {
        return (
            <div className={welcome.contest}>
                <Title style={{textAlign: "center"}} level={4}>大学生服务外包创新创业大赛</Title>
                <img src={fuchuang} alt="" width={88}/>
                <ul>
                    <li>卢畅——全国二等奖</li>
                    <li>卢畅——全国二等奖</li>
                    <li>卢畅——全国二等奖</li>
                </ul>
            </div>
        )
    }
}

export default Welcome;