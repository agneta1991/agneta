import React, { useState, useEffect } from "react";
import {
  updateInnerHTML,
  updateInnerHTML0,
  updateInnerHTML1,
  updateInnerHTML2,
  updateInnerHTML3,
  updateInnerHTML4,
} from "./titles";

const DataFetchingComponent = () => {
    const githubname = "agneta1991";
  const accessToken = "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";
  const targetRepositories = [
    "book-an-appointment-capstone",
    "Budget-app-capstone",
    "metrics-webapp",
    "space-traveller",
    "HeavyFury",
    "catalog-of-my-things",
  ];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubname}/repos`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((repositories) => {
        const filteredProjects = repositories
          .filter((repo) => targetRepositories.includes(repo.name))
          .map((repo) => ({
            name: repo.name,
            link: repo.html_url,
            description: repo.description || "",
          }));
        setProjects(filteredProjects);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      updateInnerHTML();
      updateInnerHTML0();
      updateInnerHTML1();
      updateInnerHTML2();
      updateInnerHTML3();
      updateInnerHTML4();
    }
  }, [projects]);

  return (
    <div className="projects">
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img className={project.name} alt={project.name} />
            <div className="projects-title-div">
              <h2 id={project.name}>{project.name}</h2>
              <a
                className="see-source"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                | See Source{" "}
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/5656e7/code--v1.png"
                  alt="code--v1"
                />
              </a>
            </div>
            <p className="description">{project.description}</p>
            <div className="languages-list">
              {index === 0 && (
                <ul className="listings list">
                  <li>Ruby on Rails</li>
                  <li>PostgreSQL</li>
                  <li>JWT</li>
                  <li>React.js</li>
                </ul>
              )}
              {index === 1 && (
                <ul className="listings list">
                  <li>Ruby on Rails</li>
                  <li>PostgreSQL</li>
                  <li>Rspec</li>
                  <li>Figma</li>
                </ul>
              )}
              {index === 2 && (
                <ul className="listings list">
                  <li>Ruby</li>
                  <li>SQL</li>
                  <li>JSON</li>
                  <li>Command-Line Interface</li>
                </ul>
              )}
              {index === 3 && (
                <ul className="listings list">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Responsiveness</li>
                </ul>
              )}
              {index === 4 && (
                <ul className="listings list">
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>API</li>
                  <li>Figma</li>
                </ul>
              )}
              {index === 5 && (
                <ul className="listings list">
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>API</li>
                  <li>Jest</li>
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
