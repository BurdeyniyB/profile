import { useState } from "react";
import Skill from "./Skill";
import skillCSS from "../styles/SkillSection.module.css";
import aboutCSS from "../styles/About.module.css";
import kpi from "../assets/images/kpi.png";

interface Skill {
    name: string;
    level: number;
  }
  
  interface SkillProp {
    title: string;
    skills: Skill[];
  }
  
  const SkillGroup = ({ title, skills }: SkillProp) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={skillCSS.skillGroup}>
        <h3 onClick={() => setIsOpen(!isOpen)} className={skillCSS.toggleHeader}>
          {title} {isOpen ? "▲" : "▼"}
        </h3>
        <ul className={`${skillCSS.skillList} ${isOpen ? skillCSS.open : ""}`}>
          {skills.map((skill, index) => (
            <li key={index}>
              <Skill name={skill.name} level={skill.level} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

const SkillSection = () => {
  return (
    <section id="skills" className={skillCSS.skillsContainer}>
      <h2 className="SectionTitle">Skills</h2>

      <div className={skillCSS.skills}>
        <SkillGroup
          title="Frontend Technologies"
          skills={[
            { name: "React", level: 85 },
            { name: "Vite.js", level: 75 },
            { name: "Next.js", level: 80 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Bootstrap", level: 70 },
            { name: "Sass", level: 70 },
          ]}
        />
        <SkillGroup
          title="Backend Technologies"
          skills={[
            { name: "Node.js", level: 80 },
            { name: "Nest.js", level: 75 },
            { name: "Express.js", level: 70 },
          ]}
        />
        <SkillGroup
          title="Databases"
          skills={[
            { name: "PostgreSQL", level: 75 },
            { name: "MongoDB", level: 80 },
          ]}
        />

        <SkillGroup
          title="Tools & Development"
          skills={[
            { name: "Docker", level: 70 },
            { name: "GitHub", level: 85 },
            { name: "GitLab", level: 80 },
            { name: "Jira", level: 75 },
          ]}
        />
        <SkillGroup
          title="State Management"
          skills={[
            { name: "Context API", level: 80 },
            { name: "Redux", level: 70 },
          ]}
        />
        <SkillGroup
          title="API Integration"
          skills={[
            { name: "REST API", level: 85 },
            { name: "Ajax", level: 80 },
            { name: "Telegram Bots", level: 70 },
          ]}
        />
        <SkillGroup
          title="UI/UX & SEO"
          skills={[
            { name: "Figma", level: 70 },
            { name: "jQuery", level: 75 },
            { name: "SEO Optimization", level: 80 },
          ]}
        />
        
        <SkillGroup
          title="Payment Systems"
          skills={[
            { name: "Stripe", level: 70 },
            { name: "PayPal", level: 65 },
          ]}
        />
        <SkillGroup
          title="Languages"
          skills={[
            { name: "Ukrainian", level: 100 },
            { name: "English", level: 90 },
          ]}
        />
      </div>

      <div className={skillCSS.education}>
        <h3>Education</h3>
        <div className={aboutCSS.aboutCard}>
          <img src={kpi} alt="Education" />
          <div className={aboutCSS.aboutCardContent}>
            <h3>Bachelor of Computer Science</h3>
            <p>National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
