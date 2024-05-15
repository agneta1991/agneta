import health from "../assets/images/health.jpg";
import budget from "../assets/images/budget.png";
import weather from "../assets/images/weather.jpg";
import heavy from "../assets/images/heavy.jpg";
import ruby from "../assets/images/ruby.png";
import space from "../assets/images/space.jpg";

export const updateInnerHTML = () => {
  const element = document.getElementById("book-an-appointment-capstone");
  if (element) {
    element.innerHTML = "Health Clinic";

    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = health;
      img.alt = "Health Clinic";
    }
  }
};

export const updateInnerHTML0 = () => {
  const element = document.getElementById("HeavyFury");
  if (element) {
    element.innerHTML = "HeavyFury";
    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = heavy;
      img.alt = "HeavyFury";
    }
  }
};

export const updateInnerHTML1 = () => {
  const element = document.getElementById("Budget-app-capstone");
  if (element) {
    element.innerHTML = "Finance App";
    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = budget;
      img.alt = "Finance App";
    }
  }
};

export const updateInnerHTML2 = () => {
  const element = document.getElementById("catalog-of-my-things");
  if (element) {
    element.innerHTML = "Ruby Catalog";

    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = ruby;
      img.alt = "Ruby Catalog";
    }
  }
};

export const updateInnerHTML3 = () => {
  const element = document.getElementById("metrics-webapp");
  if (element) {
    element.innerHTML = "Weather App";

    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = weather;
      img.alt = "Weather App";
    }
  }
};

export const updateInnerHTML4 = () => {
  const element = document.getElementById("space-traveller");
  if (element) {
    element.innerHTML = "SpaceTraveller's Hub";

    const img = document.querySelector(`img.${element.id}`);
    if (img) {
      img.src = space;
      img.alt = "SpaceTraveller's Hub";
    }
  }
};
