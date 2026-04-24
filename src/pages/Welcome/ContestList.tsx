import React, { useEffect, useRef } from "react";
import { Table, Tag } from "antd";
import style from "./css/ContestList.module.scss";
import { useScrollAnimationRefs } from "../../hooks";
import Section from "../../component/Section";

function ContestList() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] =
    useScrollAnimationRefs();

  const tableRef = useRef(null!);
  useEffect(() => {
    const table = tableRef.current as HTMLDivElement;
    const itemList = table.getElementsByClassName(
      "ant-table-row ant-table-row-level-0",
    ) as unknown as HTMLElement[];
    if (itemList.length > 0) {
      Array.of(...itemList).forEach((x) => {
        const elementRef = React.createRef() as any;
        elementRef.current = x;
        ScrollAnimationRefs.push(elementRef);
      });
    }
  }, []);

  return (
    <Section
      title="近年参赛获奖"
      description="很多，还在整理当中，下面展示是2024、2025年国家级、省部级获奖的一部分......"
    >
      <div className={style.sectionContainer}>
        <div className={`${style.contestList}`} ref={tableRef}>
          <Table
            className={"contest-container"}
            style={{ width: "100%", border: "1px solid #efefef" }}
            columns={columns as any}
            dataSource={data}
            pagination={false}
          />
        </div>
      </div>
    </Section>
  );
}

export default ContestList;

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    responsive: ["lg"],
    key: "name",
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
    title: "比赛",
    dataIndex: "contest",
    className: style.contestCol,
    key: "contest",
  },
  {
    title: "奖项级别",
    key: "tags",
    dataIndex: "tags",
    className: style.tagsCol,
    render: (tags: string[]) => (
      <>
        {tags.map((tag: string) => {
          let color = "geekblue";
          switch (tag.substr(tag.length - 2, 2)) {
            case "国一":
              color = "purple";
              break;
            case "国二":
              color = "magenta";
              break;
            case "国三":
              color = "cyan";
              break;
            case "省一":
              color = "volcano";
              break;
            case "省二":
              color = "orange";
              break;
            case "省三":
              color = "blue";
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
  },
];

const data = [
  {
    key: "1",
    name: [
      "唐沈逸",
      "罗煜华",
      "王宇诚",
      "孙鸣韬",
      "孙培正",
      "谭佳卉",
      "张琥",
      "尹晓洋",
      "程政柳",
    ],
    contest: "中国大学生服务外包创新创业大赛",
    tags: ["[1人] 国二", "[2人] 国三", "[6人] 省三"],
  },
  {
    key: "2",
    name: ["郑承睿", "王振豪", "程政柳", "孙培正", "刘凯", "赵家乐"],
    contest: "蓝桥杯全国软件和信息技术专业人才大赛",
    tags: ["[1人] 国一", "[3人] 国二", "[2人] 国三"],
  },
  {
    key: "3",
    name: ["谭佳卉", "唐沈逸", "邓文强", "王振豪"],
    contest: "全国大学生数学建模竞赛",
    tags: ["[1人] 国一", "[1人] 国二", "[3人] 国三"],
  },
  {
    key: "4",
    name: ["唐沈逸", "张洛", "谭佳卉", "李英苹"],
    contest: "网络技术挑战赛",
    tags: ["[2人] 国三", "[2人] 省三"],
  },
  {
    key: "5",
    name: ["赵辉", "孙培正", "陆昊"],
    contest: "全国大学生电子设计竞赛",
    tags: ["[2人] 国二", "[1人] 国三"],
  },
  {
    key: "6",
    name: ["张琥", "罗煜华", "任嘉轩"],
    contest: "全国高校计算机能力挑战赛",
    tags: ["[3人] 国三"],
  },
  {
    key: "7",
    name: ["谭佳卉"],
    contest: "美国大学生数学建模竞赛",
    tags: ["[1人] 国一"],
  },
  {
    key: "8",
    name: ["尹晓洋", "唐沈逸"],
    contest: "中国国际大学生创新大赛",
    tags: ["[1人] 国一", "[1人] 国三"],
  },
  {
    key: "9",
    name: ["谭佳卉"],
    contest: "五一数学建模竞赛",
    tags: ["[1人] 国二"],
  },
  {
    key: "10",
    name: ["甘华龙"],
    contest: "全国密码技术竞赛",
    tags: ["[1人] 国二"],
  },
  {
    key: "11",
    name: ["唐沈逸", "程政柳", "邓文强"],
    contest: "iCAN大学生创新创业大赛",
    tags: ["[1人] 省一", "[1人] 省二", "[1人] 省三"],
  },
  {
    key: "12",
    name: ["张琥"],
    contest: "中国软件杯大学生软件设计大赛",
    tags: ["[1人] 国三"],
  },
  {
    key: "13",
    name: ["郭嘉宝"],
    contest: "ISCC",
    tags: ["[1人] 国三"],
  },
  {
    key: "14",
    name: ["谭佳卉"],
    contest: "MathorCup数学应用挑战赛",
    tags: ["[1人] 国三"],
  },
];
