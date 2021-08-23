import React from 'react';
import About from './About'
import Work from './Work';
import '../styles/Main.css'

export default function Main() {

    return (
        <main className="wrapper">
            <About />
            <Work />
        </main>
    );
};
