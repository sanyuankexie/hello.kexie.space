import React, {Component} from 'react';
import {Typography} from 'antd';
import welcome from "../Welcome.module.css";
import fuchuang from "../../../assets/images/contest/fuchuang.png";

const {Title} = Typography

interface Contest {
    name: string
    logo: string
    students: Array<Award>
}

interface Award {
    content: string
}

class ContestList extends Component {
    render() {
        return data.map((self: Contest) => {
            return (
                <div className={welcome.displayItem}>
                    <Title style={{textAlign: "center"}} level={4}>{self.name}</Title>
                    <img src={self.logo} alt="" width={88}/>
                    <ul>
                        {self.students.map((item: Award) => {
                            return <li dangerouslySetInnerHTML={{__html: item.content}}/>
                        })}
                    </ul>
                </div>
            )
        });
    }
}

export default ContestList;

const data: Array<Contest> = [
    {
        name: "中国软件杯大学生软件设计大赛",
        logo: fuchuang,
        students: [
            {
                content: "林楷浩——国家级一等奖",
            }, {
                content: "陈澳格——国家级一等奖",
            }, {
                content: "汪小龙——国家级一等奖",
            }, {
                content: "谢俊霖——国家级二等奖",
            }, {
                content: "蒋璐璇——国家级二等奖",
            }, {
                content: `卢&nbsp;&nbsp;&nbsp;&nbsp;畅——国家级二等奖`,
            }, {
                content: "穆项博阁—国家级二等奖",
            },
        ]
    },
    {
        name: "中国高校计算机大赛人工智能创意赛",
        logo: fuchuang,
        students: [
            {
                content: "盖军雄——国家级一等奖",
            }, {
                content: "宫照庭——国家级一等奖",
            }, {
                content: "卢&nbsp;&nbsp;&nbsp;&nbsp;畅——国家级一等奖",
            }, {
                content: "谢俊霖——国家级二等奖",
            }, {
                content: "蒋璐璇——国家级二等奖",
            },
        ]
    },
    {
        name: "蓝桥杯大赛",
        logo: fuchuang,
        students: [
            {
                content: "林楷浩——国家级一等奖",
            }, {
                content: "陈澳格——国家级一等奖",
            }, {
                content: "陈澳格——国家级一等奖",
            },
        ]
    },
    {
        name: "大学生服务外包创新创业大赛",
        logo: fuchuang,
        students: [
            {
                content: "林楷浩——国家级一等奖",
            }, {
                content: "陈澳格——国家级一等奖",
            }, {
                content: "陈澳格——国家级一等奖",
            },
        ]
    },
]

