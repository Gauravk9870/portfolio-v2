import React, { useState, useEffect } from 'react'
import "./navbar.scss";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);




  return (
    <div className='navbar'>
      <span className='logo'>Gaurav<span className='dot'>.</span></span>
      <div className={click ? "mobile-nav-menu" : "menu"}>
        <ul >
          <li><a href='/'>home<span className='dot'>.</span></a></li>
          <li><a href='#about'>about<span className='dot'>.</span></a></li>
          <li><a href='#projects'>projects<span className='dot'>.</span></a></li>
          <li><a href='#contact'>contact<span className='dot'>.</span></a></li>
        </ul>
      </div>

      <motion.button className='hire'
        whileHover={{ backgroundColor: "#555" }}
      >
        Hire Me
      </motion.button>

      <div className="mobile-menu" onClick={handleClick}>
        {!click ? (
          <BiMenu className='mobile-menu-btn' />
        ) : (
          <IoMdClose className='mobile-menu-btn' />
        )}
      </div>
    </div>
  )
}

export default Navbar