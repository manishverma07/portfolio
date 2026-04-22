import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (

        <nav className='container navbar'>

            <div className='logo'>
                <a href='#home'> Manish Verma  </a>
            </div>

            <ul className={open ? "nav-links active" : "nav-links"}>
                <li> <a href='#home'> Home </a> </li>
                <li> <a href='#about'> About </a> </li>
                <li> <a href='#skills'> Skills </a>  </li>
                <li> <a href='#projects'> Projects </a> </li>
                <li> <a href='#contact'> Contact </a> </li>
            </ul>

            <div className='hamburger' onClick={() => setOpen(prev => !prev)}>
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z" /></svg>
            </div>


        </nav>
    )
}

export default Navbar

