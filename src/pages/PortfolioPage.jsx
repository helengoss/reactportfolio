import { useState } from "react";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo-3.jpg";
import photo4 from "../assets/photo-4.jpg";
import photo5 from "../assets/photo-5.jpg";
import photo6 from "../assets/photo-6.jpg";
import photo7 from "../assets/photo-7.jpg";
import photo8 from "../assets/photo-8.jpg";
import photo9 from "../assets/photo-9.jpg";
import "./portfolio.css";

const projects = [
  {
    title: "Project 1 – Personal Webpage",
    description: "Create a simple personal webpage using HTML & CSS.",
    live: "https://helengoss.github.io/jan-26-demo/",
    github: null,
    image: photo1,
  },
  {
    title: "Project 2 – Multi-page Responsive Website",
    description: "Build a multi-page responsive website.",
    live: "https://helengoss.github.io/project2/",
    github: null,
    image: photo2,
  },
  {
    title: "Project 3 – Migrating a Site to Bootstrap",
    description: "Migrate an existing site to Bootstrap.",
    live: "https://helengoss.github.io/project3",
    github: null,
    image: photo3,
  },
  {
    title: "Project 4 – Interactive TODO List",
    description: "Introduction to JavaScript — an interactive TODO list app.",
    live: "https://helengoss.github.io/project4/",
    github: "https://github.com/helengoss/project4",
    image: photo4,
  },
  {
    title: "Project 5 – Group REST API Project",
    description: "Group project introducing REST APIs.",
    live: "https://gareths-debug.github.io/Institute-of-devs/#",
    github: "https://github.com/garethS-debug/Institute-of-devs.git",
    image: photo5,
  },
  {
    title: "Project 6 – GitHub README Generator",
    description: "Python programming — a CLI tool to generate README files.",
    live: "https://www.youtube.com/watch?v=8bRrnkSmrMk",
    github: "https://github.com/helengoss/readmefilegenerator",
    image: photo6,
  },
  {
    title: "Project 7 – Full Stack Notes App",
    description: "Full stack notes application using Node.js and Express.",
    live: "https://note-taker-b2hg.onrender.com/",
    github: "https://github.com/helengoss/note_taker.git",
    image: photo7,
  },
  {
    title: "Project 8 – Tech Blog Application",
    description: "Tech Blog app using SQL, Sequelize ORM and authentication.",
    live: "https://full-stack-tech-blog-application-6g76.onrender.com/",
    github: "https://github.com/helengoss/Full-Stack-Tech-Blog-Application",
    image: photo8,
  },
  {
    title: "Project 9 – REACT Portfolio",
    description: "Using REACT, with a carousel and a form",
    live: "https://full-stack-tech-blog-application-6g76.onrender.com/",
    github: "https://github.com/helengoss/Full-Stack-Tech-Blog-Application",
    image: photo9,
  },
];

export default function PortfolioPage() {

  
  const [currentIndex, setCurrentIndex] = useState(0);  //
  
  const goToPrev = () => {
  setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1)); //asks is this card the first card, if yes (becuase array is 8 and starts at 0, so you will be on 8-1 which is 7 if you want the last card to show when previous is clicked, show -1 which is index 7
};

const goToNext = () => {
  setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1)); // asks the reverse, to find the next card when the button is pressed
};

// below has the previous and next buttons inserted, prev = <button onClick={goToPrev} className="carousel-btn">&#8592;</button> so, onclick use the goToPrev code, the class is used for the styling in the css, &#8592; is left arrow (not on the keyboard) &#8594; is right arrow in the uincode system, you could also write &#8592; Prev</button>

const project = projects[currentIndex];

return (
  <div className="portfolio">
    <h2>Portfolio Gallery</h2>
    <p>Here are the projects that were set on the bootcamp, in ascending weeks — this site was built in week 9. My next challenge is to create a mobile app using React Native for our final project 10.</p>

    <div className="carousel"> 
      <button onClick={goToPrev} className="carousel-btn">&#8592;</button>

      <div className="gallery-card"> 
        <img src={project.image} alt={project.title} />
        <div className="gallery-card-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="gallery-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
          </div>
        </div>
      </div>

      <button onClick={goToNext} className="carousel-btn">&#8594;</button>
    </div>

    {/* Counter: "3 / 8" */}
    <p className="carousel-counter">{currentIndex + 1} / {projects.length}</p>
  </div>
);

}
