"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/theme-context";
const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={context.toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.circle}
        style={context.mode === "light" ? { left: "0px" } : { right: "0px" }}
      />
    </div>
  );
};

export default ThemeToggle;
