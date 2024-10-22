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
  title?: string | React.JSX.Element;
  icon?: React.ReactNode;
}

const iconStyle: CSSProperties = { fontSize: "1.2rem" };
const Icons = {
  system: <IconSettingsRounded style={iconStyle} />,
  light: <IconLightModeRounded style={iconStyle} />,
  dark: <IconDarkModeRounded style={iconStyle} />,
};

if (import.meta.env.DEV) console.log("Header.tsx");

export default function Header() {
  if (import.meta.env.DEV) console.log("Header()");

  const matches = useMatches();
  console.log(matches);

  const title =
    (matches[matches.length - 1]?.handle as HeaderHandle | undefined)?.title ||
    "自在麦";

  const icon = (matches[matches.length - 1]?.handle as HeaderHandle | undefined)
    ?.icon || (
    <IconCodeTags
      style={{ fontSize: "2rem", color: "#dd774b", display: "block" }}
    />
  );

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
        <div className="header">
          <div className="header-icon">{icon}</div>
          <h1 className={`header-title`} title="">
            {title}
          </h1>

          <Flex className="header-buttons">
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              value={appContext?.themeSetting}
              onChange={(v) => appContext?.setThemeSetting(v.target.value)}
              style={{
                boxShadow: "2px 2px 4px #0005",
                borderRadius: "6px",
              }}
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
        </div>
      </header>
    </ConfigProvider>
  );
}
