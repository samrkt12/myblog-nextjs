"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const initialTheme = localStorage.getItem("theme-myblog");
    return initialTheme ? initialTheme : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme-myblog", mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
