import { ConfigProvider, Flex, Radio, theme } from "antd";
import { AppContext } from "@/AppContext";
import React, { CSSProperties, useContext } from "react";
import { themeSettingOptions } from "@/theme";
import { useMatches } from "react-router-dom";
import IconCodeTags from "~icons/mdi/code-tags";
import IconDarkModeRounded from "~icons/material-symbols/dark-mode-rounded";
import IconLightModeRounded from "~icons/material-symbols/light-mode-rounded";
import IconSettingsRounded from "~icons/material-symbols/settings-rounded";

interface HeaderHandle {
  title?: string;
  icon?: React.ReactNode;
}

const iconStyle: CSSProperties = { fontSize: "1.2rem" };
const Icons = {
  system: <IconSettingsRounded style={iconStyle} />,
  light: <IconLightModeRounded style={iconStyle} />,
  dark: <IconDarkModeRounded style={iconStyle} />,
};

import.meta.env.DEV && console.log("Header.tsx");

export default function Header() {
  import.meta.env.DEV && console.log("Header()");

  const matches = useMatches();
  const title =
    (matches[matches.length - 1]?.handle as HeaderHandle | undefined)?.title ||
    "自在麦";

  const icon = (matches[matches.length - 1]?.handle as HeaderHandle | undefined)
    ?.icon || <IconCodeTags style={{ fontSize: "2rem", color: "#dd774b" }} />;
  const appContext = useContext(AppContext);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          appContext?.theme === "dark" ? theme.darkAlgorithm : undefined,
        token: {
          colorPrimary: "#dd774b",
        },
      }}
    >
      <header>
        <Flex justify="space-between" align="center" style={{ height: "4rem" }}>
          <Flex align="center" gap="0.5rem">
            {icon}
            <h1
              className={`header-title${title.length > 6 ? " longer-6" : ""}`}
            >
              {title}
            </h1>
          </Flex>

          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            value={appContext?.themeSetting}
            onChange={(v) => appContext?.setThemeSetting(v.target.value)}
            style={{ flexShrink: 0 }}
          >
            {themeSettingOptions.map((theme) => (
              <Radio
                key={theme.id}
                value={theme.id}
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  padding: "0",
                }}
              >
                <Flex
                  style={{ width: "100%", height: "100%" }}
                  justify="center"
                  align="center"
                >
                  {Icons[theme.id]}
                </Flex>
              </Radio>
            ))}
          </Radio.Group>
        </Flex>
      </header>
    </ConfigProvider>
  );
}
