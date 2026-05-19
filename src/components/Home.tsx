import homeCSS from "../styles/Home.module.css";
import { ReactTyped } from "react-typed";
import heroImg from "../assets/images/image_2025-03-10_02-20-49-removebg-preview.png";
import Nav from "./Nav";

const Home = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = encodeURI("/files/CV - Borys Burdeinyi - Full stack.pdf");
    link.download = "CV - Borys Burdeinyi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className={homeCSS.headerWrapper}>
      <Nav />
      <div className={homeCSS.headerContainer}>
        <div className={homeCSS.headerContent}>
          <h5>Hello I'm </h5>
          <h1>Borys</h1>
          <p>
            A Passionate&nbsp;
            <span>
              <ReactTyped
                strings={["Frontend Dev", "Backend Dev", "Full-Stack Dev"]}
                typeSpeed={20}
                loop={true}
                backSpeed={20}
              />
            </span>
          </p>
          <p>
            I specialize in developing modern, scalable, and high-performance
            web applications, covering both frontend and backend development. My
            expertise includes React (Vite.js, Next.js), TypeScript, and
            advanced styling techniques with Tailwind CSS, Sass, and Bootstrap.
            On the backend, I work with Node.js, Nest.js, and databases like
            PostgreSQL and MongoDB.
          </p>

          <div className={homeCSS.social}>
            <a
              href="https://www.upwork.com/freelancers/~01d0ef1a2dd7b4a7b3?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-upwork" />
            </a>
            <a
              href="https://github.com/BurdeyniyB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/boris-burdeyniy-a74b07205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://t.me/Raikern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram" />
            </a>
          </div>

          <button onClick={downloadPDF}>
            CV <i className="ri-file-list-3-line"></i>
          </button>
        </div>
        <div className={homeCSS.headerImage}>
          <img src={heroImg} alt="hero" />
          <div className={homeCSS.borderAnimation}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
