import { AnchorHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import classes from "./NeonButton.module.css";
console.log(classes);

export default function NeonButton({
  children,
  color = "white",
  ...props
}: PropsWithChildren<
  { color?: CSSProperties["color"] } & AnchorHTMLAttributes<HTMLAnchorElement>
>) {
  return (
    <a
      className={classes["neon-button"]}
      {...props}
      style={{ ...props.style, "--clr-neon": color } as CSSProperties}
    >
      <div className={classes["neon-button-content"]}>{children}</div>
    </a>
  );
}
