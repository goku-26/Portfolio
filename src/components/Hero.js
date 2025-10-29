import React from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/GOKUL P RESUME.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-text">
          <h2>Building Scalable and Interactive Web Applications</h2>
          <p>
            I'm Gokul, a Computer Technology student from Bannari Amman Institute of Technology.
            I specialize in developing full-stack web applications using the MERN stack
            and creating responsive, visually engaging interfaces.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={resume} download className="btn-outline">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Gokul Portrait" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
