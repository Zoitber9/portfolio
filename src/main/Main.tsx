import React from 'react';
import c from '../common/styles/Container.module.css'
import s from './Main.module.css'

export const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={` ${s.mainContainer} ${c.container}`}>
                <div className={s.mainText}>
                    <span>Main Portfolio</span>
                    <h1>My name is Andrey</h1>
                    <p>I`m frontend developer</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>

        </div>
    );
};
