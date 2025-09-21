import React from 'react'
import { skills, history } from '../data/index'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}} 
    className='experience__container' id='experience'>
        <h2 className='experience__title'>Experience</h2>
        <div className='experience__content'>
            <div className='experience__skills'>
            {skills.map((skills, id) => {
                return (
                    <div className='experience__skill' key={id}>
                        <div className='experience__skillImageContainer'>
                            <img src={skills.imageSrc} alt="" />
                        </div>
                        <p>{skills.title}</p>
                    </div>
                )
            })}
            </div>
            <ul className='experience__history'>
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className='experience__historyItem'>
                            <img src={historyItem.imageSrc} alt="" />
                            <div className='experience__historyItemDetails'>
                                <h3>{historyItem.role}, {historyItem.organisation}</h3>
                                <p>{historyItem.startDate} - {historyItem.endDate}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </motion.div>
  )
}

export default Experience
