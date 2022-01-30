import React from 'react'
import team from './Images/teamimg.png'
import './Team.css'

export default function Team() {
    return (
        <div id="main-team">
            <h2 className="team-content-heading"><span style={{color:"blue"}}>PEOPLE</span> IN OUR TEAM</h2>
            <div className="team-content">
                <div className="team-content-text">
                    <p>
                    A Team is an efficient as the members of 
                    it's team are. This is a rundown of how 
                    explicable each <span style={{color:"red"}}>individual</span> is and how they
                     supplement the team. 
                    </p>
                </div>
                    <img className="team-content-image" src={team}/>
            </div>
            <button className="text-button-team">Know More</button>
        </div>
    )
}
