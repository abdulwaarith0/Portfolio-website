import React from "react";
import "../portfolio/portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/React_city_tour",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/Person_Lists",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/React_city_tour",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/Person_Lists",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/React_city_tour",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "A City-tour website built with React",
    github: "https://github.com/abdulwaarith0/React_city_tour",
    demo: "https://myfirst-react-city-tours.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="h-5">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
              <a href={github} className="btn" target="_blank">
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
