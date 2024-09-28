import { Flex, Image, Space } from "antd";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";

export default function ProjectItem({
  bannerImageFileName,
  isImageFirst,
  bgColors,
  children,
}: PropsWithChildren<{
  bannerImageFileName?: string;
  isImageFirst?: boolean;
  bgColors?: null | { dark: string; light: string };
}>) {
  const [colors, setColors] = useState<FinalColor[]>([]);

  const appContext = useContext(AppContext);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    extractColors(
      new URL(`/src/assets/${bannerImageFileName}`, import.meta.url).href,
      {
        distance: 0.1,
        lightnessDistance: 0.1,
        hueDistance: 0.15,
        saturationDistance: 0.15,
      },
    )
      .then((colors) => setColors(colors))
      .catch(console.error);
  }, [bannerImageFileName]);

  const image = bannerImageFileName ? (
    <Flex
      className={`image-container${isImageFirst ? "" : " right"}`}
      justify="center"
      align="center"
      vertical
    >
      <Image
        className="image primary"
        src={
          new URL(`/src/assets/${bannerImageFileName}`, import.meta.url).href
        }
      />
      {import.meta.env.DEV && colors.length > 0 && (
        <Space
          style={{
            // position: "absolute",
            // left: "0",
            // bottom: "0",
            marginTop: "4px",
          }}
          size={"small"}
          wrap
        >
          {colors.map((c, i) => (
            <div>
              <input
                key={i}
                type="color"
                value={c.hex}
                style={{
                  width: "32px",
                  height: "32px",
                  padding: "2px",
                  borderWidth: "0px",
                  borderRadius: "50% 50%",
                }}
              />
            </div>
          ))}
        </Space>
      )}
    </Flex>
  ) : null;

  const desc = (
    <div className={`project-desc${isImageFirst ? "" : " left"}`}>
      {children}
    </div>
  );

  return (
    <div
      className="project-container"
      style={{
        backgroundColor:
          appContext?.theme === "light" ? bgColors?.light : bgColors?.dark,
      }}
    >
      {image}
      {desc}
    </div>
  );
}
