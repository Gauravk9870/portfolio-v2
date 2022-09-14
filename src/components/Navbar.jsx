import React,{ useState, useEffect } from 'react'
import "./navbar.scss";
import {BiMenu} from "react-icons/bi";
import { motion } from 'framer-motion';

const Navbar = () => {

  const showMenuHandler = () => {
    

  }

  

  return (
    <div className='navbar'>
      <span className='tablet-menu' onClick={showMenuHandler}><BiMenu/></span>
      
      <span className='logo'>Gaurav<span style={{color:"#d3a877", fontSize:"30px"}}>.</span></span>
      <div className="menu">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
      
      <motion.button className='hire'
        whileHover={{ backgroundColor : "#555"}}
      >
        Hire Me
      </motion.button>
    </div>
  )
}

export default Navbar