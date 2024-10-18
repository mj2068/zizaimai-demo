import React, { useState, useEffect } from "react";
import IconArrowUp from "~icons/mdi/arrow-up";

interface GotoTopButtonProps {
  showBelow?: number;
}

const GotoTopButton: React.FC<GotoTopButtonProps> = ({ showBelow = 300 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, showBelow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`goto-top-button ${show ? "show" : ""}`}
        style={{
          position: "fixed",
          right: "40px",
          bottom: "40px",
          width: "48px",
          height: "48px",
          zIndex: 9,
          backgroundColor: "#dd774b",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          boxShadow: `2px 2px 4px #0005`,
          transition: "display 0.2s allow-discrete, opacity 0.2s",
        }}
      >
        <IconArrowUp />
      </button>
    </>
  );
};

export default GotoTopButton;
