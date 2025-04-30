import footerCSS from "../styles/Footer.module.css"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className={footerCSS.footer}>
            <div className={footerCSS.footerLinks}>
                <a href="#home" onClick={scrollToTop}>Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <p>@copyright 2025 all rights reserved</p>
        </section>
    )
}

export default Footer