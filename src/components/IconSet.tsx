import IconVue from "~icons/logos/vue";
import IconReact from "~icons/logos/react";
import IconIonic from "~icons/logos/ionic-icon";
import IconCapacitor from "~icons/logos/capacitorjs-icon";
import IconThreejs from "~icons/logos/threejs";
import IconAntd from "~icons/logos/ant-design";
import IconBlender from "~icons/logos/blender";
import { Tooltip } from "antd";
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
};

export default function IconSet({
  icons,
  size = "2rem",
  ...props
}: PropsWithoutRef<
  {
    icons: IconName[];
    size?: CSSProperties["width"];
  } & React.HTMLAttributes<HTMLDivElement>
>) {
  const appContext = useContext(AppContext);

  return (
    <div {...props}>
      {icons.map((tech) => {
        const IconX = iconMap[tech];
        return IconX ? (
          <Tooltip
            key={tech}
            title={tech.charAt(0).toUpperCase() + tech.slice(1)}
          >
            <IconX
              style={{ width: size, height: "auto" }}
              data-icon={tech}
              className={`icon${appContext?.theme === "dark" ? " dark" : ""}`}
            />
          </Tooltip>
        ) : null;
      })}
    </div>
  );
}
