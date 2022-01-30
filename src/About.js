import React from 'react'
import about from './Images/aboutimg.png'
import './About.css'


export default function About() {
    return (
        <div id="main-about">
            <h2 className="about-content-heading">ABOUT <span style={{color:"red"}}>US</span></h2>
            <div className="about-content">
                <img className="about-content-image" src={about}/>
                <div className="about-content-text">
                    <p>
                        Developer Student Clubs are university based Community groups 
                        for Student Interested in Google Developer Technologies. 
                    </p>
                </div>                    
            </div>
            <button className="text-button">Know More</button>
        </div>
    )
}
