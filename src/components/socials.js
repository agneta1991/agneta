import React from "react";

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
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/phone.png"
          alt="phone"
        />
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/mail.png"
          alt="mail"
        />
      </div>
    </div>
  );
};

export default Socials;
