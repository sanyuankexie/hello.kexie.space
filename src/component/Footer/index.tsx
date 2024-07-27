import React from "react";
import { Typography, Popover } from "antd";
import style from "./index.module.scss";
import { QRCode } from "../../static/cos";

function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.blank} />
      <div className={style.itemsContainer}>
        {data.map((self: Table) => {
          return List(self);
        })}
      </div>
    </footer>
  );
}

function List(item: Table) {
  return (
    <div key={item.title}>
      <Typography.Title level={3} className={style.title}>
        {item.title}
      </Typography.Title>
      <ul className={style.items}>
        {item.list.map((self: Item) => {
          if (self.content) {
            return (
              <Popover
                content={<img src={QRCode.WeChatOfficialAccount} alt="" />}
                trigger="hover"
                style={{ padding: "0 !important" }}
                key={self.name}
              >
                <span>
                  <Item name={self.name} url={self.url} />
                </span>
              </Popover>
            );
          } else {
            return (
              <Item
                key={self.name}
                name={self.name}
                url={self.url}
                target="_blank"
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

function Item({ name, url, target = "_self" }: Item) {
  return (
    <a target={target} key={name} href={url}>
      <li className={style.item}>{name}</li>
    </a>
  );
}

export default Footer;

const data: Array<Table> = [
  {
    title: "学习文档",
    list: [
      {
        name: "工具箱的深度學習記事簿",
        url: "https://ml.akasaki.space",
      },
      {
        name: "CottonPaper",
        url: "https://cp.therainisme.com",
      },
    ],
  },
  {
    title: "与我相聚",
    list: [
      {
        name: "招新QQ群",
        url: "https://api.kexie.space/recruitment-qq-group",
        // url: 'https://jq.qq.com/?_wv=1027&k=n7WP5LTH'
      },
      {
        name: "招新报名表",
        url: "https://docs.qq.com/form/page/DSllqZXlzemlhb3pW",
      },
    ],
  },
  {
    title: "科协相关",
    list: [
      {
        name: "科协GitHub",
        url: "https://github.com/sanyuankexie",
      },
      {
        name: "科协OJ",
        url: "https://oj.kexie.space",
      },
      {
        name: "科协GIT",
        url: "https://git.kexie.space",
      },
      {
        name: "科协Dockerhub",
        url: "https://docker.kexie.space",
      },
      {
        name: "科协微信公众号",
        url: "#",
        content: <img src={QRCode.WeChatOfficialAccount} alt="" />,
      },
      {
        name: "科协官方bilibili账号",
        url: "https://space.bilibili.com/673693349",
      },
    ],
  },
  {
    title: "友情链接",
    list: [
      {
        name: "七院创新基地",
        url: "https://七院创新基地.cn/",
      },
      {
        name: "校基地软件部",
        url: "https://csd.moe/",
      },
      {
        name: "信安小组靶场",
        url: "http://121.40.203.219:8000/",
      },
    ],
  },
];
