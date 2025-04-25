import React from 'react'
import "./Home.css"
import { Link } from 'react-scroll'
import img from '../assets/pp.png'
import { GoDownload } from "react-icons/go";


const Home = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1OBrFJ3QiJzIUidxRuEr4K92osmvbms5G/view?usp=sharing'; // Replace with your resume URL
    link.download = 'Saumya_Swati_Resume.pdf'; // Replace with the desired file name
    link.click();
  }

  return (
    <section id="home">
      <div className="homecontent">
        <span className="hello">Hello,</span>
        <span className="text">I'm <span className="name">Saumya Swati</span></span>
        <p className="intro">Software Developer proficient in Java, Python, databases, and frontend technologies, building scalable and user-friendly applications.</p>
        <Link ><button className="btn" onClick={downloadResume}>
          Resume<span className='btnspan'><GoDownload /></span></button></Link>
      </div>
      <img src={img} alt="profile" className="homeimg" />
    </section>
  )
}

export default Home
