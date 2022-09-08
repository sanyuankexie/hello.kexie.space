import { url } from "inspector";
import { Container } from "postcss";
import React,{useRef} from "react";
import { Interface } from "readline";
import Section from "../../component/Section";
import { useScrollHandler } from "../../hooks";
import style from "./css/Essay.module.scss";
import essay1 from "./img/essay-1.png";
import essay2 from "./img/essay-2.png";
import essay3 from "./img/essay-3.png";
import patent1 from "./img/patent-1.png";
import patent2 from "./img/patent-2.png";
import patent3 from "./img/patent-3.png";
import soft1 from "./img/soft-1.jpg";
import soft2 from "./img/soft-2.jpg";
import soft3 from "./img/soft-3.png";
import soft4 from "./img/soft-4.jpg";
import soft5 from "./img/soft-5.jpg";

interface Achievement{
  type:string,
  name: string,
  imgUrl: string,
  className?:string | null,
  authors:string[],
}
function Essay() {
  const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();
  const [showData, setShowData] = React.useState(data[0]);
  const [index, setIndex] = React.useState(0);
  // 设置定时器自动播放轮播图
  React.useEffect(() => {
    const time = setInterval(() => {
      changeVisual(index);
      setIndex(i => {
        return i===data.length-1?0:i+1
      });
      console.log(index);
    }, 1500);
    return ()=>clearInterval(time);
  },[index])
  // 改变轮播图
  function changeVisual(e: number) {
    data.filter((item,i) => {
      return item.className=i===e?style.imgTabCurrent:null
    })
    setShowData(data[e]);
    setIndex(e);
    } 
    return (
        <Section 
            title="论文、软著、专利"
            description="2021年论文、软著、专利成果展示"
            bannerStyle={{ width: "80%", height: "80vh" }}>
        <div className={style.essayContainer}>
          <div className={style.header}>
          <div className={style.side}>
            <div className={style.tab} >
              {
                data.map((item,index) => {
                  return <div className={`${style.imgTab} ${item.className}`} onClick={()=>changeVisual(index)}><img src={item.imgUrl} key={item.imgUrl} /></div>
                })
              }
            </div>
            {/* <div className={style.title}>
            {showData.type}
            </div> */}
          </div>
          <div className={style.visual}>
              <img src={showData.imgUrl}  />
          </div>
          </div>
          <div className={style.inner}>
          <div className={style.title}>
            {showData.name}
            </div>
            <ul>
              {
                showData.authors.map(item => {
                  return <li><h4>{item}</h4></li>
                })
              }
            </ul>
          </div>
        </div>
        </Section>
    );
}

export default Essay;
const data: Array<Achievement> = [
  {
    type:"论文",
    name: "Classification of fine-grained species of marine organisms based on multi-scale fusion",
    imgUrl: essay1,
    authors:[ "Guanping Liang"," Junyan Chen", "Junlin Xie", "Zhangjja Deng", "Yiwen Cui",]
  },
  {
    type:"论文",
    name: "A Pointer Instrument Reading Approach Based On Mask R-CNN Key Points Detection",
    imgUrl: essay2,
    authors:["Xiaolong Wang", "Junyan Chen" , "Huyong Wang"]
  },
  {
    type:"论文",
    name: "STDC-MA network for semantic segmentation",
    imgUrl: essay3,
    authors:["卢林军","宫照庭","卢畅","谢浚霖"]
  },
  {
    type:"专利",
    name: "水下智能探测装置",
    imgUrl: patent1,
    authors:["谢浚霖","邓张稼","蒋璐璇"]
  },
  {
    type:"专利",
    name: "一种基于深度学习检测直线的指针仪表读数方法",
    imgUrl: patent2,
    authors:["汪小龙"]
  },
  {
    type:"专利",
    name: "一种基于关键点检测的仪表读数方法",
    imgUrl: patent3,
    authors:["汪小龙"]
  },
  // {
  //   type:"软著",
  //   name: "基于多尺度融合的海洋生物分类系统",
  //   imgUrl: soft1,
  //   authors:["谢浚霖"]
  // },
  // {
  //   type:"软著",
  //   name: "基于智”出行”安全驾驶系统",
  //   imgUrl: soft2,
  //   authors:["谢浚霖"]
  // },
  {
    type:"软著",
    name: "低照度图像处理平台",
    imgUrl: soft3,
    authors:["申诺","谢浚霖","周博睿","刘璇"]
  },
  // {
  //   type:"软著",
  //   name: "“物联网+养老”智慧看护APP",
  //   imgUrl: soft4,
  //   authors:["宁旺权","曹振源","李珊珊","庞金源","覃桂秀"]
  // },
  {
    type:"软著",
    name: "高校学生行为大数据分析平台",
    imgUrl: soft5,
    authors:["韦俊宇","卢林军"]
  },

]