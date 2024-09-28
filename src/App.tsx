import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Debug_Sizes from "./components/Debug_Sizes";
import useDebug from "./hooks/useDebug";
import { AppContext } from "./AppContext";

export type ThemeSetting = "system" | "light" | "dark";
export type Theme = "light" | "dark";
export interface ThemeOption {
  id: ThemeSetting;
  label: string;
  icon: string;
}

declare global {
  interface Window {
    toggleDebug?: () => void;
  }
}

const themeSettingOptions: ThemeOption[] = [
  { id: "system", label: "系统", icon: "brightness_4" },
  { id: "light", label: "浅色", icon: "light_mode" },
  { id: "dark", label: "暗色", icon: "dark_mode" },
];

function App() {
  /* ************ debug ************ */
  const { showDebug, toggleDebug } = useDebug();
  /* ************ debug ************ */

  // set initial state by read from localStorage, or if undefined, 'system'
  const [themeSetting, setThemeSetting] = useState<ThemeSetting>(
    () =>
      (localStorage.getItem("themeSetting") as ThemeSetting | undefined) ||
      "system",
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
    window.toggleDebug = toggleDebug;

    return () => {
      delete window.toggleDebug;
    };
  }, [toggleDebug]);

  useEffect(() => {
    if (themeSetting !== localStorage.getItem("themeSetting"))
      localStorage.setItem("themeSetting", themeSetting);

    if ("system" !== themeSetting) {
      setTheme(themeSetting);
      return;
    }

    const mediaDark = matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaDark.matches ? "dark" : "light");

    function onChange(e: MediaQueryListEvent) {
      setTheme(e.matches ? "dark" : "light");
    }
    mediaDark.addEventListener("change", onChange);

    return () => {
      mediaDark.removeEventListener("change", onChange);
    };
  }, [themeSetting]);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if ("dark" === theme) document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <>
      <AppContext.Provider value={{ theme, setThemeSetting, themeSetting }}>
        {showDebug && <Debug_Sizes />}
        <Header themeSettingOptions={themeSettingOptions} />

        <main>
          <Demo />
        </main>

        <Footer toggleDebug={toggleDebug} />
      </AppContext.Provider>
    </>
  );
}

export default App;
