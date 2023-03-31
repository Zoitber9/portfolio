import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Header} from "./header/Header";
import {MyWorks} from "./myWorks/MyWorks";
import {JobOptions} from "./JobOptions/JobOptions";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";


export function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <JobOptions/>
            <Contacts/>
            <Footer/>
        </div>
    );
}


