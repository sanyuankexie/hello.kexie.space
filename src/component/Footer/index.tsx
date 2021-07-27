import React from 'react';
import { Typography, Popover } from 'antd';
import style from './index.module.scss';
import { QRCode } from '../../static/cos'

const { Title } = Typography;

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.blank} />
            <div className={style.itemsContainer}>
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
            <Title level={3} className={style.title}>{item.title}</Title>
            <ul className={style.items}>
                {
                    item.list.map((self: IItem) => {
                        switch (self.name) {
                            case "微信公众号":
                                return (
                                    <Popover content={<img src={QRCode.WeChatOfficialAccount} alt="" />} trigger="hover" style={{ padding: "0 !important" }} key={self.name}>
                                        <a key={self.name} href={self.url} style={{ color: "white" }} rel="noreferrer">
                                            <li className={style.item}>{self.name}</li>
                                        </a>
                                    </Popover>
                                )
                            default:
                                return (
                                    <a key={self.name} target="_blank" href={self.url} style={{ color: "white" }} rel="noreferrer">
                                        <li className={style.item}>{self.name}</li>
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
                name: '工具箱的深度學習記事簿',
                url: 'https://ml.akasaki.space'
            },
            {
                name: 'CottonPaper',
                url: 'https://cp.therainisme.com',
            },
        ]
    },
    {
        title: '与我相聚',
        list: [
            {
                name: '招新QQ群',
                url: 'https://jq.qq.com/?_wv=1027&k=n7WP5LTH'
            }, {
                name: '招新报名表',
                url: '#'
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
                url: 'https://oj.kexie.space',
            },
            {
                name: '微信公众号',
                url: '#',
            },
            {
                name: "科协官方bilibili账号",
                url: "https://space.bilibili.com/673693349",
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
