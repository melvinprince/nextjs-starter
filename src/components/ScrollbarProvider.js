"use client";

import React, { createContext, useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";

// 1) Create a Context to hold the Scrollbar instance
export const ScrollbarContext = createContext(null);

export default function ScrollbarProvider({ children }) {
  const scrollRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // 2) initialize once
    const ss = Scrollbar.init(scrollRef.current, {
      damping: 0.1,
      alwaysShowTracks: false,
    });
    setScrollInstance(ss);

    return () => ss.destroy();
  }, []);

  return (
    // 3) provide the instance to any child
    <ScrollbarContext.Provider value={scrollInstance}>
      <div
        id="scroll-container"
        ref={scrollRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </ScrollbarContext.Provider>
  );
}
