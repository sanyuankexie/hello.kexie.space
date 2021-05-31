import React from 'react';
import { Typography } from 'antd';
import section from './Section.module.css'

const { Title } = Typography;

export interface IProps {
    title: string;
    description?: string;
    children: JSX.Element | string
}

function Section({ title, description, children }: IProps) {
    return (
        <section className={section.container}>
            <div className={section.blank} />
            <Title level={1}>{title}</Title>
            <p className={section.description}>{description}</p>
            <div className={section.banner}>
                {children}
            </div>
        </section>
    );
}

export default Section;