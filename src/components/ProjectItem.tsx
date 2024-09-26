import { Flex, Image } from "antd";
import { PropsWithChildren } from "react";

export default function ProjectItem({
  bannerImageFileName,
  isImageFirst,
  bgColor,
  children,
}: PropsWithChildren<{
  bannerImageFileName?: string;
  isImageFirst?: boolean;
  bgColor?: null | string | { light: string };
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

  let c;
  if (bgColor) {
    if (typeof bgColor === "string") {
      c = bgColor;
    } else {
      c = bgColor.light;
    }
  }

  return (
    <div className="project-container" style={{ backgroundColor: c }}>
      {image}
      {desc}
    </div>
  );
}
