import React from 'react';
import { Typography, Popover } from 'antd';
import css from './Footer.module.css';
import { QRCode } from '../../static/cos'

const { Title } = Typography;

function Footer() {
    return (
        <footer className={css.container}>
            <div className={css.blank} />
            <div className={css.itemsContainer}>
                {data.map((self: ITable) => {
                    return dataToItems(self)
                })}
            </div>
        </footer>
    );
}

function dataToItems(item: ITable) {
    return (
        <div key={item.title}>
            <Title level={3} className={css.title}>{item.title}</Title>
            <ul className={css.items}>
                {
                    item.list.map((self: IItem) => {
                        switch (self.name) {
                            case "微信公众号":
                                return (
                                    <Popover content={<img src={QRCode.WeChatOfficialAccount} alt="" />} trigger="hover" style={{ padding: "0 !important" }} key={self.name}>
                                        <a key={self.name} target="_blank" href={self.url} style={{ color: "white" }} rel="noreferrer">
                                            <li className={css.item}>{self.name}</li>
                                        </a>
                                    </Popover>
                                )
                            default:
                                return (
                                    <a key={self.name} target="_blank" href={self.url} style={{ color: "white" }} rel="noreferrer">
                                        <li className={css.item}>{self.name}</li>
                                    </a>
                                )
                        }
                    })
                }
            </ul>
        </div>
    );
}

interface ITable {
    title: string
    list: Array<IItem>
}

interface IItem {
    name: string
    url: string
}

export default Footer;

const data: Array<ITable> = [
    {
        title: '学习文档',
        list: [
            {
                name: 'CottonPaper',
                url: 'https://cp.therainisme.com',
            }, {
                name: '工具箱的深度學習記事簿',
                url: 'https://ml.akasaki.space'
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
                name: 'GitHub',
                url: 'https://github.com/sanyuankexie',
            },
            {
                name: 'OnlineJudge',
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
