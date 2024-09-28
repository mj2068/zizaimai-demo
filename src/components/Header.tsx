import { ConfigProvider, Flex, Radio, theme } from "antd";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { ThemeOption } from "../App";

export default function Header({
  themeSettingOptions,
}: {
  themeSettingOptions: ThemeOption[];
}) {
  const appContext = useContext(AppContext);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          appContext?.theme === "dark" ? theme.darkAlgorithm : undefined,
        token: {
          colorPrimary: "orange",
          // colorPrimaryText: "blue",
          // colorPrimaryBg: "green",
          // colorPrimaryActive: "purple",
        },
      }}
    >
      <header>
        <h1>示例</h1>
        {/* <span>zizaimai.space</span> */}
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={appContext?.themeSetting}
          onChange={(v) => appContext?.setThemeSetting(v.target.value)}
          style={{ marginRight: "4px" }}
        >
          {themeSettingOptions.map((theme) => (
            <Radio
              key={theme.id}
              value={theme.id}
              style={{
                width: "2rem",
                height: "2rem",
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
                  style={{ fontSize: "1.5rem", userSelect: "none" }}
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
