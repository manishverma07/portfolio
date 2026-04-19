import React from 'react'
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiGmail, } from 'react-icons/si';


const Footer = () => {
    return (

        <footer className='footer'>

            <div className='socialIcons'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manishverma201197@gmail.com"
                    target="_blank"  rel="noopener noreferrer"> <SiGmail /> </a>
                <a href='https://www.linkedin.com/in/manishverma007/' target='_blank' rel="noreferrer"> <FaLinkedin /> </a>
                <a href="https://www.instagram.com/__maniiish.___/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100074037405713" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://www.youtube.com/@Jerryy0007" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>

            <div id='fPara'>
                <p> Copyright © 2026 Web Development / Web Design. All Rights Reserved.</p>
            </div>



        </footer>

    )
}

export default Footer
