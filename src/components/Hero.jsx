import React from 'react'
import Moham from '../assets/Moham.jpg'
import Rogers from '../assets/Rogers.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}}
    className='hero__container'>
    <div className='hero__content'>
        <h1 className='hero__title'>Hi I'm Rogers</h1>
        <p className='hero__description'>I'm a front-end developer with 2 years of experience
            using React and NextJS.
            Reach out if you'd like to know more
        </p>
        <a href="mailto:mohammedrogers579@gmail.com" className='hero__contactBtn'>
            Contact Me
        </a>
        </div>
        <img 
        src={Moham} 
        className='hero__img'
        alt="" />
        <div className='hero__topBlur'></div>
        <div className='hero__bottomBlur'></div>
    
    </motion.div>
  )
}

export default Hero
