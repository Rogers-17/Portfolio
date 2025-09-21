import React from 'react'
import emailIcon from '../assets/emailIcon.png'
import linkedInIcon from '../assets/linkedInIcon.png'
import githubIcon from '../assets/githubIcon.png'

const Contact = () => {
  return (
    <section>
    <footer className='contact__container' id='contact'>
        <div className='contact__text'>
            <h2>Contact</h2>
        <ul className='contact__links'>
            <li className='contact__link'>
                <img src={emailIcon} alt="icon" />
                <a href="#">mohammedrogers579@gamil.com</a>
            </li>
            <li className='contact__link'>
                <img src={linkedInIcon} alt="icon" />
                <a href="#">linkedin.com/rogers231</a>
            </li>
            <li className='contact__link'>
                <img src={githubIcon} alt="icon" />
                <a href="#">github.com/Rogers-17</a>
            </li>
        </ul>
        </div>

        <div className='newsletter__tab'>
            <h2>Subscribe to our Newsletter</h2>
            <p>The Latest News, Articles and resources sent to your inbox</p>
            <div className='newsletter__inputs'>
                <input type="email" placeholder='Enter Your Email' />
                <button className='button'>Subscribe</button>
            </div>
        </div>
    </footer>
    <div className='footer__container'>
        Copyright &copy; 2025 Rogers INC. All Right Reserved
    </div>
    </section>
  )
}

export default Contact
