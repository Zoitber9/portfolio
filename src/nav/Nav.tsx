import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.link} href="#main">Главная</a>
            <a className={s.link} href="#skills">Скилы</a>
            <a className={s.link} href="#project">Проекты</a>
            <a className={s.link} href="#contacts">Контакты</a>
        </div>
    );
};

export default Nav;