import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="square four">
        <Link to="/About" className="about links">
          {" "}
          About{" "}
        </Link>{" "}
      </div>
      <div className="square five">
        <Link to="/projects" className="projects links">
          {" "}
          Projects{" "}
        </Link>
      </div>
      <div className="square six">
        <Link to="/contact" className="contact links">
          {" "}
          Contact{" "}
        </Link>
      </div>
    </>
  );
};

export default Nav;
