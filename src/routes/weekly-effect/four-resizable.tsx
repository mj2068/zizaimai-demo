import appClasses from "@/App.module.css";
import classes from "./four.module.css";
import { useContext, useState } from "react";
import { AppContext } from "@/AppContext";
import { useMatches } from "react-router-dom";
import { RouteHandle } from "@/main";
import { Tag } from "antd";
import IconInfoRounded from "~icons/material-symbols/info-rounded";
import Resizable from "@/components/Resizable";

export default function FourResizable() {
  const matches = useMatches();

  const tags = (matches[matches.length - 1]?.handle as RouteHandle | undefined)
    ?.tags;

  const appContext = useContext(AppContext);
  const isDark = appContext?.theme === "dark";

  const [showDebug, setShowDebug] = useState(false);

  return (
    <>
      <div className={appClasses["text-container"]}>
        {tags && (
          <div style={{ marginBottom: "1rem" }}>
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
        <p>
          <IconInfoRounded style={{ verticalAlign: "top" }} />
          这种布局的好处是不同容器可根据需要在基础宽度之上弹性突出。查看效果PC端调整浏览器宽度，移动端切换横竖屏。
        </p>
        <div className={classes["controls-container"]}>
          <label>
            <input
              type="checkbox"
              checked={showDebug}
              onChange={() => setShowDebug(!showDebug)}
            />
            显示覆盖示意图
          </label>
        </div>
      </div>

      <Resizable>
        <div
          className={`${isDark ? ` ${classes["dark"]}` : ""}`}
          style={{
            position: "relative",
            isolation: "isolate",
          }}
        >
          <div className={`${classes["container"]}`}>
            <div className={classes["full-width"]}></div>
            <div className={classes["popout"]}></div>
            <div className={classes["content"]}></div>
            <div className={classes["feature"]}></div>
            <div className={classes["content"]}></div>
            <div className={classes["content"]}></div>
            <div className={classes["full-width"]}></div>
            <div className={classes["content"]}></div>
            <div className={classes["content"]}></div>
            <div className={classes["popout"]}></div>
            <div className={classes["content"]}></div>
          </div>
          <div
            className={`${classes["container"]} ${classes["debug"]} ${
              showDebug ? classes["show"] : ""
            }`}
          >
            <div className={classes["full-width"]}></div>
            <div className={classes["feature"]}></div>
            <div className={classes["popout"]}></div>
            <div className={classes["content"]}></div>
          </div>
        </div>
      </Resizable>

      <div className={appClasses["text-container"]}>
        <p>命名网格线 + minmax()定义列宽</p>
      </div>
    </>
  );
}

export { FourResizable as Component };
