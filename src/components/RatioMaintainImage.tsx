import { useRef, useState, useEffect, CSSProperties } from "react";

export default function RatioMaintainImage({
  img1,
  img2,
  gap,
}: {
  img1: string;
  img2: string;
  gap?: CSSProperties["gap"];
}) {
  const refContainer = useRef<HTMLDivElement>(null);
  const refImg1 = useRef<HTMLImageElement>(null);
  const refImg2 = useRef<HTMLImageElement>(null);

  const [ratio1, setRatio1] = useState(0);
  const [ratio2, setRatio2] = useState(0);

  useEffect(() => {
    if (!refContainer.current || !refImg1.current || !refImg2.current) return;

    const img1 = refImg1.current;
    const img2 = refImg2.current;
    const container = refContainer.current;

    function onImgsLoad() {
      if (img1.complete && img2.complete) {
        const containerWidth = container.clientWidth;
        console.log(`containerWidth: ${containerWidth}`);
        console.log(img1.naturalWidth, img1.naturalHeight);
        console.log(img2.naturalWidth, img2.naturalHeight);

        const img1Ratio = img1.naturalWidth / img1.naturalHeight;
        const img2Ratio = img2.naturalWidth / img2.naturalHeight;

        console.log(img1Ratio, img2Ratio);

        const x1 = (containerWidth * img1Ratio) / (img1Ratio + img2Ratio);
        const x2 = containerWidth - x1;
        setRatio1(x1);
        setRatio2(x2);
      }
    }

    img1.addEventListener("load", onImgsLoad);
    img2.addEventListener("load", onImgsLoad);

    return () => {
      img1.removeEventListener("load", onImgsLoad);
      img2.removeEventListener("load", onImgsLoad);
    };
  }, []);

  return (
    <div ref={refContainer} style={{ display: "flex", gap }}>
      <div style={{ flex: ratio1 }}>
        <img
          ref={refImg1}
          src={img1}
          style={{
            display: "block",
            backgroundColor: "magenta",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div style={{ flex: ratio2 }}>
        <img
          ref={refImg2}
          src={img2}
          style={{
            display: "block",
            backgroundColor: "magenta",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
