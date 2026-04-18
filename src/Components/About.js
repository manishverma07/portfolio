import React from 'react'
import myImage from '../Assets/Images/IMG-20230315-WA00272-removebg-preview.jpg'
import myCV from '../Assets/Manish-Verma-cv.pdf'


const About = () => {
    return (
        <div className='about-container' >
            <img src={myImage} alt='Manish Verma' className="hero-img" />


            <div className='about-content' >
                <h3>Bit About Me</h3>
                <p>        
                        I'm a passionate frontend and UI developer who enjoys building clean, responsive, and user-friendly websites. I started learning web development out of curiosity for coding and design, and it has now become my career path. I'm focused on improving my skills and creating better web experiences every day.
        
                </p>

                <a href={myCV} download>
                    <button className='btn' > Download CV </button>
                </a>

            </div>


        </div>
    )
}

export default About