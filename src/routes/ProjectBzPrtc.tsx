import screenV2 from "@/assets/previous_work/bzprtc/screenv2.jpg";
import gateView from "@/assets/previous_work/bzprtc/gate-view.jpg";
import screenV1 from "@/assets/previous_work/bzprtc/screenv1.jpg";
import IconSpringBoot from "~icons/logos/spring-icon";
import IconAngular from "~icons/logos/angular-icon";
import IconArrowDown from "~icons/mdi/arrow-down";
import { Flex, Image } from "antd";
import React, { useContext } from "react";
import { AppContext } from "@/AppContext";

import "./ProjectBzPrtc.css";
import classes from "@/App.module.css";
import { bgColors } from "@/theme";

const bgColor = bgColors.bzPrtc;

const ProjectBzPrtc: React.FC = () => {
  const appContext = useContext(AppContext);
  return (
    <Flex
      style={{
        borderRadius: "8px",
        backgroundColor:
          appContext?.theme === "dark" ? bgColor.dark : bgColor.light,
      }}
    >
      <Flex
        vertical
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          paddingTop: "4rem",
          paddingBottom: "8rem",
        }}
        className="prtc-project-container"
      >
        <div className="prtc-project-content-container">
          <Flex
            gap={"1rem"}
            vertical
            align="center"
            className="prtc-project-header-container"
            style={{ marginBottom: "4rem" }}
          >
            <Flex vertical align="center" gap={"0.25rem"} style={{ flex: "4" }}>
              <Image className="image" src={screenV2} alt="信息发布屏" />
              <span>
                <i>信息发布屏</i>
              </span>
            </Flex>
            <div className={classes["text-container"]} style={{ flex: "3" }}>
              <p className="large-text">
                <b>滨州市公共资源交易中心信息发布屏系统</b>
              </p>
              <p>
                本项目是滨州市公共资源交易中心专家通道安检及智能门禁系统的一部分。该系统通过人脸识别或者身份证件识别的方式确认当前人员身份，并根据项目系统数据库接口判断是否授权放行进入评标现场。
              </p>
              <p>
                信息发布屏对当日项目、已授权评委人员信息及出勤情况进行循环滚动显示，公开公示接受监督。
              </p>
            </div>
          </Flex>

          <Flex
            className="prtc-cards-container"
            justify="center"
            wrap
            gap={"1rem"}
            style={{ marginBottom: "2rem" }}
          >
            <Flex vertical align="center" gap={"0.25rem"}>
              <Image
                className="image"
                src={gateView}
                alt="人脸门禁闸机"
                height={240}
              />
              <i>身份识别门禁闸机</i>
            </Flex>
            <Flex vertical align="center" gap={"0.25rem"}>
              <Image
                className="image"
                src={screenV1}
                alt="版本更新过一次，此为第一版"
                height={240}
              />
              <i>版本更新过一次，此为第一版</i>
            </Flex>
          </Flex>

          <div className={classes["text-container"]}>
            <p className={classes["p-title"]}>项目介绍：</p>
            <p>
              我方为该项目的实施乙方。开发了信息发布屏公示系统并持续维护至今。委托海康威视公司完成对服务器配套平台的开发与部署，并采购海康部分配套硬件。
            </p>

            <p className={classes["p-title"]}>业务流程：</p>
            <Flex
              vertical
              align="center"
              gap={"1rem"}
              className="prtc-flow-container"
            >
              <div className="prtc-step-box">
                评委在道闸处刷脸或身份证后由“云签”系统识别并返回身份信息
              </div>
              <IconArrowDown className="prtc-step-arrow" />
              <div className="prtc-step-box">判断该评委当日的项目信息</div>
              <IconArrowDown className="prtc-step-arrow" />
              <div className="prtc-step-box">
                如授权信息正确则开门放行并将该评委及其项目信息上传至信息发布屏显示
              </div>
            </Flex>

            <p className={classes["p-title"]}>应用技术：</p>
            <span className="prtc-tech-stack">
              海康威视使用 Java
              <Flex gap={"0.25rem"}>
                <IconSpringBoot />
                Spring
              </Flex>
              框架开发服务器后端。我方使用
              <Flex gap={"0.25rem"}>
                <IconAngular />
                AngularJS
              </Flex>
              框架开发前端。
            </span>
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default ProjectBzPrtc;
