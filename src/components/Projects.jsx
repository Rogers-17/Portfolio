import React from 'react'
import { projects } from '../data/index'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}} 
    className='projects__container' id='projects'>
        <h2 className='projects__title'>Projects</h2>
        <div className='projects'>
          {projects.map((project, id) => {
            return <div key={id} className='project-container'>
              <img src={project.imageSrc} className='project-img' alt='image'/>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <ul className='projects-skills'>
                {project.skills.map((skill, id) => {
                  return <li className='project-skill' key={id}>{skill}</li>
                })}
              </ul>
              <div className='project-links'>
                <a href={project.demo} className='project-link'>Demo</a>
                <a href={project.source} className='project-link'>Source</a>
              </div>
            </div>
          })}
        </div>
    </motion.div>
  )
}

export default Projects
