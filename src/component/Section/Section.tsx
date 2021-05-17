import React, {Component} from 'react';

import {Typography} from 'antd';
import section from './Section.module.css'

const {Title} = Typography;

export interface Props {
    title: string;
    description?: string;
}

class Section extends Component<Props, object> {
    render() {
        const {title, description} = this.props
        return (
            <section className={section.container}>
                <div className={section.blank}/>
                <Title level={1}>{title}</Title>
                <p className={section.description}>{description}</p>
                <div className={section.banner}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;