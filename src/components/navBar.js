import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import profileImage from "../assets/images/profile.PNG";
import DropdownMenu from "./buttonMode";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation">
      <img
        className="burger-menu"
        src="https://img.icons8.com/fluency/48/menu--v1.png"
        alt="menu--v1"
        onClick={toggleMenu}
      />
      <div className={`nav-item nav-picture ${menuOpen ? "open" : ""}`}>
        <picture>
          <img className="image" src={profileImage} alt="Profile" />
        </picture>
      </div>

      <div className={`nav-item links-container ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`home links ${activeLink === "/" ? "active" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          01. Home
        </Link>
        <Link
          to="/about"
          className={`about links ${activeLink === "/about" ? "active" : ""}`}
          onClick={() => handleLinkClick("/about")}
        >
          02. About
        </Link>
        <Link
          to="/projects"
          className={`links ${activeLink === "/projects" ? "active" : ""}`}
          onClick={() => handleLinkClick("/projects")}
        >
          03. Projects
        </Link>
        <Link
          to="/contact"
          className={`contact links ${
            activeLink === "/contact" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("/contact")}
        >
          04. Contact
        </Link>
        {menuOpen && <DropdownMenu />}
      </div>

      <div className={`nav-item ${menuOpen ? "open" : ""}`}>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSzFt08BxwINMamE2FCICZtXQwqpXGTa-GUgK2VpUkQZfWky_Gvx4OtmQuI9oNA2-aJ1SEIu6dsMJ0O/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="resume links"
        >
          Get My Resume
        </a>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Nav;
