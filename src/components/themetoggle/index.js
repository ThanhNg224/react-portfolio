import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

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
    <div
      className="nav_ac"
      onClick={themetoggle}
      role="button"
      tabIndex={0}
      aria-label="Toggle dark/light theme"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          themetoggle();
        }
      }}
    >
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;