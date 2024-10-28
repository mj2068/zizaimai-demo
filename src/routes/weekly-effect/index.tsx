import { Divider, Space } from "antd";
import { Link } from "react-router-dom";
import classes from "@/App.module.css";

export default function Index() {
  return (
    <>
      <Space
        className={classes["text-container"]}
        split={<Divider type="vertical" style={{ borderColor: "#ccc" }} />}
        wrap
      >
        <Link to="one">鼠标镶边</Link>
        <Link to="two">动态配色</Link>
        <Link to="three">粘性标题</Link>
        <Link to="four">弹性网格布局</Link>
        <Link to="five">霓虹按钮</Link>
        <Link to="/parallax-hero" target="_blank" className="external-link">
          视差效果页头
        </Link>
      </Space>
    </>
  );
}

export const Component = Index;
