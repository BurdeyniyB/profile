import React from "react";
import skillCSS from "../styles/SkillSection.module.css";

type SkillProps = {
    name: string;
    level: number;
}
const Skill: React.FC<SkillProps> = ({ name, level }) => {
    return (
        <div className={skillCSS.Skill}>
            <h4>{name}</h4>
            <div className={skillCSS.SkillBar} style={{ "--skill-width": `${level}%` } as React.CSSProperties}></div>
        </div>
    );
}

export default Skill;