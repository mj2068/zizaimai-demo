import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import ProjectPlantHelper from "./routes/ProjectPlantHelper";
import Demo from "./components/Demo";
import ProjectBzPrtc from "./routes/ProjectBzPrtc";
import ProjectDvdRental from "./routes/ProjectDvdRental";
import UpButton from "./components/UpButton";

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
          handle: { title: "项目 / 作品集" },
        },
        {
          path: "plant-helper",
          element: <ProjectPlantHelper />,
          handle: {
            title: "植物小助手",
            icon: <UpButton />,
          },
        },
        {
          path: "bzprtc",
          element: <ProjectBzPrtc />,
          handle: {
            title: "资源交易中心信息发布屏",
            icon: <UpButton />,
          },
        },
        {
          path: "rental",
          element: <ProjectDvdRental />,
          handle: {
            title: "租赁管理系统",
            icon: <UpButton />,
          },
        },
        {
          path: "weekly-effect",
          lazy: () => import("./routes/WeeklyEffect"),
          handle: { title: "每周效果挑战", icon: <UpButton /> },
          children: [
            {
              index: true,
              lazy: () => import("@/routes/weekly-effect"),
              handle: { title: "每周效果挑战", icon: <UpButton /> },
            },
            {
              path: "one",
              lazy: () => import("./routes/weekly-effect/one"),
              handle: { title: "鼠标镶边", icon: <UpButton /> },
            },
            {
              path: "two",
              lazy: () => import("./routes/weekly-effect/two"),
              handle: { title: "动态配色", icon: <UpButton /> },
            },
          ],
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
