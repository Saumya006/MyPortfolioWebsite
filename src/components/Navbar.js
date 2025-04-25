import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-scroll'
import { FaMessage } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar" >
     <img src={logo} alt="logo" className='logo' />  
     <div className = "menu">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="menu-item" >Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="menu-item" >About</Link>
        <Link to="project" spy={true} smooth={true} offset={-80} duration={500} className="menu-item" >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="menu-item" >Contact</Link>

     </div> 
     <button className = "menubtn" onClick={() =>
      document.getElementById("contact").scrollIntoView({behavior: "smooth"})}><FaMessage/>Contact Me </button>
      <div className="mobilemenu" onClick={()=>setShowMenu(!showMenu)}><FaBars /></div>
      <div className = "navmenu" style={{display: showMenu? 'flex':'none'}}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowMenu(false)} >Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)} >About</Link>
        <Link to="project" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)} >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)} >Contact</Link>

     </div> 
    </nav>
  )
}

export default Navbar
