import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="container">
        <div className="about-me">
          <h1>About me</h1>
          <h2>Software Developer</h2>
          <p className="about-p">
            With a track record of 20+ projects, showcasing expertise in
            React.js, Vanilla JavaScript, and Ruby on Rails, highlighting
            proficiency in both front-end and back-end development. Particularly
            drawn to back-end work due to its natural alignment with my
            strengths. Leveraging exceptional collaboration and communication
            skills developed through marketing experience.
          </p>
        </div>
        <div className="skills-div">
          <h2>SKILLS</h2>
          <div className="skills-list">
            <h3>Front-end:</h3>
            <ul className="listings">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Back-end:</h3>
            <ul className="listings">
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Tools & Methods:</h3>
            <ul className="listings">
              <li>Git</li>
              <li>GitHub</li>
              <li>Mobile / Responsive Development</li>
              <li>Jest</li>
              <li>Rspec</li>
              <li>TDD</li>
              <li>JWT</li>
              <li>Netlify</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Professional:</h3>
            <ul className="listings">
              <li>Mentoring</li>
              <li>Teamwork</li>
              <li>Project management</li>
              <li>Communication & Presentation</li>
              <li>Creative Problem-Solving</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
