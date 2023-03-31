import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>

            <div className={s.content}>
                <h2>Andrey Abramchik</h2>
                <div className={s.contacts}>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                </div>
                <p>@ 2023 Все права защищены</p>
            </div>
        </div>
    );
};
