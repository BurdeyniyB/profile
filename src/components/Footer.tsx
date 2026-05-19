import footerCSS from "../styles/Footer.module.css";

const Footer = () => (
    <footer className={footerCSS.footer}>
        <div className={footerCSS.inner}>
            <div className={footerCSS.top}>
                <div className={footerCSS.brand}>
                    <span className={footerCSS.name}>Borys Burdeinyi</span>
                    <span className={footerCSS.role}>Full-Stack Developer</span>
                </div>
                <nav className={footerCSS.nav}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>

            <div className={footerCSS.divider} />

            <div className={footerCSS.bottom}>
                <span className={footerCSS.copy}>© 2025 Borys Burdeinyi. All rights reserved.</span>
                <div className={footerCSS.socials}>
                    <a href="https://t.me/Raikern" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <i className="ri-telegram-line" />
                    </a>
                    <a href="https://wa.me/380973431619" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <i className="ri-whatsapp-line" />
                    </a>
                    <a href="mailto:borisburdeyniy@gmail.com" aria-label="Email">
                        <i className="ri-mail-line" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
