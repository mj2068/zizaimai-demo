import NeonButton from "@/components/NeonButtton";
import classes from "@/App.module.css";
import fiveClasses from "./five.module.css";
import { Flex, Tag } from "antd";
import { useState } from "react";
import { useMatches } from "react-router-dom";
import { RouteHandle } from "@/main";

export default function Five() {
  const matches = useMatches();

  const tags = (matches[matches.length - 1]?.handle as RouteHandle | undefined)
    ?.tags;

  const [buttonLabel, setButtonLabel] = useState("ᓚᘏᗢ");
  const [fontSize] = useState("2rem");
  const [color, setColor] = useState("#ff0000");

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
          color={color}
        >
          {/* <IconFavoriteOutlineRounded style={{ verticalAlign: "middle" }} /> */}
          {buttonLabel}
        </NeonButton>

        <Flex gap={"1rem"} justify="center" align="center" wrap="wrap">
          <label>
            <input
              value={buttonLabel}
              onChange={(e) => setButtonLabel(e.target.value)}
              style={{ fontSize: "1.5rem" }}
            />
          </label>
          <input
            type="color"
            style={{
              width: "24px",
              height: "24px",
              padding: "2px",
              borderWidth: "0px",
              borderRadius: "50% 50%",
            }}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Flex>
      </Flex>
      <p className={classes["text-container"]}>
        * “酷”和“土”即在一线之差，慎用极端效果
      </p>
    </div>
  );
}

export { Five as Component };
