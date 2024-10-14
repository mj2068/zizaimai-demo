import React, { useState, useEffect, useContext } from "react";
import IconArrowUp from "~icons/mdi/arrow-up";
import { AppContext } from "@/AppContext";

interface GotoTopButtonProps {
  showBelow?: number;
}

const GotoTopButton: React.FC<GotoTopButtonProps> = ({ showBelow = 300 }) => {
  const [show, setShow] = useState(false);
  const appContext = useContext(AppContext);

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

  const shadowColor =
    appContext?.theme === "dark"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.2)";

  return (
    <>
      {show && (
        <button
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 1000,
            width: "48px",
            height: "48px",
            backgroundColor: "#FFA500",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            boxShadow: `0 2px 5px ${shadowColor}`,
          }}
        >
          <IconArrowUp />
        </button>
      )}
    </>
  );
};

export default GotoTopButton;
