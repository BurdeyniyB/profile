import Skill from "./Skill"
import skillCSS from "../styles/SkillSection.module.css"
import aboutCSS from "../styles/About.module.css"
import kpi from "../assets/images/kpi.png";

const SkillSection = () => {
    return(
        <section id="skills" className={skillCSS.skillsContainer}>
        <h2 className="SectionTitle">Skills</h2>
        <div className={skillCSS.skills}>
            <div className={skillCSS.general}>
                <h3>Frontend Technologies</h3>
                <Skill name="React" level={85} />
                <Skill name="Vite.js" level={75} />
                <Skill name="Next.js" level={80} />
                <Skill name="TypeScript" level={90} />
                <Skill name="Tailwind CSS" level={85} />
                <Skill name="Bootstrap" level={70} />
                <Skill name="Sass" level={70} />
            </div>
            <div className={skillCSS.additional}>
                <h3>Backend Technologies</h3>
                <Skill name="Node.js" level={80} />
                <Skill name="Nest.js" level={75} />
                <Skill name="Express.js" level={70} />
                <h3>Databases</h3>
                <Skill name="PostgreSQL" level={75} />
                <Skill name="MongoDB" level={80} />
            </div>
        </div>
        <div className={skillCSS.skills}>
            <div className={skillCSS.general}>
                <h3>Tools & Development</h3>
                <Skill name="Docker" level={70} />
                <Skill name="GitHub" level={85} />
                <Skill name="GitLab" level={80} />
                <Skill name="Jira" level={75} />
                <h3>State Management</h3>
                <Skill name="Context API" level={80} />
                <Skill name="Redux" level={70} />
            </div>
            <div className={skillCSS.additional}>
                <h3>API Integration</h3>
                <Skill name="REST API" level={85} />
                <Skill name="Ajax" level={80} />
                <Skill name="Telegram Bots" level={70} />
                <h3>UI/UX & SEO</h3>
                <Skill name="Figma" level={70} />
                <Skill name="jQuery" level={75} />
                <Skill name="SEO Optimization" level={80} />
            </div>
        </div>
        <div className={skillCSS.skills}>
            <div className={skillCSS.general}>
                <h3>Payment Systems</h3>
                <Skill name="Stripe" level={70} />
                <Skill name="PayPal" level={65} />
            </div>
            <div className={skillCSS.additional}>
                <h3>Languages</h3>
                <Skill name="Ukrainian" level={100} />
                <Skill name="English" level={90} />
            </div>
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
    )
}

export default SkillSection