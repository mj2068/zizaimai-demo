import { AppContext } from "@/AppContext";
import { CSSProperties, useContext, useState } from "react";
import { useColorThief } from "@/hooks/useColorThief";
import appClasses from "@/App.module.css";
import classes from "./ColorMatchingImageCard.module.css";
import { Image } from "antd";

export default function ColorMatchingImageCard({
  url,
  text,
}: {
  url: string;
  text?: string;
}) {
  const appContext = useContext(AppContext);
  const { getColor, getPalette } = useColorThief();
  const [colors, setColors] = useState<CSSProperties["color"][] | null>(null);

  return (
    <div
      key={url}
      style={
        {
          padding: "2rem",
          paddingInline: !appContext?.isMinWidth425 ? "0" : undefined,
          // background: colors
          //   ? `linear-gradient(30deg, ${colors[1]}, ${colors[2]})`
          //   : "transparent",
          borderRadius: "8px",
          "--clr1": colors ? colors[1] : "transparent",
          "--clr2": colors ? colors[2] : "transparent",
        } as CSSProperties
      }
      className={`${classes["card-container"]}${
        colors?.length ? ` ${classes["loaded"]}` : ""
      }`}
    >
      {/* <img */}
      {/*   onLoad={(e) => { */}
      {/*     const color = getColor(e.target); */}
      {/*     const [color2, color3] = getPalette(e.target, 2); */}
      {/*     setColors([ */}
      {/*       `rgb(${color[0]},${color[1]},${color[2]})`, */}
      {/*       `rgb(${color2[0]},${color2[1]},${color2[2]})`, */}
      {/*       `rgb(${color3[0]},${color3[1]},${color3[2]})`, */}
      {/*     ]); */}
      {/*   }} */}
      {/*   src={url} */}
      {/*   style={{ */}
      {/*     width: "100%", */}
      {/*     display: "block", */}
      {/*     borderRadius: "8px", */}
      {/*     boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.5)", */}
      {/*   }} */}
      {/* /> */}
      <Image
        onLoad={(e) => {
          const color = getColor(e.target);
          const [color2, color3] = getPalette(e.target, 2);
          setColors([
            `rgb(${color[0]},${color[1]},${color[2]})`,
            `rgb(${color2[0]},${color2[1]},${color2[2]})`,
            `rgb(${color3[0]},${color3[1]},${color3[2]})`,
          ]);
        }}
        src={url}
        style={{
          width: "100%",
          display: "block",
          borderRadius: "8px",
          boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.5)",
        }}
      />
      <h3
        style={{ color: colors ? colors[2] : undefined, position: "relative" }}
        className={
          !appContext?.isMinWidth425 ? appClasses["text-container"] : undefined
        }
      >
        {text}
      </h3>
    </div>
  );
}
