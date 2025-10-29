import React from "react";

function Projects() {
  const openProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        <div
          className="card"
          onClick={() =>
            openProject("https://github.com/goku-26/Messenger-chat-website")
          }
        >
          <img
            src="https://i.pinimg.com/736x/84/73/35/8473352781bf76437094a1f461aa8c20.jpg"
            alt="Messenger Chat"
          />
          <h3>Messenger Chat Website</h3>
          <p>
            Real-time chat app using MERN, JWT, and Socket.io enabling secure and dynamic communication.
          </p>
        </div>
        <div
          className="card"
          onClick={() =>
            openProject("https://github.com/goku-26/BIKE_SERVICE_APP")
          }
        >
          <img
            src="https://s.tmimgcdn.com/scr/1200x627/379900/motorbike-dealer-amp-services-responsive-clean-landing-page-template_379993-original.jpg"
            alt="Bike Service App"
          />
          <h3>Bike Service Booking Application</h3>
          <p>
            Full-stack booking system with dashboards, booking management, and email notifications.
          </p>
        </div>
        <div
          className="card"
          onClick={() =>
            openProject("https://github.com/goku-26/Course-Registration")
          }
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
            alt="Course Registration"
          />
          <h3>Student Course Registration</h3>
          <p>
            Academic course registration platform with authentication and admin management using MERN stack.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
