import { Image, Space } from "antd";
import ProjectItem from "./ProjectItem";

export default function Demo({ isCtrlDown }: { isCtrlDown: boolean }) {
  //

  return (
    <>
      <p>作品</p>
      <div>
        <Space direction="vertical">
          <ProjectItem bannerImageFileName="app_render.jpg">
            <h4>3D换装试衣间</h4>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
            <a href="fitting-room">
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
                ></Image>
              )}
            </a>
          </ProjectItem>

          <ProjectItem
            bannerImageFileName="myster-door_banner.png"
            isImageFirst={false}
          >
            <h3>奇异门动画入口页面</h3>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
            <a href="mystery-door">示例</a>
          </ProjectItem>

          <ProjectItem bannerImageFileName="room-scene_render.png">
            <h3>日式室内场景</h3>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <a href="room-scene">示例及开发说明</a>
          </ProjectItem>
        </Space>
      </div>
    </>
  );
}
