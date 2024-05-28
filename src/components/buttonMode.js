import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = (mode) => {
    if ((mode === "dark" && !isDarkMode) || (mode === "light" && isDarkMode)) {
      setIsDarkMode(!isDarkMode);
    }
    setIsOpen(false);

    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <div className={`dropdown ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button className="drop-btn" onClick={toggleMenu}>
        {isDarkMode ? (
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/moon-symbol.png"
            alt="moon-symbol"
          />
        ) : (
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/sun--v1.png"
            alt="sun--v1"
          />
        )}
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          <li>
            <button
              className="drop-btn menu"
              onClick={() => {
                toggleMode("light");
              }}
            >
              Light Mode
            </button>
          </li>
          <li>
            <button
              className="drop-btn menu"
              onClick={() => {
                toggleMode("dark");
              }}
            >
              Dark Mode
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
