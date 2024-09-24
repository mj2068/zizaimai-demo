import { Flex, Image } from "antd";
import { PropsWithChildren } from "react";

export default function ProjectItem({
  children,
  bannerImageFileName,
  isImageFirst = true,
  bgc,
}: PropsWithChildren<{
  bannerImageFileName?: string;
  isImageFirst?: boolean;
  bgc?: string;
}>) {
  const image = bannerImageFileName ? (
    <Flex
      className={`image-container${isImageFirst ? "" : " right"}`}
      justify="center"
    >
      <Image
        className="image primary"
        src={
          new URL(`/src/assets/${bannerImageFileName}`, import.meta.url).href
        }
      />
    </Flex>
  ) : null;

  const desc = (
    <div className={`project-desc${isImageFirst ? "" : " left"}`}>
      {children}
    </div>
  );

  return (
    <div className="project-container" style={{ backgroundColor: bgc }}>
      {image}
      {desc}
    </div>
  );
}
