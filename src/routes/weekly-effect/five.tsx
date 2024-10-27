import NeonButton from "@/components/NeonButtton";
import classes from "@/App.module.css";
import fiveClasses from "./five.module.css";
import { Flex, Tag } from "antd";
import { useEffect, useState } from "react";
import { useMatches } from "react-router-dom";
import { RouteHandle } from "@/main";
import Chroma from "chroma-js";

export default function Five() {
  const matches = useMatches();

  const tags = (matches[matches.length - 1]?.handle as RouteHandle | undefined)
    ?.tags;

  const [buttonLabel, setButtonLabel] = useState("ᓚᘏᗢ");
  const [color, setColor] = useState(Chroma("#ff00ae"));
  const [colorBorder, setColorBorder] = useState(Chroma("#ffea00"));
  const [fontSize] = useState("1.5rem");
  const [isShibuyaMode, setIsShibuyaMode] = useState(false);

  useEffect(() => {
    let interval: number;
    let intervalBorder: number;
    if (isShibuyaMode) {
      interval = setInterval(() => {
        const hue = (Date.now() / 10) % 360;
        setColor(Chroma(`hsl(${hue}, 100%, 50%)`));
      }, 400);
      intervalBorder = setInterval(() => {
        const hue = (Date.now() / 20) % 360;
        setColorBorder(Chroma(`hsl(${hue}, 100%, 50%)`));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      clearInterval(intervalBorder);
    };
  }, [isShibuyaMode]);

  return (
    <div className={fiveClasses.container}>
      {tags && (
        <div
          className={classes["text-container"]}
          style={{ marginBottom: "1rem" }}
        >
          {tags.map((tag) => {
            const id = typeof tag === "string" ? tag : tag.id;
            const name = typeof tag === "string" ? tag : tag.name;
            const color =
              typeof tag === "string" || !tag.color ? undefined : tag.color;
            return (
              <Tag key={id} color={color}>
                {name}
              </Tag>
            );
          })}
        </div>
      )}

      <Flex
        id="neon"
        className={fiveClasses["feature-container"]}
        gap={"4rem"}
        justify={"space-evenly"}
        align="center"
        vertical
        style={{
          width: "100%",
          backgroundColor: "var(--clr-secondary-dark-bg)",
          isolation: "isolate",
          borderRadius: "0.5rem",
          boxSizing: "border-box",
          paddingBlock: "6rem",
        }}
      >
        <NeonButton
          style={{
            fontSize: fontSize,
            minWidth: "4rem",
            minHeight: "1rem",
            marginBottom: "4rem",
          }}
          tabIndex={0}
          color={buttonLabel.length ? color.hex() : undefined}
          borderColor={colorBorder.hex()}
        >
          {/* <IconFavoriteOutlineRounded style={{ verticalAlign: "middle" }} /> */}
          {buttonLabel}
        </NeonButton>

        <Flex vertical gap={"1rem"}>
          <Flex gap={"1rem"} justify="center" align="center" wrap="wrap">
            <label>
              <input
                value={buttonLabel}
                onChange={(e) => setButtonLabel(e.target.value)}
                style={{ fontSize: "1.5rem" }}
              />
            </label>
            <Flex gap={"1rem"}>
              <input
                type="color"
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "2px",
                  borderWidth: "0px",
                  borderRadius: "50% 50%",
                }}
                value={color.hex()}
                onChange={(e) => setColor(Chroma(e.target.value))}
              />
              <input
                type="color"
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "2px",
                  borderWidth: "0px",
                  borderRadius: "50% 50%",
                }}
                value={colorBorder.hex()}
                onChange={(e) => setColorBorder(Chroma(e.target.value))}
              />
            </Flex>
          </Flex>
          <label style={{ color: "var(--clr-dark-fg)" }}>
            <input
              type="checkbox"
              checked={isShibuyaMode}
              onChange={(e) => setIsShibuyaMode(e.target.checked)}
            />
            开启'去东京'模式😛
          </label>
        </Flex>
      </Flex>
      <p className={classes["text-container"]}>
        * “酷”和“土”即在一线之差，慎用极端效果
      </p>
    </div>
  );
}

export { Five as Component };
