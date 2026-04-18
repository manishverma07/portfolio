import React from 'react'


const Navbar = () => {
    return (

        <nav className='container navbar'>

            <div className='logo'>
                <a href='#home'> Manish Verma  </a>
            </div>

            <ul>
                <li> <a href='#home'> Home </a> </li>
                <li> <a href='#about'> About </a> </li>
                <li> <a href='#skills'> Skills </a>  </li>
                <li> <a href='#projects'> Projects </a> </li>
                <li> <a href='#contact'> Contact </a> </li>
            </ul>

        </nav>
    )
}

export default Navbar

