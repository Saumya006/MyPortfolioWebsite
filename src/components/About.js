import React from "react";
import "./About.css";
import sd from "../assets/SD.png";
import wd from "../assets/webD.png";
import db from "../assets/DB.png";

const About = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I Do</span>
      <span className="skillDesc">
        Expertise in Web Development, Software development and
        Databases.Building impactful and user-focused applications with Java,
        Python, and a range of modern frontend technologies.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={sd} alt="img" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Software Development</h2>
            <p>Python, Java</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={db} alt="img" className="skillbarimg" />
          <div className="skillbartext">
            <h2>dataBases & APIs</h2>
            <p>SQL, MySQL, MongoDB, REST API</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={wd} alt="img" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Web Development</h2>
            <p>HTML, CSS, Javascript, React, BootStrap, Flask</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
