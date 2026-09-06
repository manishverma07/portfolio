import React, { useEffect, useState } from "react";

import myImage from "../Assets/Images/IMG_5666-12-removebg-preview.jpg"


const HeroSection = () => {

    const texts = [
        "Frontend Developer",
        "React Developer",
        "I code professional websites",
        "I develop React applications"
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timer = setTimeout(() => {

            // TYPING
            if (!isDeleting) {
                setDisplayText(
                    currentText.substring(0, displayText.length + 1)
                );

                // When complete, wait before deleting
                if (displayText === currentText) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500);
                }
            }

            // BACKSPACE
            else {
                setDisplayText(
                    currentText.substring(0, displayText.length - 1)
                );

                // When completely deleted, move to next text
                if (displayText === "") {
                    setIsDeleting(false);

                    setTextIndex(
                        (prevIndex) => (prevIndex + 1) % texts.length
                    );
                }
            }

        }, isDeleting ? 60 : 100);

        return () => clearTimeout(timer);

    }, [displayText, isDeleting, textIndex]);



    return (
        <header className="hero-container fade-down">

            <div className='hero-content'>
                <h3>Hello! I'm</h3>
                <h1 className="myName">Manish Verma </h1>
                
                <h2 id="hero-career">
                    {displayText}
                    <span className="cursor">|</span>
                </h2>

                <p>
                    I am a passionate and dedicated frontend developer specializing in creating clean, responsive and user-friendly web applications. I enjoy turning ideas into functional interfaces using clean and efficient code. I am always eager to learn new technologies and improve my skills to deliver exceptional digital experiences.
                </p>

                <a href="#contact">
                    <button className="btn"> Contact me </button>
                </a>

            </div>

            <img src={myImage} alt='Manish Verma' className="hero-img" />



        </header>
    )
}

export default HeroSection
