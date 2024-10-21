import { AppContext } from "@/AppContext";
import { Flex } from "antd";
import { useContext, useState } from "react";
import IconRefreshRounded from "~icons/material-symbols/refresh-rounded";
import ColorMatchingImageCard from "@/components/ColorMatchingImageCard";

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
            [[], []] as [JSX.Element[], JSX.Element[]]
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
    </Flex>
  );
}

export { WeeklyEffectTwo as Component };
