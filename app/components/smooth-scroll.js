"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create context
const SmoothScrollContext = createContext(null);

// Create hook
export function useLocomotive() {
  const context = useContext(SmoothScrollContext);
  if (context === undefined) {
    throw new Error("useLocomotive must be used within a SmoothScroll");
  }
  return context;
}

export default function SmoothScroll({ children }) {
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
      setLocomotiveInstance(locomotive);
    })();

    return () => {
      locomotiveInstance?.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={locomotiveInstance}>
      <div className="smooth-scroll">{children}</div>
    </SmoothScrollContext.Provider>
  );
}
