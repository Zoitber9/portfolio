import React from 'react';
import s from './../Skills.module.css'
type SkillPropsType = {
    title: string
    description: string
    icon?: string
}
export const Skill: React.FC<SkillPropsType> = ({title, description, icon}) => {
    return (
        <div className={s.skill}>
            <img  className={s.skillImg} src={icon} alt=""/>
            <h3 className={s.skillTitle}>{title}</h3>
            <span className={s.skillDesc}>
              {description}
            </span>
        </div>
    );
};
