import { createContext } from "react";
import { Theme, ThemeSetting } from "./App";

export const AppContext = createContext<{
  theme: Theme;
  themeSetting: ThemeSetting;
  setThemeSetting: (setting: ThemeSetting) => void;
} | null>(null);
