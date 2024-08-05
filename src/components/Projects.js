import React, { useEffect } from 'react'; // Import useEffect from React
import './Projects.css'; // Import custom styles

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
  // Add more projects here
];

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (cardTop < viewportHeight - 100) {
          card.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
