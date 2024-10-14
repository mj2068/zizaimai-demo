import { Flex } from "antd";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext, useEffect } from "react";
import { Tooltip } from "antd";

import IconVue from "~icons/logos/vue";
import IconReact from "~icons/logos/react";
import IconIonic from "~icons/logos/ionic-icon";
import IconCapacitor from "~icons/logos/capacitorjs-icon";
import IconThreejs from "~icons/logos/threejs";
import IconAntd from "~icons/logos/ant-design";
import IconBlender from "~icons/logos/blender";
import { bgColors } from "@/theme";

const iconMap = {
  vue: IconVue,
  react: IconReact,
  ionic: IconIonic,
  capacitor: IconCapacitor,
  threejs: IconThreejs,
  antd: IconAntd,
  blender: IconBlender,
};

export default function Demo() {
  import.meta.env.DEV && console.log("Demo()");

  const appContext = useContext(AppContext);

  useEffect(() => {
    import.meta.env.DEV && console.log("Demo effect");
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <h2>项目示例</h2>

      <Flex vertical gap="2rem">
        <ProjectItem
          bgColors={bgColors.bzPrtc}
          imageFiles="previous_work/bzprtc/screenv2.jpg"
        >
          <h3>滨州市公共资源交易中心信息发布屏系统</h3>
          <i className="small-text">集成项目</i>

          <p>
            信息发布系统对资源交易中心当日项目、已授权评委人员信息及签到情况进行实时刷新，循环滚动显示。
          </p>
          <div className="button-container">
            <Link
              className="button"
              to="/bzprtc"
              style={{ backgroundColor: "#1182e9", padding: "0.5rem 1rem" }}
            >
              开发说明
            </Link>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles={[
            "previous_work/ph-home-1.jpg",
            "previous_work/ph-detail-2.jpg",
            "previous_work/ph-classify-2.jpg",
          ]}
          bgColors={bgColors.plantHelper}
          isImageFirst={true}
        >
          <h3>植物小助手</h3>
          <i className="small-text">移动端App</i>
          <div className="tech-stack">
            {["vue", "ionic", "capacitor"].map((tech) => {
              const Icon = iconMap[tech as keyof typeof iconMap];
              return Icon ? (
                <Tooltip
                  key={tech}
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <Icon style={{ width: 32, height: 32 }} data-icon={tech} />
                </Tooltip>
              ) : null;
            })}
          </div>
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
              style={{ backgroundColor: "#d25d0f", padding: "0.5rem 1rem" }}
            >
              开发说明
            </Link>
          </div>
        </ProjectItem>
      </Flex>

      <h2>3D演示示例</h2>

      <Flex vertical gap="4rem">
        <ProjectItem
          imageFiles="app_render.jpg"
          bgColors={bgColors.fittingRoom}
        >
          <h3>3D换装试衣间</h3>
          <i className="small-text">设计适配PC浏览器</i>
          <div className="tech-stack">
            {["react", "threejs", "antd", "blender"].map((tech) => {
              const Icon = iconMap[tech as keyof typeof iconMap];
              return Icon ? (
                <Tooltip
                  key={tech}
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <Icon
                    style={{ width: 32, height: 32 }}
                    data-icon={tech}
                    className={
                      tech === "threejs" && appContext?.theme === "dark"
                        ? "dark"
                        : ""
                    }
                  />
                </Tooltip>
              ) : null;
            })}
          </div>
          <p>
            本示例实现了DOM元素和WebGL
            3D场景之间的无缝交互，可以根据用户的不同选择实时将相应的3D模型搭配展示出来，在视觉上直观的帮助用户更好的选择相应的物品。
          </p>
          <div className="button-container">
            <a
              className="button"
              href="fitting-room"
              style={{ backgroundColor: "#8360c3" }}
            >
              <span className="material-icons-round">play_arrow</span>
              示例 + 开发说明
            </a>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles="myster-door_banner_confetti.png"
          isImageFirst={true}
          bgColors={bgColors.mysteryDoor}
        >
          <h3>奇异门动画入口页面</h3>
          <i className="small-text">设计适配竖屏布局</i>
          <div className="tech-stack">
            {["react", "threejs", "blender"].map((tech) => {
              const Icon = iconMap[tech as keyof typeof iconMap];
              return Icon ? (
                <Tooltip
                  key={tech}
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <Icon
                    style={{ width: 32, height: 32 }}
                    data-icon={tech}
                    className={
                      tech === "threejs" && appContext?.theme === "dark"
                        ? "dark"
                        : ""
                    }
                  />
                </Tooltip>
              ) : null;
            })}
          </div>
          <p>为移动端开发的竖屏卡通风交互动画欢迎页面。</p>
          <div className="button-container">
            <a
              className="button"
              href="mystery-door"
              style={{ backgroundColor: "#c53f26" }}
            >
              <span className="material-icons-round">play_arrow</span>
              示例
            </a>
          </div>
        </ProjectItem>

        <ProjectItem
          imageFiles="room-scene_render.png"
          bgColors={{ light: "#d9c7b0", dark: "#302416" }}
        >
          <h3>日式室内场景</h3>
          <i className="small-text">设计适配PC浏览器</i>
          <div className="tech-stack">
            {["react", "threejs", "blender"].map((tech) => {
              const Icon = iconMap[tech as keyof typeof iconMap];
              return Icon ? (
                <Tooltip
                  key={tech}
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <Icon
                    style={{ width: 32, height: 32 }}
                    data-icon={tech}
                    className={
                      tech === "threejs" && appContext?.theme === "dark"
                        ? "dark"
                        : ""
                    }
                  />
                </Tooltip>
              ) : null;
            })}
          </div>
          <p>
            本示例旨在对设备渲染性能进行简易测试。查看WebGL在展现复杂完整、多边形较多以及后处理效果较多的场景时的表现。
          </p>
          <p>
            比如，本例实现的功能包含：物体模型动态位置及角度；相机的运动及DOF景深焦点追踪；实时柔和阴影；方向性和聚光投射两种灯光；泛光Bloom后处理等效果。
          </p>
          <div className="button-container">
            <a
              className="button"
              href="room-scene"
              style={{ backgroundColor: "#526638" }}
            >
              <span className="material-icons-round">play_arrow</span>
              示例 + 开发说明
            </a>
          </div>
        </ProjectItem>
      </Flex>
    </>
  );
}
