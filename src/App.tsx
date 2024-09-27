import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Debug_Sizes from "./components/Debug_Sizes";
import useDebug from "./hooks/useDebug";

export type ThemeSetting = "system" | "light" | "dark";
type Theme = "light" | "dark";

declare global {
  interface Window {
    toggleDebug: () => void;
  }
}

const themeModeOptions = [
  {
    id: "system",
    label: "System",
    imageHref: new URL(
      "/src/assets/icons/settings_128dp_E8EAED_FILL1_wght300_GRAD0_opsz48.svg",
      import.meta.url,
    ).href,
  },
  {
    id: "light",
    label: "Light",
    imageHref: new URL(
      "/src/assets/icons/light_mode_128dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg",
      import.meta.url,
    ).href,
  },
  {
    id: "dark",
    label: "Dark",
    imageHref: new URL(
      "/src/assets/icons/dark_mode_128dp_E8EAED_FILL1_wght300_GRAD0_opsz48.svg",
      import.meta.url,
    ).href,
  },
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

  const [isCtrlDown, setIsCtrlDown] = useState(false);

  useEffect(() => {
    window.toggleDebug = toggleDebug;

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Control") setIsCtrlDown(true);
    }

    function onKeyup(e: KeyboardEvent) {
      if (e.key === "Control") setIsCtrlDown(false);
    }

    addEventListener("keydown", onKeydown);
    addEventListener("keyup", onKeyup);

    return () => {
      removeEventListener("keydown", onKeydown);
      removeEventListener("keyup", onKeyup);
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
      {showDebug && <Debug_Sizes />}
      <Header
        colorThemes={themeModeOptions}
        selectedColorTheme={themeSetting}
        setSelectedColorTheme={setThemeSetting}
      />

      <main>
        <Demo isCtrlDown={isCtrlDown} />
      </main>

      <Footer toggleDebug={toggleDebug} />
    </>
  );
}

export default App;
