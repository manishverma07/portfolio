
import myImage from "../Assets/Images/IMG_5666-12-removebg-preview.jpg"


const HeroSection = () => {
    return (
        <header className="hero-container fade-down">

            <div className='hero-content'>
                <h3>Hello! I'm</h3>
                <h1 className="myName">Manish Verma </h1>
                <h2 id="hero-career">Frontend Developer</h2>
                <p>
                    Frontend Developer focused on building clean and responsive web applications. I work with HTML, CSS, JavaScript, and React, and I am currently improving my skills in turning UI designs into functional interfaces. I enjoy learning by building real projects and aim to grow as a developer through hands-on experience.
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
