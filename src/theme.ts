export type ThemeSetting = "system" | "light" | "dark";
export type Theme = "light" | "dark";
export interface ThemeOption {
  id: ThemeSetting;
  label: string;
  icon: string;
}

export const themeSettingOptions: ThemeOption[] = [
  { id: "system", label: "系统", icon: "brightness_4" },
  { id: "light", label: "浅色", icon: "light_mode" },
  { id: "dark", label: "暗色", icon: "dark_mode" },
];
