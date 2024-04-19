import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="square one"></div>
      <div className="square two"></div>
      <div className="square three"></div>
      <div className="square four">
        <p>About Me</p>
      </div>
      <div className="square five">
        <p>Projects</p>
      </div>
      <div className="square six">
        <p>Contact</p>
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
          <h2 className="header">Full-stack developer</h2>
          <h3>{"{ JavaScript, React.js, Ruby, Ruby on Rails..}"}</h3>
          <h3>
            Specialising in Ruby on Rails, leverage cutting-edge technologies,
            to bring to bring web projects to life
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

      <div className="square bottom-row-one">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/down--v1.png"
          alt="down--v1"
        />
      </div>
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
