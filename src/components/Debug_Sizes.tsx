import { useEffect, useState } from "react";

export default function C() {
  const [windowSize, setWindowSize] = useState<{ w: number; h: number } | null>(
    null,
  );

  useEffect(() => {
    function onResize() {
      setWindowSize({ w: innerWidth, h: innerHeight });
    }

    addEventListener("resize", onResize);

    setWindowSize({ w: innerWidth, h: innerHeight });

    return () => {
      removeEventListener("resize", onResize);
    };
  }, []);

  return <div>{windowSize && <p>{`${windowSize.w}, ${windowSize.h}`}</p>}</div>;
}
