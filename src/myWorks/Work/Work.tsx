import React from 'react';
import s from "./Work.module.css"
import styleBtn from "../../common/styles/Button.module.css";

type WorkPropsType = {
    title: string
    image: string
    description: string
}

export const Work: React.FC<WorkPropsType> = ({title, image, description}) => {
    return (
        <div className={s.work}>
            <div className={s.workPicture}>
                <button className={styleBtn.btn}>Button</button>
            </div>

            <h3>{title}</h3>
            <span className={s.workDescription}>{description}</span>
        </div>
    );
};

