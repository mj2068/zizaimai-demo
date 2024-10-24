import { Divider, Space } from "antd";
import { Link } from "react-router-dom";
import classes from "@/App.module.css";

export default function Index() {
  return (
    <>
      <Space
        className={classes["text-container"]}
        split={<Divider type="vertical" style={{ borderColor: "#ccc" }} />}
      >
        <Link to="one">鼠标镶边</Link>
        <Link to="two">动态配色</Link>
        <Link to="three">粘性标题</Link>
      </Space>
    </>
  );
}

export const Component = Index;
