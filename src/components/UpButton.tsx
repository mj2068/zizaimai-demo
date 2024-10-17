import { Button } from "antd";
import { Link } from "react-router-dom";
import IconArrowBack from "~icons/material-symbols/arrow-back-rounded";

/**
 * 暂时还不是向上按钮，而是返回首页的按钮
 */
export default function UpButton() {
  return (
    <Link to="/">
      <Button
        style={{
          border: "none",
          background: "none",
          boxShadow: "none",
          padding: "0",
          verticalAlign: "middle",
        }}
      >
        <IconArrowBack style={{ fontSize: "1.5rem" }} />
      </Button>
    </Link>
  );
}
