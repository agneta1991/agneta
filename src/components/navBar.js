import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.PNG";
import DropdownMenu from "./buttonMode";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="nav-item">
        <picture>
          <img className="image" src={profileImage} alt="Profile" />
        </picture>
      </div>

      <div className="nav-item">
        <Link to="/" className="home links">
          01. Home
        </Link>
        <Link to="/about" className="about links">
          02. About
        </Link>
        <Link to="/projects" className="projects links">
          03. Projects
        </Link>
        <Link to="/contact" className="contact links">
          04. Contact
        </Link>
      </div>

      <div className="nav-item">
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
