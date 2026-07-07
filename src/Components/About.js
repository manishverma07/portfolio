import React from 'react'
import myCV from '../Assets/Manish Verma Dev cv.pdf'


const About = () => {
    return (
        <div className='about-container' >
            
            <div className='about-content' >
                <h3>Bit About Me</h3>
                <p>
                    I'm a passionate frontend developer who enjoys building clean, responsive, and user-friendly websites. I started learning web development out of curiosity for coding and design, and it has now become my career path. I'm focused on improving my skills and creating better web experiences every day.

                </p>

                <a href={myCV} download>
                    <button className='btn' > Download CV </button>
                </a>

            </div>


        </div>
    )
}

export default About