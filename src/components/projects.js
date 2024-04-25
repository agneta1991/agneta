import React from "react";
import { Link } from "react-router-dom";
import Nav from "./navBar";

const Projects = () => {
  return (
    <div>
      <p>PROJECTS</p>
      <Link to="/" className="back-to-home-link">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="down--v1"
        />
      </Link>
      <Nav />
    </div>
  );
};

export default Projects;
