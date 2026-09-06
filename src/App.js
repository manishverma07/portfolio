import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About'
import Footer from './Components/Footer'
import { useState } from "react";



const App = () => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        
        <>
            <Navbar />
            <section id='home'><HeroSection /></section>
            <section id='about'><About /></section>
            <section id='skills'>< Skills /> </section>
            <section id='projects'><  Projects /></section>
            <section id='contact'> <Contact /></section>

            <Footer/>


        </>
    )
}

export default App
