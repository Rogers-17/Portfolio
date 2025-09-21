import React from 'react'
import cursorIcon from '../assets/cursorIcon.png'
import Rogers from '../assets/Rogers.jpg'
import serverIcon from '../assets/serverIcon.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:100}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}} 
    className='about__container' id='about'>
        <h2 className='about__title'>About</h2>
        <div className='about__content'>
        <img src={Rogers} className='about__img' alt="" />
        <ul className='about__items'>
            <li className='about__item'>
                <img src={cursorIcon} alt="" />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>Frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
            <li className='about__item'>
                <img src={serverIcon} alt="" />
                <div>
                    <h3>Backend Developer</h3>
                    <p>I have experiences developing fast and optimized backend systems and APIs</p>
                </div>
            </li>
            <li className='about__item'>
                <img src={cursorIcon} alt="" />
                <div>
                    <h3>UI Designer</h3>
                    <p>I use Figma and Framer to create UIs for development</p>
                </div>
            </li>
        </ul>
        </div>
    </motion.div>
  )
}

export default About
