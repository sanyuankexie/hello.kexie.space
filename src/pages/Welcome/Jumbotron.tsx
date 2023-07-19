import React, { useEffect, useRef } from "react";
import { CodeFilled, QqCircleFilled } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Logo } from "../../static/cos";
import style from "./css/Jumbotron.module.scss";

function Jumbotron() {
  const vantaRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    // @ts-ignore
    const effect = VANTA.HALO({
      el: "#wdnmd",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      size: 1,
      yOffset: 0.19,
      backgroundColor: "#252630",
    });

    return () => {
      effect.destroy();
    };
  }, []);

  return (
    <section id="wdnmd" className={`${style.container} default-box-shadow`}>
      <div ref={vantaRef} className={style.background}></div>

      <div className={style.blank} style={{ height: "20vh" }} />
      <img
        src={Logo.Kexie}
        alt=""
        width={200}
        height={200}
        style={{ zIndex: 1, pointerEvents: "none", userSelect: "none" }}
      />
      <Typography.Title
        className={`${style.title} default-font-shadow`}
        level={1}
      >
        桂电三院科协
      </Typography.Title>

      <p className={`${style.description} default-font-shadow`}>
        科技融入梦想，创新点缀人生
      </p>

      <div className={style.btnGroup}>
        <Button
          className={style.btn}
          type="primary"
          shape="round"
          icon={<QqCircleFilled />}
          size={"large"}
          href="https://jq.qq.com/?_wv=1027&k=2WAcOviY"
          target="__blank"
        >
          加入我们
        </Button>

        <Button
          className={style.btn}
          type="primary"
          shape="round"
          icon={<CodeFilled />}
          size={"large"}
          href="https://oj.kexie.space"
          target="__blank"
        >
          练习编程
        </Button>
      </div>
    </section>
  );
}

export default Jumbotron;
