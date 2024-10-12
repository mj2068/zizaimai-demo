import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "material-icons/iconfont/material-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import ProjectPlantHelper from "./routes/ProjectPlantHelper";
import Demo from "./components/Demo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: import.meta.env.PROD && <ErrorPage />,
      // errorElement:  <ErrorPage />,
      children: [
        {
          index: true,
          element: <Demo />,
          handle: { title: "示例集" },
        },
        {
          path: "plant-helper",
          element: <ProjectPlantHelper />,
          handle: { title: "植物小助手" },
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
