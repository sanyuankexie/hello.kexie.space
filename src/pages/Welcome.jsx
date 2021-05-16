import React, {Component} from 'react';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

import {Typography} from 'antd';
import welcome from './Welcome.module.css'

import Section from "../component/Section";
import Footer from "../component/Footer";


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
                    <Title className={welcome.title} level={1}>GCTA</Title>

                    <Paragraph className={welcome.description}>啦啦啦啦啦啊啦啦啊啦啦啦啦啦</Paragraph>

                    <div className={welcome.btnGroup}>
                        <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={"large"}>
                            Sub Wechat
                        </Button>
                        <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={"large"}>
                            OnlineJudge
                        </Button>
                    </div>
                </section>

                <Section title="啊邦措德弗尔代" description="有时我会孤独无助，就像山坡上滚落的石子。啦啦啦啦啦啦"/>
                <Section title="啊邦措德弗尔代" description="有时我会孤独无助，就像山坡上滚落的石子。啦啦啦啦啦啦"/>

                <Footer/>
            </div>
        );
    }
}

export default Welcome;