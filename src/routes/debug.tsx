import Resizable from "@/components/Resizable";

export default function Debug() {
  return (
    <div>
      <Resizable>
        <p>hello world</p>
      </Resizable>

      <div
        style={{
          backgroundColor: "pink",
        }}
        onPointerDown={(e) => {
          console.log("pointer down", e);
        }}
      >hello</div>
    </div>
  );
}

export { Debug as Component };
