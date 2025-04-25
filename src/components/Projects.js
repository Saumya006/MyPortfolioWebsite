import React from 'react'
import './Projects.css'
import food from '../assets/foods.jpg'
import travel from '../assets/travel.jpeg'
import weather from '../assets/weather.jpg'

const Projects = () => {
  return (
    <section id="project">
      <h2>My Work Items</h2>
      <div className="project-container">
        <div className="project-card">
          <h3>NetFlix Data Analysis</h3>
          <img src={food} alt="img" className='cardimage' />
          <p>
          A data science project focused on analyzing the content catalog of Netflix to uncover insights on viewing trends, genre distribution, and content availability across regions.  
          </p>
          <button className="btn2"><a href="https://github.com/Saumya006/NetFlixDataAnalysis">View Project</a></button>
        </div>
        <div className="project-card">
          <h3>Travel Blog Website</h3>
          <img src={travel} alt="img" className='cardimage' />
          <p>
          A blog web application that empowers users to share and manage educational travel content seamlessly by securely create, read, update, and delete blog posts.
          </p>
          <button className="btn2"><a href="https://github.com/Saumya006/WanderingEducators">View Project</a></button>
        </div>
        <div className="project-card">
          <h3>Weather App</h3>
          <img src={weather} alt="img" className='cardimage' />
          <p>
          A GUI App that displays real-time weather updates & detailed 7-day climate forecast offering users accurate and location-specific climate insights in an intuitive format.
          </p>
          <button className="btn2"><a href="https://github.com/Saumya006/Weather_App">View Project</a></button>
        </div>
      </div>
    </section>
  )
}

export default Projects
