import React from 'react'
import './Home.css'
import home from './Images/homepage.jpg'



export default function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h4>Bring a <span style={{color: "blue"}}>Change</span></h4>
                <p> 
                    We at <span style={{color:"red"}}>DSC-GVP </span>are a  passionate group of people who work towards 
                    bringing a change in the ecosystem of development around the campus.
                    We want to create a healthy environment for the budding developers 
                    to create solutions for real life problems and promote the "developers"
                    culture.
                </p>
            </div>
            <img className="home-pic" src={home}></img>
        </div>
    )
}

