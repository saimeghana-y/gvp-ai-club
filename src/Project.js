import React from 'react'
import about from './Images/projectimg.png'
import './Project.css'


export default function Project() {
    return (
        <div id="main-project">
            <h2 className="project-content-heading"><span style={{color:"yellow"}}>PROJECTS</span> BY US</h2>
            <div className="project-content">
                <img className="project-content-image" src={about}/>
                <div className="project-content-text">
                    <p>
                    The Projects show what a team stands for and what mindset 
                    they keep towards <span style={{color:"green"}}>transforming</span> this world into a better 
                    place. 
                    </p>
                </div>                    
            </div>
            <button className="text-button-project">Explore</button>
        </div>
    )
}
