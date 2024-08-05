import React from 'react';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="custom-heading mb-4">
        Welcome to <span className="custom-heading-highlight">My Portfolio</span>
      </h1>
      <p className="custom-paragraph mb-5">
        This is a simple portfolio website using Bootstrap. Explore my projects, skills, and more.
      </p>
      <a href="/projects" className="btn custom-btn btn-lg">
        Portfolio
      </a>
    </div>
  );
};

export default Home;



