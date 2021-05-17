import React, {Component} from 'react';
import footer from './Footer.module.css'

import {Typography} from 'antd';

const {Title} = Typography;

interface Table {
    title: string
    list: Array<Item>
}

interface Item {
    name: string
    url: string
}

class Footer extends Component {

    render() {
        return (
            <footer className={footer.container}>
                <div className={footer.blank}/>
                <div className={footer.itemsContainer}>
                    {data.map((self: Table) => {
                        return this.dataToItems(self)
                    })}
                </div>
            </footer>
        );
    }

    dataToItems(item: Table) {
        return (
            <div>
                <Title level={3} className={footer.title}>{item.title}</Title>
                <ul className={footer.items}>
                    {item.list.map((self: Item) => {
                        return (
                            <a target="_blank" href={self.url} style={{color: "white"}}>
                                <li className={footer.item}>{self.name}</li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Footer;

const data: Array<Table> = [
    {
        title: '学习文档',
        list: [
            {
                name: '工具箱的深度學習記事簿',
                url: 'https://ml.akasaki.space',
            }, {
                name: 'CottonPaper',
                url: 'https://cp.therainisme.com'
            }
        ]
    },
    {
        title: '与我相聚',
        list: [
            {
                name: '微信公众号',
                url: 'https://github.com/sanyuankexie',
            }, {
                name: '招新QQ群',
                url: 'https://github.com/sanyuankexie'
            }, {
                name: '招新报名表',
                url: 'https://github.com/sanyuankexie'
            }
        ]
    },
    {
        title: '科协相关',
        list: [
            {
                name: 'OnlineJudge',
                url: 'https://github.com/sanyuankexie',
            },
            {
                name: 'GitHub',
                url: 'https://github.com/sanyuankexie',
            }
        ]
    },
    {
        title: '友情链接',
        list: [
            {
                name: '七院创新基地',
                url: 'https://七院创新基地.cn/',
            }
        ]
    },
]