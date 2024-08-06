import React from "react";
import "./header.css";
import "../App.css";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import mic from "../assets/mic.png";

const Header = () => {
  const scrolltohome = () => {
    window.scrollTo(0, 0);
  };
  const scrolltoconv = () => {
    window.scrollTo(0, 650);
  };
  const scrolltoabout = () => {
    window.scrollTo(0, 980);
  };
  const scrolltocont = () => {
    window.scrollTo(0, 1800);
  };

  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <div class="header">
        <img src={mic} />
        <h1>Speech to Text</h1>
        <div class="right-container">
          <div class="nav-links">
            <button onClick={scrolltohome}>
              <b>Home</b>
            </button>
            <button onClick={scrolltoconv}>
              <b>Convertor</b>
            </button>
            <button onClick={scrolltoabout}>
              <b>About Us</b>
            </button>
            <button onClick={scrolltocont}>
              <b>Contact Us</b>
            </button>
          </div>
          <DarkModeSwitch
            style={{ width: "30px", height: "30px" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={100}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
