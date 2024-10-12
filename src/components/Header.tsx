import { ConfigProvider, Flex, Radio, theme } from "antd";
import { AppContext } from "@/AppContext";
import { useContext } from "react";
import { themeSettingOptions } from "@/theme";
import { useMatches } from "react-router-dom";

interface HeaderHandle {
  title?: string;
}

console.log("Header.tsx");

export default function Header() {
  console.log("Header()");

  const matches = useMatches();
  const title =
    (matches[matches.length - 1]?.handle as HeaderHandle | undefined)?.title ||
    "Default Title";

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
        <Flex align="center" gap="0.5rem">
          <span
            className="material-icons"
            style={{ fontSize: "2rem", color: "#dd774b" }}
          >
            code
          </span>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "unset" }}>
            {title}
          </h1>
        </Flex>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={appContext?.themeSetting}
          onChange={(v) => appContext?.setThemeSetting(v.target.value)}
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
                <span
                  className="material-icons"
                  style={{ fontSize: "1.6rem", userSelect: "none" }}
                >
                  {theme.icon}
                </span>
              </Flex>
            </Radio>
          ))}
        </Radio.Group>
      </header>
    </ConfigProvider>
  );
}
