import { useEffect, useState } from "react";

export default function C() {
  // console.log("render");

  const [windowSize, setWindowSize] = useState<{ w: number; h: number } | null>(
    { w: innerWidth, h: innerHeight },
  );
  const [dpr, setDpr] = useState(devicePixelRatio);
  const [isDragging, setIsDragging] = useState(false);
  const [pos, setPos] = useState({ left: "0", top: "0" });
  const [offset, setOffset] = useState<null | { x: number; y: number }>(null);

  useEffect(() => {
    function onWindowResize() {
      setWindowSize({ w: innerWidth, h: innerHeight });
    }

    addEventListener("resize", onWindowResize);

    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  useEffect(() => {
    // console.log("effect");
    function onDprChange() {
      // console.log("change");
      setDpr(devicePixelRatio);
    }

    const dprMatch = matchMedia(`(resolution: ${devicePixelRatio}dppx)`);
    dprMatch.addEventListener("change", onDprChange);

    return () => {
      // console.log("effect clean");
      dprMatch.removeEventListener("change", onDprChange);
    };
  }, [dpr]);

  useEffect(() => {
    function onPointerMove(e: MouseEvent) {
      if (!offset) return;

      setPos({
        top: `${e.pageY - offset.y}px`,
        left: `${e.pageX - offset.x}px`,
      });
    }

    if (isDragging) {
      document.body.addEventListener("pointermove", onPointerMove, true);
    }

    return () => {
      document.body.removeEventListener("pointermove", onPointerMove, true);
    };
  }, [isDragging, offset]);

  const v = "aaa";

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#f0fb",
        left: pos.left,
        top: pos.top,
        zIndex: 9,
        minWidth: "12rem",
      }}
    >
      <style>{`
        p.${v} {
          color: white;
          margin-top: 0;
          margin-bottom: 0;
        }
      `}</style>

      <div
        className="drag-handle"
        style={{
          backgroundColor: "darkslategrey",
          textAlign: "center",
          cursor: "grab",
          // touch-action: none is for mobile browser, override its default
          touchAction: "none",
        }}
        onPointerDown={(e) => {
          console.log(e);

          if (0 === e.button) {
            // preventDefault is for disable selecting elements and text
            e.preventDefault();
            setIsDragging(true);
            setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
          }
        }}
        onPointerUp={(e) => {
          if (0 === e.button) setIsDragging(false);
        }}
        onPointerMove={console.dir}
      >
        =
      </div>
      <div style={{ padding: "0.5rem" }}>
        {windowSize && (
          <p className={v}>{`size: ${windowSize.w}, ${windowSize.h}`}</p>
        )}
        <p className={v}>dpr: {dpr.toFixed(2)}</p>
      </div>
    </div>
  );
}
