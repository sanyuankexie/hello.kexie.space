import React, { CSSProperties } from 'react';
import { Typography } from 'antd';
import section from './index.module.scss'

const { Title } = Typography;

export interface IProps {
    title: string;
    description?: string;
    children: JSX.Element | string;
    bannerStyle?: CSSProperties;
    bannerClassName?: string
}

function Section({ title, description, children, bannerStyle, bannerClassName }: IProps) {
    return (
        <section className={section.container}>
            <div className={section.blank} />
            <Title level={1}>{title}</Title>
            <p className={section.description}>{description}</p>
            <div className={`${section.banner} ${bannerClassName}`} style={bannerStyle}>
                {children}
            </div>
        </section>
    );
}

export default Section;