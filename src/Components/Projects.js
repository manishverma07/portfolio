import React from 'react'
import commerceImage from '../Assets/Images/E-commerce.jpg'
import commerceImage2 from '../Assets/Images/To-do-list.jpg'

const Projects = () => {
  return (
    <div>

      <h2 className='heading'> Projects </h2>

      <div className='project-container'>

        <div className='project-content'>
          <h3> E-commerce Website</h3>
          <p>Built an E-commerce frontend using React with emphasis on UI design, component structure, and visually appealing product listings. </p>
        </div>

        <img src={commerceImage} className='project-img' alt='E-commerce website UI preview'></img>
      </div>


      <div className='project-container'>

        <img src={commerceImage2} alt='To-do list app interface' className='project-img'></img>

        <div className='project-content'>
          <h3> To-do List</h3>
          <p> Built a to-do list application using HTML, CSS, and JavaScript with functionality to add and delete tasks upon completion.</p>
        </div>

      </div>

    </div>
  )
}

export default Projects
