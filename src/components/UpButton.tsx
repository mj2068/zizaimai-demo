import { Button } from "antd";
import { Link, useMatches } from "react-router-dom";
import IconArrowBack from "~icons/material-symbols/arrow-back-rounded";

/**
 * 暂时还不是向上按钮，而是返回首页的按钮
 */
export default function UpButton() {
  const matches = useMatches();

  // Get the parent route's path
  const parentPath =
    matches.length > 1
      ? matches[matches.length - 1].pathname.endsWith("/")
        ? matches[matches.length - 3].pathname
        : matches[matches.length - 2].pathname
      : "/";

  return (
    <Link to={parentPath}>
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
