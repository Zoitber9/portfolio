import React from 'react';
import s from './JobOptions.module.css';
import c from '../common/styles/Container.module.css'
import styleBtn from  "../common/styles/Button.module.css";


export const JobOptions = () => {
    return (
        <div className={s.jobOptions}>
            <div className={`${s.jobOptionsBlock} ${c.container}`}>
                <h4 className={s.jobOptionText}>Рассматриваю варианты удаленной работы</h4>
                <button className={styleBtn.btn}>Нанять меня
                </button>
            </div>
        </div>
    );
};



