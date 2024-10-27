import {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Resizable.module.css";

export default function Resizable({ children }: PropsWithChildren) {
  const refHandle = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [handleLeft, setHandleLeft] =
    useState<CSSProperties["flexBasis"]>("50%");

  useEffect(() => {
    const handle = refHandle.current;
    const container = refContainer.current;
    if (!handle || !container) return;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as HTMLDivElement;
      target.setPointerCapture(e.pointerId);

      setIsResizing(true);
    }

    function onPointerUp(e: PointerEvent) {
      const target = e.target as HTMLDivElement;
      target.releasePointerCapture(e.pointerId);

      setIsResizing(false);
    }

    function onPointerMove(e: MouseEvent) {
      const currTar = e.currentTarget as HTMLDivElement;
      const handle = refHandle.current;
      if (!handle) return;

      if (isResizing) {
        if (e.x < currTar.offsetWidth + currTar.offsetLeft) {
          setHandleLeft(
            `${e.x - currTar.offsetLeft - handle.offsetWidth / 2}px`
          );
        } else {
          setHandleLeft("100%");
        }
      }
    }
    handle.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointermove", onPointerMove);

    return () => {
      handle.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointermove", onPointerMove);
    };
  }, [isResizing]);

  return (
    <div ref={refContainer} className={`${styles.container}`}>
      <div style={{ flexBasis: `${handleLeft}` }}>{children}</div>
      <div ref={refHandle} className={styles["indicator-line"]}></div>
    </div>
  );
}
