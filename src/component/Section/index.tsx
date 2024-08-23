import React, {CSSProperties} from "react";
import {Typography} from "antd";
import section from "./index.module.scss";

const {Title} = Typography;

export interface IProps {
    title: string;
    description?: string;
    url_title?: string;
    url?: string;
    children: JSX.Element | string;
    bannerStyle?: CSSProperties;
    bannerClassName?: string;
    openInNewTab?: boolean; // New prop
}

function Section({
                     title,
                     description,
                     url,
                     url_title,
                     children,
                     bannerStyle,
                     bannerClassName,
                     openInNewTab = false, // Default value is false
                 }: IProps) {
    return (
        <section className={section.container}>
            <div className={section.blank}/>
            <Title level={1}>{title}</Title>
            <p className={section.description}>
                {description}{" "}
                <a
                    className={section.url}
                    href={url}
                    target={openInNewTab ? "_blank" : "_self"} // Conditionally set target
                    rel={openInNewTab ? "noopener noreferrer" : undefined} // Security measure for new tabs
                >
                    {url_title}
                </a>
            </p>

            <div
                className={`${section.banner} ${bannerClassName}`}
                style={bannerStyle}
            >
                {children}
            </div>
        </section>
    );
}

export default Section;
