import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Debug_Sizes from "./components/Debug_Sizes";
import useDebug from "./hooks/useDebug";

export type ColorThemes = "system" | "light" | "dark";

declare global {
  interface Window {
    toggleDebug: () => void;
  }
}

const colorThemes = [
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

  const [selectedColorTheme, setSelectedColorTheme] =
    useState<ColorThemes>("system");
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

  return (
    <>
      {showDebug && <Debug_Sizes />}
      <div>
        <Header
          colorThemes={colorThemes}
          selectedColorTheme={selectedColorTheme}
          setSelectedColorTheme={setSelectedColorTheme}
        />

        <main>
          <Demo isCtrlDown={isCtrlDown} />
        </main>
      </div>

      <Footer toggleDebug={toggleDebug} />
    </>
  );
}

export default App;
