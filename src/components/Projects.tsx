import Project from "./Project"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import projectsCSS from "../styles/Projects.module.css"
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
    {
        folder: "GPT-trace/",
        title: "GPT Trace",
        description: "A full-featured GPT-Trace is an AI-powered crypto analytics platform built with Next.js, NestJS, TypeScript, and MongoDB that delivers real-time market insights and GPT-driven forecasts.",
        repo: "https://github.com/BurdeyniyB/GPT-Trace",
        images: ["img1", "img2", "img3", "img4", "img5"],
    },
    {
        folder: "music/",
        title: "Music Platform",
        description: "A full-featured music streaming platform built with Nest.js, Next.js, TypeScript, and MongoDB.",
        repo: "https://github.com/BurdeyniyB/music-platform-client",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "store/",
        title: "Online Store",
        description: "An e-commerce platform built with Node.js, React, PostgreSQL, and Express.",
        repo: "https://github.com/BurdeyniyB/online-store",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "crisp/",
        title: "Crisp",
        description: "Crisp is a modern online fashion store offering the latest trends and exclusive deals.",
        repo: "https://github.com/BurdeyniyB/Crisp",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "findtrend/",
        title: "Findtrend",
        description: "Findtrend helps you gather all your favorite websites in one place and stay updated on trends.",
        repo: "https://github.com/BurdeyniyB/Findtrend",
        images: ["img1", "img2", "img3", "img4", "img5"],
    },
    {
        folder: "quiz/",
        title: "Quiz",
        description: "Develop a quiz with different types of questions.",
        repo: "https://github.com/BurdeyniyB/Quiz",
        images: ["img1", "img2", "img3", "img4", "img5"],
    },
];

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isSwiperReady, setIsSwiperReady] = useState(false);

    useEffect(() => {
        setIsSwiperReady(true);
    }, []);

    return (
        <section id="projects" className={projectsCSS.portfolioContainer}>
            <h2 className="SectionTitle">Projects</h2>

            <div className={projectsCSS.projects}>
                {isSwiperReady && (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (swiper.params.navigation) {
                                // @ts-ignore
                                swiper.params.navigation.prevEl = prevRef.current;
                                // @ts-ignore
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={projectsCSS.project}
                                    onMouseEnter={() => setHoveredProject(index)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <Project folder={project.folder} imagesProp={project.images} isHovered={hoveredProject === index} />
                                    <div className={projectsCSS.projectText}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className={projectsCSS.gitLink}>
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                {project.repo}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div className={projectsCSS.navButtons}>
                    <button ref={prevRef} className={projectsCSS.prevButton}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button ref={nextRef} className={projectsCSS.nextButton}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects