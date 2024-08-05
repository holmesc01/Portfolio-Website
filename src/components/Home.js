import React from 'react';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-3 font-weight-bold text-primary mb-4">
        Welcome to <span className="text-secondary">My Portfolio</span>
      </h1>
      <p className="lead text-muted mb-5">
        This is a simple portfolio website using Bootstrap. Explore my projects, skills, and more.
      </p>
      <a href="projects" className="btn btn-primary btn-lg">
        View Projects
      </a>
    </div>
  );
};

export default Home;


