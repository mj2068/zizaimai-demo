import { Flex, Image } from "antd";
import { PropsWithChildren } from "react";

export default function ProjectItem({
  children,
  bannerImageFileName,
  isImageFirst = true,
}: PropsWithChildren<{
  bannerImageFileName?: string;
  isImageFirst?: boolean;
}>) {
  const image = bannerImageFileName ? (
    <Flex justify="center">
      <Image
        className="image primary"
        src={
          new URL(`/src/assets/${bannerImageFileName}`, import.meta.url).href
        }
      />
    </Flex>
  ) : null;

  const desc = <div className="project-desc">{children}</div>;

  return (
    <div className="project-container">
      {isImageFirst ? [image, desc] : [desc, image]}
    </div>
  );
}
