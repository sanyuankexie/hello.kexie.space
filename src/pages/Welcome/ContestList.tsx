import React from 'react';
import { Table, Tag } from 'antd';
import style from "./index.module.scss";

function ContestList() {
    return (
        <div className={style.contestList}>
            <Table
                className={"contest-container"}
                style={{ width: "100%", border: "1px solid #efefef" }}
                columns={columns as any}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
}

export default ContestList;

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        responsive: ['lg'],
        key: 'name',
        className: style.nameCol,
        render: (names: string[]) => (
            <>
                {names.map((name: string) => {
                    return (
                        <Tag color={"geekblue"} key={name}>
                            {name}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '比赛',
        dataIndex: 'contest',
        className: style.contestCol,
        key: 'contest',
    },
    {
        title: '奖项级别',
        key: 'tags',
        dataIndex: 'tags',
        className: style.tagsCol,
        render: (tags: string[]) => (
            <>
                {tags.map((tag: string) => {
                    let color = "geekblue";
                    switch (tag.substr(tag.length - 2, 2)) {
                        case "国一":
                            color = "purple"
                            break;
                        case "国二":
                            color = "magenta"
                            break;
                        case "国三":
                            color = "cyan"
                            break;
                        case "省一":
                            color = "volcano"
                            break;
                        case "省二":
                            color = "orange"
                            break;
                        case "省三":
                            color = "blue"
                            break;
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    }
];

const data = [
    {
        key: '1',
        name: ['林楷浩', '陈澳格', '汪小龙', '谢俊霖', '蒋璐璇', '卢畅', '穆项博阁'],
        contest: '“中国软件杯”大学生软件设计大赛',
        tags: ['[3人] 国一', '[4人] 国二'],
    },
    {
        key: '2',
        name: ['陈澳格', '林楷浩'],
        contest: '中国高校计算机大赛—网络技术挑战赛',
        tags: ['[2人] 国一'],
    },
    {
        key: '3',
        name: ['韦俊宇', '赵雅彬', '黄丕松', '曹振源', '汪小龙', '谢文韬', '谢俊霖', '卢林军', '宋淳'],
        contest: '蓝桥杯全国软件和信息技术专业人才大赛',
        tags: ['[1人] 国二', '[2人] 国三', '[2人] 国优', '[3人] 省一', '[4人] 省二'],
    },
    {
        key: '4',
        name: ['牙大金', '黄雪军'],
        contest: '全国大学生智能互联创新应用设计大赛',
        tags: ['[2人] 国二'],
    },
    {
        key: '5',
        name: ['谢俊霖', '蒋璐璇', '盖军雄', '卢畅', '宫照庭'],
        contest: '中国高校计算机大赛—人工智能创意赛',
        tags: ['[5人] 国二'],
    },
    {
        key: '6',
        name: ['卢林军', '卢畅'],
        contest: '全国大学生数学建模竞赛',
        tags: ['[2人] 国二'],
    },
    {
        key: '7',
        name: ['盖军雄', '宫照庭', '卢畅'],
        contest: '全国大学生智能互联创新大赛',
        tags: ['[3人] 国二'],
    },
    {
        key: '8',
        name: ['刘柏良', '邓张稼', '谢俊霖', '盖军雄', '汪小龙', '林楷浩', '陈澳格'],
        contest: '全国大学生物联网设计竞赛',
        tags: ['[3人] 国二', '[4人] 省一'],
    },
    {
        key: '9',
        name: ['王禧玉', '邓张稼', '谢俊霖', '蒋璐璇', '盖军雄', '叶琳'],
        contest: 'iCAN国际创新创业大赛',
        tags: ['[2人] 国三', '[2人] 省二', '[2人] 省三'],
    },
    {
        key: '10',
        name: ['刘柏良', '牙大金', '黄雪军'],
        contest: '全国大学生嵌入式芯片与系统设计竞赛',
        tags: ['[2人] 国三', '[1人] 省三'],
    },
    {
        key: '11',
        name: ['牙大金', '冯逸洲', '陈忠麒', '赵芝因', '韦森强'],
        contest: '全国大学生电子设计竞赛',
        tags: ['[2人] 省一', '[3人] 省三'],
    },
    {
        key: '12',
        name: ['余业昌', '张思龙', '韦俊宇', '邓家祺', '陈垍谋', '蒋璐璇', '谢俊霖'],
        contest: '广西人工智能设计大赛',
        tags: ['[2人] 省二', '[5人] 省三'],
    },
    {
        key: '13',
        name: ['陈荣锋', '王禧玉', '熊天民', '韦俊宇', '奚锐'],
        contest: '中国高校计算机大赛移动应用创新赛',
        tags: ['[2人] 省二', '[3人] 省三'],
    },
];