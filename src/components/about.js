import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <header>
        <Link to="/" className="back-to-home-link">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/left--v1.png"
            alt="down--v1"
          />
        </Link>
      </header>
      <section className="headline">
        <div className="container-two">
          <h1 className="header name">
            Hello World!{" "}
            <img
              src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
              alt="waving-hand-emoji"
            />{" "}
            <br />
            I'm Agneta
          </h1>
          <h3 className="about">
            Excited about Ruby on Rails, I'm a dynamic full-stack developer
            ready to bring your ideas to life! Let's collaborate on something
            incredible. Whether you have a project in mind or just want to chat
            possibilities, I'm here for it. Let's connect and start building
            amazing things together!
          </h3>
        </div>
      </section>
    </>
  );
};

export default Contact;
