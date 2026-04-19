
import myImage from "../Assets/Images/IMG_5666-12-removebg-preview.jpg"


const HeroSection = () => {
    return (
        <header className="hero-container fade-down">

            <div className='hero-content'>
                <h3>Hello! I'm</h3>
                <h1 className="myName">Manish Verma </h1>
                <h2 id="hero-career">Frontend Developer</h2>
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
