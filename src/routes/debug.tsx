import Resizable from "@/components/Resizable";

export default function Debug() {
  return (
    <div>
      <Resizable>
        <p>hello world</p>
      </Resizable>
      
      <div></div>
    </div>
  );
}

// export const Component = Debug;
export { Debug as Component };
