import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import ProjectPlantHelper from "./routes/ProjectPlantHelper";
import Demo from "./components/Demo";
import ProjectBzPrtc from "./routes/ProjectBzPrtc";
import IconArrowLeft from "~icons/mdi/arrow-left";

function BackButton() {
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
        <IconArrowLeft style={{ fontSize: "2rem" }} />
      </Button>
    </Link>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      // errorElement: import.meta.env.PROD && <ErrorPage />,
      errorElement:  <ErrorPage />,
      children: [
        {
          index: true,
          element: <Demo />,
          handle: { title: "示例集" },
        },
        {
          path: "plant-helper",
          element: <ProjectPlantHelper />,
          handle: {
            title: "植物小助手",
            icon: <BackButton />,
          },
        },
        {
          path: "bzprtc",
          element: <ProjectBzPrtc />,
          handle: {
            title: "资源交易中心信息发布屏",
            icon: <BackButton />,
          },
        },
      ],
    },
  ],
  {
    basename: "/demo",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
