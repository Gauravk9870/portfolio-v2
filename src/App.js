import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './style.scss';
import { motion } from 'framer-motion';
import Header from './components/Header';

const App = () => {
  return (
    <motion.div className='app'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
    >
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </motion.div>
  )
}

export default App