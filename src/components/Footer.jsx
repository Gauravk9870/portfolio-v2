import React from 'react'
import "./footer.scss"
import { FaCodepen,FaGithub,FaInstagram,FaLinkedin  } from 'react-icons/fa';
import {FiCodesandbox} from 'react-icons/fi'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="up">
          <div className="logo">
            <span className='logo'>Gaurav<span style={{ color: "#d3a877", fontSize: "50px" }}>.</span></span>
          </div>

          <div className="projects-list">
            <span>Real Estate</span>
            <span>YouTube Clone</span>
            <span>Zoom clone</span>
          </div>

          <div className="projects-list">
            <span>Portfolio</span>
            <span>Chat App</span>
          </div>
          <div className="projects-list">
            <span>Google Clone</span>
            <span>Disney Hotstar Clone</span>
          </div>

          <div className="menu-links">
            <span>Home</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="down">
          <div className="social-links">
            <span><FaLinkedin/></span>
            <span><FaGithub/></span>
            <span><FiCodesandbox/></span>
            <span><FaInstagram/></span>
            <span><FaCodepen/></span>
          </div>
          <div className="copy">
            <span>© 2021 Gaurav. All rights reserved.</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer