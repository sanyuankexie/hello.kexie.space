import React, {Component} from 'react';
import {Button} from 'antd';
import {GithubOutlined, CodeFilled} from '@ant-design/icons';

import {Typography} from 'antd';
import welcome from './Welcome.module.css'

import Section from "../component/Section";
import Footer from "../component/Footer";
import CSvg from "../assets/images/c.png";
import fuchuang from "../assets/images/contest/fuchuang.png";



const {Title, Paragraph} = Typography;

class Welcome extends Component {
    render() {
        return (
            <div>
                <section className={welcome.container}>
                    <div className={welcome.blank}/>
                    <img src="http://therainisme.com:1225/kexie/logo_black.png"
                         alt=""
                         width={150}
                         height={150}/>
                    <Title className={welcome.title} level={1}>桂电三院科协</Title>

                    <Paragraph className={welcome.description}>啦啦啦啦啦啊啦啦啊啦啦啦啦啦</Paragraph>

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

                <Section title="啊邦措德弗尔代" description="有时我会孤独无助，就像山坡上滚落的石子。啦啦啦啦啦啦">

                    {/*<div>*/}
                    {/*    <img src={CSvg} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <img src={CSvg} alt=""/>*/}
                    {/*</div>*/}

                </Section>
                <Section title="获得奖项">
                    <div className={welcome.contestContainer}>
                        {this.test()}
                        {this.test()}
                        {this.test()}
                        {this.test()}
                    </div>
                </Section>
                <Footer/>
            </div>
        );
    }

    test() {
        return (
            <div className={welcome.contest}>
                <Title style={{textAlign: "center"}} level={4}>中国大学生服务<br/>外包创新创业大赛</Title>
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