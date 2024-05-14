import React from "react";
import Popup from "./popupMenu";

const Socials = () => {
  return (
    <div className="socials-div">
      <div className="socials">
        <a
          href="https://github.com/agneta1991"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/agneta-pupienyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://medium.com/@a.pupienyte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/medium-logo.png"
            alt="medium-logo"
          />
        </a>
        <Popup />
      </div>
    </div>
  );
};

export default Socials;
