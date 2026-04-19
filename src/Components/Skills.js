import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiCanva, SiCoreldraw, SiFigma } from 'react-icons/si';

const Skills = () => {
  return (
    <div>
      <h2 className='heading'> Skills</h2>

      <div className='skills-container'>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaHtml5 /> HTML5</span> <span>80%</span></h4>
          <div className='bar'></div>
          <div className='bar html'>  </div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaCss3 /> CSS3</span> <span>65%</span> </h4>
          <div className='bar'></div>
          <div className='bar css'></div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaJs />  JavaScript </span>  <span>40%</span></h4>
          <div className='bar'></div>
          <div className='bar js'></div>
        </div>


        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaReact />  React </span> <span>40%</span></h4>
          <div className='bar' ></div>
          <div className='bar react'></div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaBootstrap /> Bootstrap </span> <span> 50%</span></h4>
          <div className='bar'></div>
          <div className='bar boot'></div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <FaGithub /> Git/GitHub </span> <span>50%</span></h4>
          <div className='bar'></div>
          <div className='bar git'></div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <SiFigma /> Figma to web conversion </span> <span>70%</span></h4>
          <div className='bar'></div>
          <div className='bar figma'></div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <SiCanva /> Canva </span><span> 90%</span></h4>
          <div className='bar'></div>
          <div className='bar canva'> </div>
        </div>

        <div className='bar-container'>
          <h4 className='bar-text'> <span className='skill-name'> <SiCoreldraw /> CoralDraw </span> <span>85%</span></h4>
          <div className='bar'></div>
          <div className='bar coral'></div>
        </div>



      </div>

    </div>
  )
}

export default Skills
