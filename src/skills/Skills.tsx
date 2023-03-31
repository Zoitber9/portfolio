import React from 'react';
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'} description={'detailed description of the skill'}/>
                    <Skill title={'TypeScript'} description={'detailed description of the skill '}/>
                    <Skill title={'Css'} description={'detailed description of the skill '}/>
                </div>
            </div>
        </div>
    );
};
