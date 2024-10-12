import React from "react";

interface ComicStyleImagesProps {
  images: string[];
}

const ComicStyleImages: React.FC<ComicStyleImagesProps> = ({ images }) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "300px", // Adjust as needed
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#333", // Dark background for contrast
  };

  const panelStyle = (index: number): React.CSSProperties => ({
    position: "absolute",
    height: "100%",
    overflow: "hidden",
    border: "4px solid #333", // Thicker, darker border
    boxSizing: "border-box",
    ...(index === 0 && {
      left: 0,
      width: "40%",
      clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
    }),
    ...(index === 1 && {
      left: "36%",
      width: "37%",
      clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
    }),
    ...(index === 2 && {
      right: 0,
      width: "32%",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%)",
    }),
  });

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      {images.slice(0, 3).map((src, index) => (
        <div key={index} style={panelStyle(index)}>
          <img src={src} alt={`Panel ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

export default ComicStyleImages;
