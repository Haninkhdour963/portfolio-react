import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Reusable Project Card Component
const ProjectCard = ({ title, description, githubLink }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} />
    </a>
  </div>
);

const Projects = () => {
  // List of projects with title, description, and github link
  const projectData = [
    {
      title: "Haneen AL-khdour Portfolio",
      description: "This project is a professional portfolio website designed to showcase my skills, experience, and projects as a web developer. Inspired by the elegant design of Anastasia Bird Designer",
      githubLink: "https://github.com/Haninkhdour963/portfolio"
    },
    {
      title: "Street Food",
      description: "This project is a restaurant discovery platform inspired by Zomato",
      githubLink: "https://github.com/Haninkhdour963/zomato-Food"
    },
    {
      title: "Airbnb-Booking-online",
      description: "This project is a web application inspired by Airbnb",
      githubLink: "https://github.com/Haninkhdour963/Airbnb-Booking-online"
    },
    {
      title: "Restaurant-One-Page",
      description: "This project is a food delivery web application",
      githubLink: "https://github.com/Haninkhdour963/restaurant-One-Page"
    },
    {
      title: "BookStoreApp-Blazor.Net6",
      description: "This project is a comprehensive Book Store application",
      githubLink: "https://github.com/Haninkhdour963/BookStoreApp-Blazor.Net6"
    },
    {
      title: "HappyInventoryAPP",
      description: "This project is a robust inventory management application",
      githubLink: "https://github.com/Haninkhdour963/HappyInventoryAPP"
    },
    {
      title: "Blog-Website Blazor",
      description: "This project is a dynamic blog website designed to facilitate content creation",
      githubLink: "https://github.com/Haninkhdour963/Blog-Website"
    },
    {
      title: "NewsAPIs-Website",
      description: "This project is a news aggregation website designed to deliver the latest news articles from various sources",
      githubLink: "https://github.com/Haninkhdour963/NwesApi-Website"
    },
    {
      title: "Tasheel-Website",
      description: "Tas'heel is an innovative web application designed to streamline the recruitment process and foster effective communication between customers and skilled workers across various fields, including electricity, air conditioning, carpentry, and construction"
,
      githubLink: "https://github.com/Haninkhdour963/Tasheel"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
