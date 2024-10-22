import { AppContext } from "@/AppContext";
import { Flex } from "antd";
import React, { useContext, useState } from "react";
import IconRefreshRounded from "~icons/material-symbols/refresh-rounded";
import IconInfoRounded from "~icons/material-symbols/info-rounded";
import ColorMatchingImageCard from "@/components/ColorMatchingImageCard";
import classes from "@/App.module.css";

const images = import.meta.glob<string>("@/assets/weekly-effect/images/*.jpg", {
  eager: true,
  import: "default",
});

function getRandomImages(count: number) {
  const imageUrls = Object.values(images).map((imageUrl) => imageUrl);
  const shuffled = imageUrls.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getAllImages() {
  return getRandomImages(Object.keys(images).length);
}

export default function WeeklyEffectTwo() {
  const [imageUrls, setImageUrls] = useState(getAllImages());
  const [numberOfCards, setNumberOfCards] = useState(6);

  const appContext = useContext(AppContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfCards(parseInt(e.target.value));
  }

  function handleShuffle() {
    setImageUrls(getAllImages());
  }

  return (
    <Flex vertical gap={"1rem"} style={{}}>
      <p>
        <IconInfoRounded style={{ verticalAlign: "top" }} />
        卡片背景色匹配图片色彩</p>
      <Flex justify="center" align="center" gap={"2rem"} wrap>
        <Flex align="center">
          <label htmlFor="number-of-cards">卡片数量：</label>
          <input
            id="number-of-cards"
            type="range"
            value={numberOfCards}
            min={1}
            max={12}
            onChange={handleChange}
          />
          <span>{numberOfCards}</span>
        </Flex>
        <button onClick={handleShuffle}>
          <IconRefreshRounded style={{ verticalAlign: "top" }} />
          洗牌
        </button>
      </Flex>

      <Flex
        gap={"1rem"}
        justify="center"
        align={!appContext?.isMinWidth768 ? "center" : undefined}
        vertical={!appContext?.isMinWidth768}
      >
        {imageUrls
          .slice(0, numberOfCards)
          .reduce(
            (cols, url, i) => {
              cols[i % 2].push(<ColorMatchingImageCard key={url} url={url} />);
              return cols;
            },
            [[], []] as [React.JSX.Element[], React.JSX.Element[]]
          )
          .map((row, i) => (
            <Flex
              vertical
              key={i}
              gap={"1rem"}
              flex={1}
              style={{ maxWidth: "600px" }}
            >
              {row}
            </Flex>
          ))}
      </Flex>

      <div className={classes["text-container"]}>
        <p>
          获取图片色彩需要一定的计算时间，大约为几十毫秒，取决于图片分辨率。为避免计算完成后突然的颜色变化，设置了背景色的transition转换。
        </p>
        <p>
          线性渐变不支持transition，所以使用一层::before伪元素用opacity转换实现。
        </p>
      </div>
    </Flex>
  );
}

export { WeeklyEffectTwo as Component };
