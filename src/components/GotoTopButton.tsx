import React, { useState, useEffect } from "react";
import IconArrowUp from '~icons/mdi/arrow-up';

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
      {show && (
        <button
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            width: "40px",
            height: "40px",
            backgroundColor: "#FFA500",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          <IconArrowUp />
        </button>
      )}
    </>
  );
};

export default GotoTopButton;
