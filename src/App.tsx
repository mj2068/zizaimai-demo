import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Debug_Sizes from "./components/Debug_Sizes";
import useDebug from "./hooks/useDebug";
import { Outlet, useMatches } from "react-router-dom";
import { AppContext } from "./AppContext";
import { Theme, ThemeSetting } from "./theme";
import { Flex } from "antd";
import GotoTopButton from "./components/GotoTopButton";

declare global {
  interface Window {
    toggleDebug?: () => void;
  }
}

if (import.meta.env.DEV) console.log("App.tsx");

function App() {
  if (import.meta.env.DEV) console.log("App()");

  /* ************ debug ************ */
  const { showDebug, toggleDebug } = useDebug();
  /* ************ debug ************ */

  useEffect(() => {
    window.toggleDebug = toggleDebug;

    return () => {
      delete window.toggleDebug;
    };
  }, [toggleDebug]);

  const matches = useMatches();
  if (import.meta.env.DEV) console.log(matches);

  // set initial state by read from localStorage, or if undefined, 'system'
  const [themeSetting, setThemeSetting] = useState(
    () =>
      (localStorage.getItem("themeSetting") as ThemeSetting | null) || "system"
  );
  const [theme, setTheme] = useState<Theme>(() => {
    if (
      "system" !== themeSetting &&
      ("light" === themeSetting || "dark" === themeSetting)
    )
      return themeSetting;

    const matchesDark = matchMedia("(prefers-color-scheme: dark)").matches;
    return matchesDark ? "dark" : "light";
  });

  useEffect(() => {
    if (themeSetting !== localStorage.getItem("themeSetting"))
      localStorage.setItem("themeSetting", themeSetting);

    // 如果不是“系统”，则设置theme状态后直接返回，不再配置media查询。因为这个media是为了
    // 监听系统配置变化的（如：用户去Windows设置中调整了系统主题）
    if ("system" !== themeSetting) {
      setTheme(themeSetting);
      return;
    }

    const mediaDark = matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaDark.matches ? "dark" : "light");

    function onColorMediaChange(e: MediaQueryListEvent) {
      setTheme(e.matches ? "dark" : "light");
    }
    mediaDark.addEventListener("change", onColorMediaChange);

    return () => {
      mediaDark.removeEventListener("change", onColorMediaChange);
    };
  }, [themeSetting]);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if ("dark" === theme) document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <>
      <AppContext.Provider value={{ theme, themeSetting, setThemeSetting }}>
        {showDebug && <Debug_Sizes />}
        <Flex vertical>
          <Header />

          <main>
            <Outlet />
          </main>
        </Flex>
        <Footer toggleDebug={toggleDebug} />

        <GotoTopButton />
      </AppContext.Provider>
    </>
  );
}

export default App;
