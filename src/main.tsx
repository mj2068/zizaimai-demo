import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "material-icons/iconfont/material-icons.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
          handle: {
            title: "植物小助手",
            icon: (
              <Link to="/">
                <Button
                  style={{
                    border: "none",
                    background: "none",
                    boxShadow: "none",
                    borderRadius: "50% 50%",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                >
                  <span className="material-icons">arrow_back</span>
                </Button>
              </Link>
            ),
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
