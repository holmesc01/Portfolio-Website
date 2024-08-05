import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';
import './custom.css';
import logo from './assets/logo.png'; // Adjust the path as necessary

AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <a className="navbar-brand" href="/" style={{ marginLeft: '20px' }}>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          <button 
            className="navbar-toggler" 
            type="button"
            style={{ marginRight: '20px' }} 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ marginLeft: '20px' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" style={{ marginLeft: '20px' }}>Projects</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link" to="/contact" style={{ marginLeft: '20px' }}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



