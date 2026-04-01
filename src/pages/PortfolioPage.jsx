import React from "react";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo-3.jpg";
import photo4 from "../assets/photo-4.jpg";
import photo5 from "../assets/photo-5.jpg";
import photo6 from "../assets/photo-6.jpg";
import photo7 from "../assets/photo-7.jpg";
import photo8 from "../assets/photo-8.jpg";

const photos = [
  { src: photo1, title: "Project 1", description: "Week 1: Intro & Web Dev", github: "https://github.com/helengoss/project1", live: "https://helengoss.github.io/jan-26-demo/" },
  { src: photo2, title: "Project 2", description: "Multi-page responsive site", github: "https://github.com/helengoss/project2", live: "https://helengoss.github.io/project2/" },
  { src: photo3, title: "Project 3", description: "Migrating site to Bootstrap", github: "https://github.com/helengoss/project3", live: "https://helengoss.github.io/project3" },
  { src: photo4, title: "Project 4", description: "Interactive TODO List", github: "https://github.com/helengoss/project4", live: "https://helengoss.github.io/project4/" },
  { src: photo5, title: "Project 5", description: "Group Mini Project", github: "https://github.com/garethS-debug/Institute-of-devs.git", live: "https://gareths-debug.github.io/Institute-of-devs/#" },
  { src: photo6, title: "Project 6", description: "README.md Generator CLI", github: "https://github.com/helengoss/readmefilegenerator", live: "https://www.youtube.com/watch?v=8bRrnkSmrMk" },
  { src: photo7, title: "Project 7", description: "Full Stack Notes App", github: "https://github.com/helengoss/note_taker.git", live: "https://note-taker-b2hg.onrender.com/" },
  { src: photo8, title: "Project 8", description: "Tech Blog App", github: null, live: null },
];

const PortfolioPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio Gallery</h2>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="flex-shrink-0 w-[548px] bg-white rounded-lg shadow-md p-3 snap-start">
            <img src={photo.src} alt={photo.title} className="w-full h-[408px] object-cover rounded-md" />
            <p className="mt-3 text-center font-medium text-lg">{photo.title}</p>
            <p className="mt-2 text-center text-sm text-gray-600">{photo.description}</p>
            <div className="mt-3 flex justify-center gap-4">
              {photo.github && (
                <a href={photo.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
                  GitHub
                </a>
              )}
              {photo.live && (
                <a href={photo.live} target="_blank" rel="noopener noreferrer" className="text-green-500 underline text-sm">
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;