import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="square one"></div>
      <div className="square two"></div>
      <div className="square three"></div>
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
      <div className="square seven">
        <img
          className="icon"
          src="https://img.icons8.com/emoji/48/lithuania-emoji.png"
          alt="lithuania-emoji"
        />
      </div>
      <div className="square eight">
        <img
          className="icon"
          src="https://img.icons8.com/ios/50/1a7e2f/phone--v1.png"
          alt="phone--v1"
        />
      </div>
      <div className="square nine">
        <img
          className="icon"
          src="https://img.icons8.com/ios/50/1a7e2f/new-post--v1.png"
          alt="new-post--v1"
        />
      </div>
      <div className="square two"></div>
      <div className="square"></div>
      <div className="square right-square-one"></div>
      <div className="square right-square-two"></div>
      <div className="square"></div>
      <div className="square left-square-two"></div>
      <div className="square right-square-three"></div>
      <div className="square right-square-four"></div>
      <div className="square central">
        <div className="central-div">
          <h1 className="header name">Agneta Pupienyte</h1>
          <h2>Full-stack developer</h2>
          <h3 className="languages">
            {"{ JavaScript, React.js, Ruby, Ruby on Rails..}"}
          </h3>
          <h3>
            With a foundation in marketing and a passion for backend
            development, I merge creative innovation with technical precision to
            craft dynamic web solutions.
          </h3>
          <div className="socials">
            <img
              src="https://img.icons8.com/ios-filled/50/1a7e2f/github.png"
              alt="github"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/1a7e2f/linkedin.png"
              alt="linkedin"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/1a7e2f/medium-logo.png"
              alt="medium-logo"
            />
          </div>
        </div>
      </div>
      <div className="square left-square-three"></div>
      <div className="square left-square-four"></div>
      <div className="square right-square-five"></div>
      <div className="square right-square-six"></div>
      <div className="square"></div>
      <div className="square left-square-six"></div>
      <div className="square right-square-seven"></div>
      <div className="square right-square-eight"></div>

      <div className="square bottom-row-one"></div>
      <div className="square bottom-row-two"></div>
      <div className="square bottom-row-three"></div>
      <div className="square bottom-row-four"></div>
      <div className="square bottom-row-five"></div>
      <div className="square bottom-row-six"></div>
      <div className="square bottom-row-seven"></div>
      <div className="square bottom-row-six"></div>
      <div className="square bottom-row-nine"></div>
    </div>
  );
};

export default Home;
