import React from 'react';
import '../styles/Work.css'

export default function Work() {

    return (
        <section id="work" className="section">

            <h2>Work</h2>

            <div className="flex-container">

                <a href="https://scottydphillips.github.io/sa1l/" className="flex-item sa1l" target="_blank">

                    <div>

                        <h3>SA1L</h3>

                        <span>HTML/CSS/JavaScript</span>

                    </div>

                </a>

                <a href="https://mcall0147.github.io/weather-dashboard/" className="flex-item weather" target="_blank">
                    
                    <div>

                        <h3>Weather Dashboard</h3>
    
                        <span>HTML/CSS/JavaScript</span>

                    </div>
                    
                </a>
        
                <a href="https://mcall0147.github.io/coding-quiz/" className="flex-item quiz" target="_blank">
                    
                    <div>

                        <h3>Coding Quiz</h3>
        
                        <span>HTML/CSS/JavaScript</span>

                    </div>
                    
                </a>
        
                <a href="https://github.com/mcall0147/e-commerce-back-end" className="flex-item cms" target="_blank">
                    
                    <div>

                        <h3>Employee CMS</h3>
        
                        <span>JavaScript/Node/MySQL</span>

                    </div>
                    
                </a>
        
                <a href="https://glacial-sierra-09048.herokuapp.com/" className="flex-item note-taker" target="_blank">
                    
                    <div>

                        <h3>Note Taker</h3>
        
                        <span>JavaScript/Node/Express</span>

                    </div>
                    
                </a>

            </div>

        </section>
    );
};
