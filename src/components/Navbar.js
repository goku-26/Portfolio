import React from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/GOKUL P RESUME.pdf";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">
          <img src={profile} alt="Gokul Profile" className="profile" />
          <div>
            <h1>Gokul P</h1>
            <p>Full-Stack (MERN) Developer</p>
          </div>
        </div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href={resume} download className="btn-resume">
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
