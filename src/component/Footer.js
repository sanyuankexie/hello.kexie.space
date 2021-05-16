import React, {Component} from 'react';
import footer from './Footer.module.css'

import {Typography} from 'antd';

const {Title} = Typography;

class Footer extends Component {
    render() {
        return (
            <footer className={footer.container}>
                <div className={footer.blank}/>
                <div className={footer.itemsContainer}>
                    {this.dataToTItems()}
                    {this.dataToTItems()}
                    {this.dataToTItems()}
                    {this.dataToTItems()}
                </div>
            </footer>
        );
    }

    dataToTItems() {
        return (
            <div>
                <Title level={3} className={footer.title}>标题</Title>
                <ul className={footer.items}>
                    <li className={footer.item}>链接1</li>
                    <li className={footer.item}>链接2</li>
                    <li className={footer.item}>链接3</li>
                </ul>
            </div>
        );
    }
}

export default Footer;