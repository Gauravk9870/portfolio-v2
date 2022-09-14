import React from 'react'
import "./hero.scss"
import Gaurav from "../images/gaurav.png"
import Skills from './Skills'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>

      <div className='hero' >
        <motion.div className="left"
          initial={{x : "-100vw"}}
          animate={{x : 0}}
          transition={{delay : 0.5, type :"tween"}} 
        >
          <div className="intro">
            <span>Hi, I'm A</span>
            <span>MERN Developer</span>

          </div>
          <div className="heading">
            <h1>Gaurav</h1>
          </div>
          <p>Professional MERN Stack Developer who live in New Delhi.</p>
          <p>Passionate with writing clean code</p>
        </motion.div>
        <motion.div className="right"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{delay : 0.5, type :"tween"}} 

        >
          <div className="heading2">
            <h1>kr<span className='dot'>.</span></h1>
          </div>
          <div className="img">

            <img src={Gaurav} alt="Gaurav kr." />
          </div>
        </motion.div>
      </div>
      <Skills/>
    </>
  )
}

export default Hero