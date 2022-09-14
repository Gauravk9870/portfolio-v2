import React,{useEffect} from 'react'
import "./about.scss";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const projectAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1 }
  }
}

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
    else {
      animation.start("hidden")
    }


  }, [animation, inView]);

  return (
    <motion.div className='about' id='about'
      ref={ref}
      variants={projectAnimation}
      initial="hidden"
      animate={animation}
    >
      <div className="header">
        <div className="wrapper">
          <span><h1>About<span className='dot'>.</span></h1></span>
          <span><p>Let me Introduce <br />myself</p></span>
        </div>
      </div>
      <div className="content">
        <span>Hello! my name is gaurav kumar and i love tranlating thoughts into things using web technologies. my interest in web development started back in 2020 when i decided to pursue my bachelor's degree in computer application</span>
      </div>
    </motion.div>
  )
}

export default About