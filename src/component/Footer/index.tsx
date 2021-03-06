import React from 'react';
import { Typography, Popover } from 'antd';
import style from './index.module.scss';
import { QRCode } from '../../static/cos'

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.blank} />
            <div className={style.itemsContainer}>
                {data.map((self: Table) => {
                    return List(self)
                })}
            </div>
        </footer>
    );
}

function List(item: Table) {
    return (
        <div key={item.title}>
            <Typography.Title
                level={3}
                className={style.title}>
                {item.title}
            </Typography.Title>
            <ul className={style.items}>
                {item.list.map((self: Item) => {
                    if (self.content) {
                        return (<Popover
                            content={<img src={QRCode.WeChatOfficialAccount} alt="" />}
                            trigger="hover"
                            style={{ padding: "0 !important" }}
                            key={self.name}>
                            <span>
                                <Item
                                    name={self.name}
                                    url={self.url}
                                />
                            </span>
                        </Popover>);
                    } else {
                        return (<Item
                            key={self.name}
                            name={self.name}
                            url={self.url}
                            target="_blank"
                        />);
                    }
                })}
            </ul>
        </div>
    );
}

function Item({ name, url, target = "_self" }: Item) {
    return (
        <a
            target={target}
            key={name}
            href={url}
        >
            <li className={style.item}>{name}</li>
        </a>
    );
}

export default Footer;

const data: Array<Table> = [
    {
        title: '????????????',
        list: [
            {
                name: '?????????????????????????????????',
                url: 'https://ml.akasaki.space'
            },
            {
                name: 'CottonPaper',
                url: 'https://cp.therainisme.com',
            },
        ]
    },
    {
        title: '????????????',
        list: [
            {
                name: '??????QQ???',
                url: 'https://jq.qq.com/?_wv=1027&k=n7WP5LTH'
            }, {
                name: '???????????????',
                url: '#'
            }
        ]
    },
    {
        title: '????????????',
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
                name: '???????????????',
                url: '#',
                content: <img src={QRCode.WeChatOfficialAccount} alt="" />,
            },
            {
                name: "????????????bilibili??????",
                url: "https://space.bilibili.com/673693349",
            }
        ]
    },
    {
        title: '????????????',
        list: [
            {
                name: '??????????????????',
                url: 'https://??????????????????.cn/',
            },
            {
                name: '??????????????????',
                url: 'https://csd.guet.ltd/',
            }
        ]
    },
]
