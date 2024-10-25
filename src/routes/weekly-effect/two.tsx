import { AppContext } from "@/AppContext";
import { Flex } from "antd";
import React, { useContext, useState } from "react";
import IconRefreshRounded from "~icons/material-symbols/refresh-rounded";
import IconInfoRounded from "~icons/material-symbols/info-rounded";
import ColorMatchingImageCard from "@/components/ColorMatchingImageCard";
import classes from "@/App.module.css";

const imageUrls = import.meta.glob<string>(
  "@/assets/weekly-effect/images/*.jpg",
  {
    eager: true,
    import: "default",
  }
);

const poeticTexts = [
  // 20字的句子
  "月光如水，洒在窗前。",
  "风轻轻拂过，带来花香。",
  "夜空繁星点点，诉说故事。",
  "清晨露珠，晶莹剔透。",
  "大海波涛，拍打岸边。",
  "山间溪流，潺潺流淌。",
  "秋叶飘零，随风而舞。",
  "春天花朵，绽放色彩。",
  "冬日雪花，轻轻飘落。",
  "夏日阳光，炙热明亮。",
  "夜晚的月亮，静静悬挂。",
  "晨曦的阳光，透过树叶。",
  "湖面的涟漪，微风荡漾。",
  "星空下的夜晚，时间静止。",
  "雨后的彩虹，绚丽多彩。",
  "微风拂过，心中遐想。",
  "夜空繁星，诉说秘密。",
  "清晨露珠，映照希望。",
  "大海波涛，诉说岁月。",
  "山间溪流，宁静安详。",
  "秋叶飘零，生命轮回。",
  "春天花朵，带来生机。",
  "冬日雪花，覆盖大地。",
  "夏日阳光，照耀角落。",
  "夜晚月亮，守护灵魂。",
  "晨曦阳光，洒下光影。",
  "湖面涟漪，带来宁静。",
  "星空夜晚，思绪流淌。",
  "雨后彩虹，诉说希望。",
  "微风拂过，心中涌动。",

  // 40字的句子
  "月光如水，洒在窗前，思绪如潮，涌向远方，仿佛在追寻那遥不可及的梦。",
  "风轻轻拂过，带来花香，心中涌动着无尽的遐想，仿佛置身于一个无边的花海。",
  "夜空繁星点点，仿佛在诉说着古老的故事，那些被时间遗忘的秘密在星光中闪烁。",
  "清晨的露珠，晶莹剔透，映照出新一天的希望，仿佛每一滴都蕴藏着无尽的可能。",
  "大海的波涛，拍打着岸边，诉说着无尽的岁月，仿佛每一次起伏都在记录着历史的变迁。",
  "山间的溪流，潺潺流淌，带来宁静与安详，仿佛在低声吟唱着自然的赞歌。",
  "秋叶飘零，随风而舞，仿佛在演绎一场生命的轮回，诉说着时间的无情与美丽。",
  "春天的花朵，绽放着生命的色彩，带来无尽的生机，仿佛在宣告着一个崭新的开始。",
  "冬日的雪花，轻轻飘落，覆盖了大地的每一个角落，仿佛在为世界披上一层纯白的梦。",
  "夏日的阳光，炙热而明亮，照耀着每一个角落，仿佛在燃烧着生命的激情与活力。",

  // 80字的句子
  "月光如水，洒在窗前，思绪如潮，涌向远方，仿佛在追寻那遥不可及的梦。夜深人静，只有风声轻轻拂过，带来一丝凉意，仿佛在低声诉说着大自然的秘密。",
  "风轻轻拂过，带来花香，心中涌动着无尽的遐想，仿佛置身于一个无边的花海。每一朵花都在低声吟唱，诉说着生命的美丽与短暂，令人心醉神迷。",
  "夜空繁星点点，仿佛在诉说着古老的故事，那些被时间遗忘的秘密在星光中闪烁。每一颗星星都是一个梦，带着无尽的希望与幻想，照亮了黑暗的夜空。",
  "清晨的露珠，晶莹剔透，映照出新一天的希望，仿佛每一滴都蕴藏着无尽的可能。阳光透过树叶洒下斑驳的光影，为大地披上一层金色的纱衣，迎接新的一天。",
  "大海的波涛，拍打着岸边，诉说着无尽的岁月，仿佛每一次起伏都在记录着历史的变迁。海风轻拂，带来咸咸的气息，仿佛在低声吟唱着大海的赞歌。",
  "山间的溪流，潺潺流淌，带来宁静与安详，仿佛在低声吟唱着自然的赞歌。溪水清澈见底，映照出蓝天白云，仿佛在诉说着大自然的纯净与美丽。",
  "秋叶飘零，随风而舞，仿佛在演绎一场生命的轮回，诉说着时间的无情与美丽。每一片落叶都是一个故事，带着无尽的回忆与感慨，飘向远方。",
  "春天的花朵，绽放着生命的色彩，带来无尽的生机，仿佛在宣告着一个崭新的开始。每一朵花都在微风中轻轻摇曳，诉说着生命的美丽与短暂。",
  "冬日的雪花，轻轻飘落，覆盖了大地的每一个角落，仿佛在为世界披上一层纯白的梦。雪花在空中飞舞，仿佛在低声诉说着冬天的秘密与宁静。",
  "夏日的阳光，炙热而明亮，照耀着每一个角落，仿佛在燃烧着生命的激情与活力。阳光透过树叶洒下斑驳的光影，为大地披上一层金色的纱衣，迎接新的一天。",
];

function getRandomImagesWithText(count: number) {
  const images = Object.values(imageUrls).map((imageUrl) => imageUrl);
  const shuffledImages = images.sort(() => 0.5 - Math.random());
  const shuffledTexts = poeticTexts.sort(() => 0.5 - Math.random());

  return shuffledImages.slice(0, count).map((image, index) => ({
    url: image,
    text: shuffledTexts[index % poeticTexts.length],
  }));
}

function getAllImagesWithText() {
  return getRandomImagesWithText(Object.keys(imageUrls).length);
}

export default function WeeklyEffectTwo() {
  const [imageUrls, setImageUrls] = useState(getAllImagesWithText());
  const [numberOfCards, setNumberOfCards] = useState(6);

  const appContext = useContext(AppContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfCards(parseInt(e.target.value));
  }

  function handleShuffle() {
    setImageUrls(getAllImagesWithText());
  }

  return (
    <Flex vertical gap={"1rem"} style={{}}>
      <p>
        <IconInfoRounded style={{ verticalAlign: "top" }} />
        卡片背景色匹配图片色彩
      </p>
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
            (cols, { url, text }, i) => {
              cols[i % 2].push(
                <ColorMatchingImageCard key={url} url={url} text={text} />
              );
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
