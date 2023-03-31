import React from 'react';
import s from './Work/Work.module.css'
import c from '../common/styles/Container.module.css'
import {Work} from "./Work/Work";


export const MyWorks = () => {
    return (
        <div id={'project'} className={s.MyWorksBlock}>
            <div className={`${c.container} ${s.MyWorksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title={'Todolist'} image={'img'}
                          description={'description'}/>
                    <Work title={'Todolist'} image={'img'}
                          description={'description'}/>
                </div>
            </div>
        </div>
    );
};

