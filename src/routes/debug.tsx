import Resizable from "@/components/Resizable";
import { useState } from "react";

interface Square {
  x: number;
  y: number;
  width: number;
  height: number;
}
export default function Debug() {
  const [squares, setSquares] = useState<Square[]>([]);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Resizable>
        <p>hello world</p>
      </Resizable>

      <div
        style={{
          backgroundColor: "pink",
          position: "relative",
          flex: 1,
        }}
        onPointerDown={(e) => {
          console.log(e);
          setSquares([
            ...squares,
            {
              x: e.clientX - e.currentTarget.offsetLeft - e.width / 2,
              y: e.clientY - e.currentTarget.offsetTop - e.height / 2,
              width: e.width,
              height: e.height,
            },
          ]);
        }}
      >
        {squares.map((s, i) => (
          <Square key={i} size={s} />
        ))}
      </div>
    </div>
  );
}

function Square({ size }: { size: Square }) {
  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        backgroundColor: "red",
        position: "absolute",
        left: size.x,
        top: size.y,
      }}
    />
  );
}
export { Debug as Component };
