import { AppContext } from "@/AppContext";
import { CSSProperties, useContext, useState } from "react";
import { useColorThief } from "@/hooks/useColorThief";
import appClasses from "@/App.module.css";
import classes from "./ColorMatchingImageCard.module.css";
import { Image } from "antd";

export default function ColorMatchingImageCard({ url }: { url: string }) {
  const appContext = useContext(AppContext);
  const { getColor, getPalette } = useColorThief();
  const [colors, setColors] = useState<CSSProperties["color"][] | null>(null);
  const [text] = useState(() => {
    const text = Array.from(
      { length: Math.floor(Math.random() * 48) + 12 },
      () =>
        "生国宫只谓老这保惜，拢雷生全日处思仆，为锐之之陈看谋胜太中不看定，其此仆了才令承他骂贼处燕能火救一灰当然，侯历定打于句慷是洪地但文廿法们定创不师，自第订视笔说秦死为时将前氏愚国招思胆，梵貂贼感明内杀流因雷搏尘绛韩念在，的论融，陈与云许资皇，乌夹派韩时牙么。"[
          Math.floor(Math.random() * 50)
        ]
    ).join("");
    const cleanedText = text.replace(/，+/g, "，");
    return cleanedText.startsWith("，") ? cleanedText.slice(1) : cleanedText;
  });

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
        style={{ color: colors ? colors[2] : undefined }}
        className={
          !appContext?.isMinWidth425 ? appClasses["text-container"] : undefined
        }
      >
        {text}
      </h3>
    </div>
  );
}
