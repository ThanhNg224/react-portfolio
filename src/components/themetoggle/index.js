import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./style.css";

const resolveInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

const Themetoggle = () => {
  const [theme, settheme] = useState(resolveInitialTheme);
  const themetoggle = () => {
    settheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle nav_ac"
      onClick={themetoggle}
      aria-label="Toggle dark/light theme"
      aria-pressed={theme === "dark"}
    >
      <WiMoonAltWaningCrescent4 aria-hidden="true" />
    </button>
  );
};

export default Themetoggle;
