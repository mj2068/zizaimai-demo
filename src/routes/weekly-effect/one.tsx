import { AppContext } from "@/AppContext";
import { Flex, Image } from "antd";
import {
  CSSProperties,
  useContext,
  useEffect,
  useState,
} from "react";
import classes from "@/App.module.css";
import IconInfoRounded from "~icons/material-symbols/info-rounded";
import JpgOne1 from "@/assets/weekly-effect/one-1.jpg";
import JpgOne2 from "@/assets/weekly-effect/one-2.jpg";
import throttle from "lodash/throttle";

const comments = [
  {
    content: "以后，我叫长安，你叫故里，因为，长安尽头无故里，故里从此别长安。",
    source: "——网易云热评《云水谣》",
  },
  {
    content: "“轰轰烈烈最疯狂”是故事的开始，“跌跌撞撞到绝望”是故事的结尾。",
    source: "——网易云热评《我爱他》",
  },
  {
    content:
      "总会有那么一天，你会放下如今的执着和不舍，带着稍许的遗憾，去开始过没有那个人的新生活。",
    source: "——网易云热评《阴天快乐》",
  },
  {
    content: "你要藏好软弱，世界大雨滂沱，万物苟且而活，无人为你背负更多。",
    source: "——网易云热评《心安理得》",
  },
  {
    content:
      "突然很喜欢惊鸿一瞥这个词一见钟情太肤浅日久生情太苍白别人眉来眼去我呀 只偷看你一眼。",
    source: "——网易云热评《无妨》",
  },
  {
    content: "遇到可爱的人就觉得生活一下子不艰难了晚风也好 凉夜也罢 都想笑。",
    source: "——网易云热评《便利贴》",
  },
  {
    content:
      "七岁那年和十七岁那年中间有十年十七岁那年和二十七岁这年中间有一生。",
    source: "——网易云热评《七》",
  },
  {
    content: "我与你，朋友不甘，爱人不敢。",
    source: "——网易云热评《友情多余暧昧不够》",
  },
  {
    content:
      "“如果顺利的话，我会买一个公寓，养一只柯基，一只英短，孤身一人，自由且满足地度过余生。”“若是不顺呢？”“结婚生子。”",
    source: "——网易云热评《孤身》",
  },
];

/**
 * 指针坐标更新的事件处理是挂在了document上，取的是pageX、pageY。
 * 然后在渲染时用ref函数分别给每个卡片容器设置两个CSS自定义属性，这两个值通过offsetLeft、offsetTop
 * 获得指针相对于每个卡片的位置。
 * 卡片容器第一个子元素为镶边背景组件，并用以上父组件的两个值定位了自己的bg渐变位置。
 * 由于使用了offsetLeft系列，这个实现方式要求卡片容器的offsetParent是root元素。
 */
export default function One() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const appContext = useContext(AppContext);
  const cardBgColor =
    appContext?.theme === "dark"
      ? "#111"
      : ("whitesmoke" as CSSProperties["color"]);
  const rimColor =
    appContext?.theme === "dark" ? "gold" : ("brown" as CSSProperties["color"]);

  const [thickness, setThickness] = useState(2);
  const [gap, setGap] = useState(8);

  useEffect(() => {
    // bug: maximum update depth exceeded
    // 2024年10月22日 16点00分：
    // 用了lodash的throttle后，报错消失了，应该是react setState太频繁的问题
    const throttledSetPos = throttle((x: number, y: number) => {
      setPos({ x, y });
    }, 50);

    function onMouseMove(e: MouseEvent) {
      throttledSetPos(e.pageX, e.pageY);
    }

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div style={{ marginInline: "auto", maxWidth: "800px" }}>
      <p>
        <IconInfoRounded style={{ verticalAlign: "top" }} />
        移动鼠标到以下卡片上会有镶边效果
      </p>
      <Flex
        justify="center"
        align="center"
        gap={"2rem"}
        wrap
        style={{ marginBottom: "1rem" }}
      >
        <Flex align="center">
          <label htmlFor="thickness">镶边厚度：</label>
          <input
            id="thickness"
            type="range"
            min="1"
            max="8"
            value={thickness}
            onChange={(e) =>
              setThickness(Math.min(Math.max(Number(e.target.value), 1), 8))
            }
          />
          <span>{thickness}px</span>
        </Flex>
        <Flex align="center">
          <label htmlFor="gap">卡片间隙：</label>
          <input
            id="gap"
            type="range"
            min="0"
            max="24"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
          />
          <span>{gap}px</span>
        </Flex>
      </Flex>
      <Flex wrap gap={`${gap}px`}>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div
              ref={(n) => {
                if (!n) return;

                n.style.setProperty("--x", pos && `${pos.x - n.offsetLeft}px`);
                n.style.setProperty("--y", pos && `${pos.y - n.offsetTop}px`);
              }}
              key={index}
              style={{
                padding: `${thickness}px`,
                overflow: "hidden",
                position: "relative",

                flex: "1 200px",
                minHeight: "200px",
                boxSizing: "border-box",
                borderRadius: "0.5rem",
              }}
            >
              <div
                style={{
                  inset: "0",
                  position: "absolute",
                  background: `radial-gradient(200px circle at var(--x) var(--y), ${rimColor}, transparent)`,
                }}
              ></div>
              <div
                style={{
                  backgroundColor: cardBgColor,
                  height: "100%",
                  alignContent: "center",
                  position: "relative",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  boxSizing: "border-box",
                }}
                className="gray-text"
              >
                {comments[index].content}
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.8rem",
                    textAlign: "right",
                  }}
                >
                  {comments[index].source}
                </div>
              </div>
            </div>
          ))}
      </Flex>

      <div className={classes["text-container"]} style={{ marginTop: "4rem" }}>
        <h2>实现原理：</h2>
        <Flex gap={"1rem"}>
          <Image src={JpgOne1} className="image" />
          <Image src={JpgOne2} className="image" />
        </Flex>
        <p>
          注意事项：
          <br />
          指针坐标更新的事件处理是挂在了<code>document</code>上，取的是
          <code>pageX</code>、<code>pageY</code>。
          <br />
          然后在渲染时用<code>ref</code>
          函数分别给每个卡片容器设置两个CSS自定义属性，这两个值通过
          <code>offsetLeft</code>、<code>offsetTop</code>
          获得指针相对于每个卡片的位置。
          <br />
          卡片容器第一个子元素为镶边背景元素，用以上父组件的两个CSS自定义属性定位渐变背景位置。
          <br />
          由于使用了<code>offsetXXX</code>相关属性，这个实现方式要求卡片容器的
          <code>offsetParent</code>是<code>root</code>元素。
        </p>
      </div>
    </div>
  );
}

export { One as Component };
