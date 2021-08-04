import React from 'react';
import { Layout, Menu } from 'antd';
import style from './index.module.scss'

const { Header } = Layout;

function MHeader() {
    return (
        <div>
            <Header className={style.header}>
                <div className="logo" />
                <Menu className={style.menu} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item className={style.item} key="1">首页</Menu.Item>
                    <Menu.Item className={style.item} key="2">报名</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
}

export default MHeader;