import { Flex } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <span
        className="material-icons-round"
        style={{ fontSize: "4rem", color: "red", marginBottom: "1rem" }}
      >
        error
      </span>
      <h1>{error.status || "404"}</h1>
      <h2>{error.statusText || "页面未找到"}</h2>
      <p>{error.message || "抱歉，您访问的页面不存在。"}</p>
      {error.data && <pre>{JSON.stringify(error.data, null, 2)}</pre>}
      <Link to="/" style={{ marginTop: "1rem" }}>
        <Flex align="center" gap="0.5rem">
          <span className="material-icons-round">home</span>
          返回首页
        </Flex>
      </Link>
    </Flex>
  );
}
