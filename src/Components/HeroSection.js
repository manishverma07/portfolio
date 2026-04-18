
import myImage from "../Assets/Images/IMG_5666-12-removebg-preview.jpg"


const HeroSection = () => {
    return (
        <header className="hero-container fade-down">

            <div className='hero-content'>
                <h3>Hello! I'm</h3>
                <h1 className="myName">Manish Verma </h1>
                <h2 id="hero-career">Frontend Developer | UI Developer</h2>
                <p>
                    <p>
                        Frontend Developer | UI Developer passionate about building clean, responsive, and interactive web applications. I work with HTML, CSS, JavaScript, and React, and I enjoy turning UI designs into real, functional experiences. I'm focused on growing my skills and contributing to impactful real-world projects.
                    </p>


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
