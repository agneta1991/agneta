import React, { useState, useEffect } from "react";
import {
  updateInnerHTML,
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
            <h2 id={project.name}>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
