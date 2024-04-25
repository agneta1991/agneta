import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p>About</p>
      <Link to="/" className="back-to-home-link">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="down--v1"
        />
      </Link>
    </div>
  );
};

export default Contact;
