import { Flex } from "antd";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

interface ErrorResponse {
  status?: number;
  statusText?: string;
  message?: string;
  data?: unknown;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  let errorMessage = "Unknown error";
  let errorStatus = "Error";
  let errorStatusText = "An unexpected error has occurred.";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
    errorStatus = error.status.toString();
    errorStatusText = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <span
        className="material-icons-round"
        style={{ fontSize: "4rem", color: "red", marginBottom: "1rem" }}
      >
        error
      </span>
      <h1>{errorStatus}</h1>
      <h2>{errorStatusText}</h2>
      {errorMessage !== errorStatusText && <p>{errorMessage}</p>}
      <Link to="/" style={{ marginTop: "1rem" }}>
        <Flex align="center" gap="0.5rem">
          <span className="material-icons-round">home</span>
          返回首页
        </Flex>
      </Link>
    </Flex>
  );
}
