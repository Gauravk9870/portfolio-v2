import React, { useEffect } from 'react'
import "./contact.scss"
import { FiCodesandbox } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const projectAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1 }
  }
}

const Contact = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible")
      console.log(inView);
    }
    else {
      animation.start("hidden")
    }


  }, [animation, inView]);

  return (
    <div className='contact' id='contact'>
      <motion.div className="wrapper"
        ref={ref}
        variants={projectAnimation}
        initial="hidden"
        animate={animation}
      >
        <div className="content">
          <div className="heading">
            <span>Get in <br />TOUCH<span className='dot'>.</span></span>
          </div>
          <div className="sub-heading">
            <p>Got a question or proposal or just want to day hello? <br />go ahead</p>
          </div>
          <div className="btn">
            <button className='hello'>Say Hello!</button>
            <FaLinkedin className='social' />
            <FaGithub className='social' />
            <FiCodesandbox className='social' />
            <FaInstagram className='social' />
            <FaCodepen className='social' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact