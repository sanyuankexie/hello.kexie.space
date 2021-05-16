import React, {Component} from 'react';

import {Typography} from 'antd';
import section from './Section.module.css'

const {Title, Paragraph} = Typography;

class Section extends Component {
    render() {
        const {title, description} = this.props
        return (
            <section className={section.container}>
                <div className={section.blank}/>
                <Title level={1}>{title}</Title>
                <Paragraph className={section.title}>{description}</Paragraph>
                <div className={section.banner}/>
            </section>
        );
    }
}

export default Section;