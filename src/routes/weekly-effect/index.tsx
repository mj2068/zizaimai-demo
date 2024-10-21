import { Divider, Space } from "antd";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Space
        split={<Divider type="vertical" style={{ borderColor: "#ccc" }} />}
      >
        <Link to="one">one - 鼠标镶边</Link>
        <Link to="two">two - 动态配色</Link>
      </Space>
    </>
  );
}

export const Component = Index;
