import IconVue from "~icons/logos/vue";
import IconReact from "~icons/logos/react";
import IconIonic from "~icons/logos/ionic-icon";
import IconCapacitor from "~icons/logos/capacitorjs-icon";
import IconThreejs from "~icons/logos/threejs";
import IconAntd from "~icons/logos/ant-design";
import IconBlender from "~icons/logos/blender";
import IconPostgres from "~icons/logos/postgresql";
import IconNodejs from "~icons/logos/nodejs-icon";
import IconReactRouter from "~icons/logos/react-router";
import IconAntdVue from "~icons/local-icons/antd-vue";

import { Flex, Tooltip } from "antd";
import { CSSProperties, PropsWithoutRef, useContext } from "react";
import { AppContext } from "@/AppContext";

export type IconName = keyof typeof iconMap;

const iconMap = {
  vue: IconVue,
  react: IconReact,
  ionic: IconIonic,
  capacitor: IconCapacitor,
  threejs: IconThreejs,
  antd: IconAntd,
  blender: IconBlender,
  postgresql: IconPostgres,
  nodejs: IconNodejs,
  reactRouter: IconReactRouter,
  antdVue: IconAntdVue,
};

export default function IconSet({
  icons,
  size = "2rem",
  gap = "1rem",
  labels,
  ...props
}: PropsWithoutRef<
  {
    icons: IconName[];
    size?: CSSProperties["width"];
    gap?: CSSProperties["gap"];
    labels?: string[];
  } & React.HTMLAttributes<HTMLDivElement>
>) {
  const appContext = useContext(AppContext);

  return (
    <Flex gap={gap} {...props}>
      {icons.map((tech, index) => {
        const IconX = iconMap[tech];
        return IconX ? (
          <Flex key={tech} align="center" gap="0.5rem">
            <Tooltip title={tech.charAt(0).toUpperCase() + tech.slice(1)}>
              <IconX
                style={{ width: size, height: "auto" }}
                data-icon={tech}
                className={`icon${appContext?.theme === "dark" ? " dark" : ""}`}
              />
            </Tooltip>

            {labels && (
              <span style={{ textWrap: "nowrap" }}>{labels[index]}</span>
            )}
          </Flex>
        ) : null;
      })}
    </Flex>
  );
}
