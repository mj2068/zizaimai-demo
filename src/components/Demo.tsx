import { Image, Space } from "antd";
import ProjectItem from "./ProjectItem";

export default function Demo({ isCtrlDown }: { isCtrlDown: boolean }) {
  //

  return (
    <>
      <h2>3D演示示例</h2>
      <div>
        <Space direction="vertical" size="large">
          <ProjectItem
            bannerImageFileName="app_render.jpg"
            bgColors={{ light: "#999fbb", dark: "#090f21" }}
          >
            <div>
              <h3>3D换装试衣间</h3>
              <i className="small-text">设计适配PC浏览器</i>
              <p>
                本示例实现了DOM元素和WebGL
                3D场景之间的无缝交互，可以根据用户的不同选择实时将相应的3D模型搭配展示出来，在视觉上直观的帮助用户更好的选择相应的物品。
              </p>
            </div>
            <div>
              <a
                className="button"
                href="fitting-room"
                style={{
                  backgroundColor: "#8360c3",
                  color: "var(--clr-dark-fg)",
                }}
              >
                示例及开发说明
                {isCtrlDown && (
                  <Image
                    src={
                      new URL(
                        "/src/assets/icons/open_in_new_128dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg",
                        import.meta.url,
                      ).href
                    }
                    width={"1rem"}
                  />
                )}
              </a>
            </div>
          </ProjectItem>

          <ProjectItem
            bannerImageFileName="myster-door_banner_confetti.png"
            isImageFirst={true}
            bgColors={{ light: "#ffcfc8", dark: "#311003" }}
          >
            <div>
              <h3>奇异门动画入口页面</h3>
              <i className="small-text">设计适配移动App</i>
              <p>为移动端App开发的卡通风格交互动画欢迎页面。</p>
            </div>
            <div>
              <a className="button" href="mystery-door" style={{backgroundColor:"#c53f26", color:"var(--clr-dark-fg)"}}>
                示例
              </a>
            </div>
          </ProjectItem>

          <ProjectItem
            bannerImageFileName="room-scene_render.png"
            bgColors={{ light: "#d9c7b0", dark: "#302416" }}
          >
            <div>
              <h3>日式室内场景</h3>
              <i className="small-text">设计适配PC浏览器</i>
              <p>
                本示例旨在对设备渲染性能进行简易测试。查看WebGL在展现复杂完整、多边形较多以及后处理效果较多的场景时的表现。
              </p>
              <p>
                比如，本例实现的功能包含：物体模型动态位置及角度；相机的运动及DOF景深焦点追踪；实时柔和阴影；方向性和聚光投射两种灯光；泛光Bloom后处理等效果。
              </p>
            </div>
            <div>
              <a className="button" href="room-scene" style={{backgroundColor:"#526638", color:"var(--clr-dark-fg)"}}>
                示例及开发说明
              </a>
            </div>
          </ProjectItem>
        </Space>
      </div>
    </>
  );
}
