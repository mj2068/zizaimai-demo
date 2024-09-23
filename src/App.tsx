import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Debug_Sizes from "./components/Debug_Sizes";

export type ColorThemes = "system" | "light" | "dark";

const colorThemes = ["system", "light", "dark"];

function App() {
  const [selectedColorTheme, setSelectedColorTheme] =
    useState<ColorThemes>("system");
  const [isCtrlDown, setIsCtrlDown] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Debug_Sizes />
      <div>
        <Header
          colorThemes={colorThemes}
          selectedColorTheme={selectedColorTheme}
          setSelectedColorTheme={setSelectedColorTheme}
        />

        <main>
          <Demo isCtrlDown={isCtrlDown}/>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
