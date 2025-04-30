import aboutCSS from "../styles/About.module.css"
import CustomCarousel from "./Carousel"
import frontend from "../assets/images/Frontend.png";
import backend from "../assets/images/Backend.png";
import fullStack from "../assets/images/FullStack.png";

const About = () => {
    return(
        <section id="about" className={aboutCSS.about_wrapper}>
        <h2 className="SectionTitle">About</h2>
        <div className={aboutCSS.about}>
            <div className={aboutCSS.aboutImage}>
                <CustomCarousel />
            </div>
            <div className={aboutCSS.aboutContent}>
                <div className={aboutCSS.aboutCard}>
                    <img src={frontend} alt="Frontend" />
                    <div className={aboutCSS.aboutCardContent}>
                        <h3>Frontend Dev</h3>
                        <p>Create the visual and interactive parts of a website or app that users see and engage with.</p>
                    </div>
                </div>
                <div className={aboutCSS.aboutCard}>
                    <img src={backend} alt="Backend" />
                    <div className={aboutCSS.aboutCardContent}>
                        <h3>Backend Dev</h3>
                        <p>Build and maintain the server, database, and logic that power the application behind the scenes.</p>
                    </div>
                </div>
                <div className={aboutCSS.aboutCard}>
                    <img src={fullStack} alt="Full-Stack" />
                    <div className={aboutCSS.aboutCardContent}>
                        <h3>Full-Stack Dev</h3>
                        <p>Handle both frontend and backend, integrating user interfaces with server-side functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About