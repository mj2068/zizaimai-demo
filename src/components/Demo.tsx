import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Divider, Flex, Space } from "antd";
import ProjectItem from "./ProjectItem";
import { projectBgColors } from "@/theme";
import IconPlayArrowRounded from "~icons/material-symbols/play-arrow-rounded";
import IconSet from "./IconSet";

export default function Demo() {
  if (import.meta.env.DEV) console.log("Demo()");

  useEffect(() => {
    if (import.meta.env.DEV) console.log("Demo effect");
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <h2>项目示例</h2> */}
      {import.meta.env.DEV && <Link to="weekly-effect">weekly</Link>}

      <Flex vertical gap="6rem">
        <ProjectItem
          bgColors={projectBgColors.bzPrtc}
          imageFiles="previous_work/bzprtc/screenv2.jpg"
        >
          <h3>滨州市公共资源交易中心信息发布屏系统</h3>
          <i className="small-text">集成项目</i>

          <p>
            信息发布屏系统对资源交易中心当日项目、已授权评委人员信息及签到情况进行实时刷新循环滚动显示，起到公开公示的作用。
          </p>
          <div className="button-container">
            <Link
              className="button"
              to="/bzprtc"
              style={{ backgroundColor: "#1182e9" }}
            >
              <span>项目说明</span>
            </Link>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles={[
            "previous_work/ph-home-1.jpg",
            "previous_work/ph-detail-2.jpg",
            "previous_work/ph-classify-2.jpg",
          ]}
          bgColors={projectBgColors.plantHelper}
          isImageFirst={true}
        >
          <h3>植物小助手</h3>
          <i className="small-text">移动端App</i>
          <IconSet
            className="tech-stack"
            icons={["vue", "ionic", "capacitor"]}
          />
          <p>
            使用基于Vue的Ionic和Capacitor框架生态（类似uniapp流程）开发的移动端App。
          </p>
          <p>
            产品核心设计尝试通过物联网软硬件帮助用户管理盆栽植物。硬件部分使用传感器组插入土壤中获取数据，软件部分通过蓝牙和硬件沟通，并实现界面和用户的交互。
          </p>
          <div className="button-container">
            <Link
              className="button"
              to="/plant-helper"
              style={{ backgroundColor: "#d25d0f" }}
            >
              <span>开发说明</span>
            </Link>
          </div>
        </ProjectItem>

        <ProjectItem
          bgColors={projectBgColors.rental}
          imageFiles="dvdrental/home.jpg"
        >
          <h3>租赁管理系统</h3>

          <Space
            className="small-text"
            split={
              <Divider type="vertical" style={{ backgroundColor: "grey" }} />
            }
          >
            <i>适配PC浏览器</i>
            <i>英文UI</i>
          </Space>
          <IconSet className="tech-stack" icons={["vue", "antdVue"]} />
          <p>
            物品租赁管理系统，实现对多种数据主体的清单列表和详情查询等功能。
          </p>
          <p className="gray-text small-text">
            * 示例页面使用音像制品模拟数据库
          </p>

          <div className="button-container">
            <Link
              className="button"
              to="/rental"
              style={{ backgroundColor: projectBgColors.rental.accent }}
            >
              <span>开发说明</span>
            </Link>
            <a
              className="button with-icon external-link"
              href="/demo/dvdrental"
              target="_blank"
              style={{ backgroundColor: projectBgColors.rental.accent }}
            >
              <IconPlayArrowRounded className="icon" />
              示例页面
            </a>
          </div>
        </ProjectItem>
      </Flex>

      <h2 className="section-title">3D应用</h2>

      <Flex vertical gap="6rem" className="section-container">
        <ProjectItem
          imageFiles="app_render.jpg"
          bgColors={projectBgColors.fittingRoom}
        >
          <h3>3D换装试衣间</h3>
          <i className="small-text">设计适配PC浏览器</i>
          <IconSet
            className="tech-stack"
            icons={["react", "threejs", "antd", "blender"]}
          />
          <p>
            本示例实现了DOM元素和WebGL
            3D场景之间的无缝交互，可以根据用户的不同选择实时将相应的3D模型搭配展示出来，在视觉上直观的帮助用户更好的选择相应的物品。
          </p>
          <div className="button-container">
            <a
              className="button with-icon"
              href="/demo/fitting-room"
              style={{ backgroundColor: "#8360c3", verticalAlign: "top" }}
            >
              <IconPlayArrowRounded className="icon" />
              示例 + 开发说明
            </a>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles="myster-door_banner_confetti.png"
          isImageFirst={true}
          bgColors={projectBgColors.mysteryDoor}
        >
          <h3>奇异门动画入口页面</h3>
          <i className="small-text">设计适配移动竖屏最佳体验</i>
          <IconSet
            className="tech-stack"
            icons={["react", "threejs", "blender"]}
          />
          <p>为移动端开发的竖屏卡通风交互动画欢迎页面。</p>
          <div className="button-container">
            <a
              className="button with-icon"
              href="/demo/mystery-door"
              style={{ backgroundColor: "#c53f26" }}
            >
              <IconPlayArrowRounded className="icon" />
              示例
            </a>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles="room-scene_render.png"
          bgColors={projectBgColors.roomScene}
        >
          <h3>日式室内场景</h3>
          <i className="small-text">设计适配PC浏览器</i>
          <IconSet
            className="tech-stack"
            icons={["react", "threejs", "blender"]}
          />
          <p>
            本示例旨在对设备渲染性能进行简易测试。查看WebGL在展现复杂完整、多边形较多以及后处理效果较多的场景时的表现。
          </p>
          <p>
            比如，本例实现的功能包含：物体模型动态位置及角度；相机的运动及DOF景深焦点追踪；实时柔和阴影；方向性和聚光投射两种灯光；泛光Bloom后处理等效果。
          </p>
          <div className="button-container">
            <a
              className="button with-icon"
              href="/demo/room-scene"
              style={{ backgroundColor: "#526638" }}
            >
              <IconPlayArrowRounded className="icon" />
              示例 + 开发说明
            </a>
          </div>
        </ProjectItem>
      </Flex>
    </>
  );
}
