import { Flex, Image } from "antd";
import IconGithub from "~icons/logos/github-icon";
import IconVue from "~icons/logos/vue";
import IconIonic from "~icons/logos/ionic-icon";
import IconCapacitor from "~icons/logos/capacitorjs-icon";
import styles from "@/App.module.css";
import { useContext, useState } from "react";
import { AppContext } from "@/AppContext";
import { projectBgColors } from "@/theme";

const bgColor = projectBgColors.plantHelper;

const images: { src: string; priority: "low" | "high"; loaded?: boolean }[] = [
  { src: "ph-home-1.jpg", priority: "high" },
  { src: "ph-detail-1.jpg", priority: "low" },
  { src: "ph-add-1.jpg", priority: "low" },
  { src: "ph-classify-1.jpg", priority: "low" },
  { src: "ph-detail-2.jpg", priority: "low" },
  { src: "ph-detail-3.jpg", priority: "low" },
  { src: "ph-classify-2.jpg", priority: "low" },
  { src: "ph-add-2.jpg", priority: "low" },
];

const ProjectPlantHelper = () => {
  const appContext = useContext(AppContext);
  const isDark = appContext?.theme === "dark";

  const [, setHighPriorityLoaded] = useState(false);
  const [, setAllImagesLoaded] = useState(false);

  // delete these comments
  // const handleImageLoad = (index: number) => {
  //   setImagesLoaded((prev) => {
  //     const newState = [...prev];
  //     newState[index] = true;
  //     return newState;
  //   });
  // };

  const handleImageLoad = (index: number, priority: string) => {
    images[index].loaded = true;

    if (priority === "high") {
      const allHighPriorityLoaded = images
        .filter((img) => img.priority === "high")
        .every((img) => img.loaded);
      if (allHighPriorityLoaded) {
        setHighPriorityLoaded(true);
      }
    }

    const allImagesAreLoaded = images.every((img) => img.loaded);
    if (allImagesAreLoaded) {
      setAllImagesLoaded(true);
    }
  };

  return (
    <Flex
      style={{
        borderRadius: "8px",
        backgroundColor: isDark ? bgColor.dark : bgColor.light,
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
      >
        <div className={styles["text-container"]}>
          <Image
            src={
              new URL(
                "/src/assets/previous_work/flow-plant-electronics-icon-square.svg",
                import.meta.url
              ).href
            }
            alt="Plant Helper Icon"
            preview={false}
            style={{
              width: "64px",
              borderRadius: "16px",
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
            }}
          />

          <p className={styles["large-text"]}>
            植物小助手是一款使用物联网技术旨在帮助用户管理小型植物和花卉的多平台App。
          </p>

          <p className={styles["p-title"]}>技术介绍</p>
          <span>
            使用
            <Flex gap={4} align="center" style={{ display: "inline-flex" }}>
              <IconVue style={{ fontSize: "12px" }} />
              Vue
            </Flex>
            作为开发主框架，
            <Flex gap={4} align="center" style={{ display: "inline-flex" }}>
              <IconIonic style={{ fontSize: "12px" }} />
              Ionic
            </Flex>
            提供跨平台UI组件库，
            <Flex gap={4} align="center" style={{ display: "inline-flex" }}>
              <IconCapacitor style={{ fontSize: "12px" }} />
              Capacitor
            </Flex>
            实现移动端本地化并生成程序包，此二者组合类似uniapp的开发模式。
          </span>

          <div style={{ marginTop: "1rem" }}>
            <a
              href="https://github.com/mj2068/plant-helper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex
                align="center"
                gap={"0.25rem"}
                style={{ display: "inline-flex" }}
              >
                <IconGithub style={{ filter: isDark ? "invert(1)" : "" }} />
                代码仓库
              </Flex>
            </a>
          </div>
        </div>

        <div className={styles["screenshots-container"]}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                gridArea: String.fromCharCode("a".charCodeAt(0) + index),
                // display:
                //   image.priority === "high" || highPriorityLoaded
                //     ? "block"
                //     : "none",
              }}
            >
              {/* {image.priority === "high" || highPriorityLoaded ? ( */}
              <Image
                src={
                  new URL(
                    `/src/assets/previous_work/${image.src}`,
                    import.meta.url
                  ).href
                }
                style={{}}
                onLoad={() => handleImageLoad(index, image.priority)}
                // loading={image.priority === "high" ? "eager" : "lazy"}
                placeholder
              />
              {/* ) : ( */}
              {/*   <Skeleton.Image /> */}
              {/* )} */}
            </div>
          ))}
        </div>

        <div className={styles["text-container"]}>
          <p className={styles["p-title"]}>主要功能</p>
          <ul>
            <li>增减植物条目，记录信息，添加照片</li>
            <li>实时显示传感器的各项数据，如，湿度、肥力等</li>
            <li>记录存储各项数据并显示时间线数据图表</li>
            <li>通过天气API展示天气相关数据</li>
            <li>基于百度AI开放平台的植物图像识别</li>
          </ul>
          <i>
            * 本项目的硬件部分为一个插入土壤的物联网设备，由第三方团队开发。
          </i>
        </div>
      </Flex>
    </Flex>
  );
};

export default ProjectPlantHelper;
