import { Layout, Menu } from 'antd';
import css from './MHeader.module.css'

const { Header } = Layout;

function MHeader() {
    return (
        <div>
            <Header className={css.header}>
                <div className="logo" />
                <Menu className={css.menu} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item className={css.item} key="1">首页</Menu.Item>
                    <Menu.Item className={css.item} key="2">报名</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
}

export default MHeader;