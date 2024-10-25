import { AnchorHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import classes from "./NeonButton.module.css";
console.log(classes);

export default function NeonButton({
  children,
  color,
  borderColor,
  ...props
}: PropsWithChildren<
  {
    color?: CSSProperties["color"];
    borderColor?: CSSProperties["color"];
  } & AnchorHTMLAttributes<HTMLAnchorElement>
>) {
  return (
    <a
      className={classes["neon-button"]}
      {...props}
      style={
        {
          ...props.style,
          "--colorNeon": color,
          "--colorBorder": borderColor,
        } as CSSProperties
      }
    >
      <div>{children}</div>
    </a>
  );
}
