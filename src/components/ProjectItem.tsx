import { Flex, Image } from "antd";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";

interface ProjectItemProps {
  imageFiles?: string | string[];
  isImageFirst?: boolean;
  bgColors?: null | { dark: string; light: string };
}

export default function ProjectItem({
  imageFiles,
  isImageFirst,
  bgColors,
  children,
}: PropsWithChildren<ProjectItemProps>) {
  const [extractedColors, setExtractedColors] = useState<FinalColor[]>([]);

  const appContext = useContext(AppContext);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    if (imageFiles) {
      let file;
      if (Array.isArray(imageFiles)) {
        if (imageFiles.length === 1) {
          file = imageFiles[0];
        } else return;
      } else {
        file = imageFiles;
      }
      extractColors(new URL(`/src/assets/${file}`, import.meta.url).href, {
        distance: 0.1,
        lightnessDistance: 0.1,
        hueDistance: 0.15,
        saturationDistance: 0.15,
      })
        .then((colors) => setExtractedColors(colors))
        .catch(console.error);
    }
  }, [imageFiles]);

  const image = imageFiles ? (
    <Flex
      className={`image-container${isImageFirst ? "" : " right"}`}
      justify="center"
      align="center"
      gap="0.25rem"
    >
      {Array.isArray(imageFiles) ? (
        imageFiles.map((file, index) => (
          <Image
            key={index}
            className="image primary"
            src={new URL(`/src/assets/${file}`, import.meta.url).href}
          />
        ))
      ) : (
        <Image
          className="image primary"
          src={new URL(`/src/assets/${imageFiles}`, import.meta.url).href}
        />
      )}

      {import.meta.env.DEV && extractedColors.length > 0 && (
        <Flex
          style={{
            position: "absolute",
            // left: "0",
            bottom: "0",
            marginTop: "4px",
          }}
          gap={4}
          wrap
        >
          {extractedColors.map((c, i) => (
            <div key={i}>
              <input
                type="color"
                defaultValue={c.hex}
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "2px",
                  borderWidth: "0px",
                  borderRadius: "50% 50%",
                }}
              />
            </div>
          ))}
        </Flex>
      )}
    </Flex>
  ) : null;

  const desc = (
    <Flex className={`project-desc${isImageFirst ? "" : " left"}`} vertical>
      {children}
    </Flex>
  );

  return (
    <div
      className="project-container round-corner-4"
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
