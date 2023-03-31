import React from 'react';
import s from './Header.module.css'
import c from '../common/styles/Container.module.css'
import Nav from "../nav/Nav";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
            </div>

        </div>
    );
};
