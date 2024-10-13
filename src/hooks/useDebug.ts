import { useState } from "react";

export default function useDebug() {
  const [showDebug, setShowDebug] = useState(
    import.meta.env.DEV && import.meta.env.VITE_SHOW_DEBUG ? true : false
  );

  function toggleDebug() {
    setShowDebug((p) => !p);
  }
  return { showDebug, toggleDebug };
}
