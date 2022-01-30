import React from 'react'
import './Nav.css'
import logo from './Images/footerLogo.png'


export default function Nav() {
    return (
    <div className="nav-bar">
        <img className="nav-bar-logo" src={logo}></img>
        <ul className="nav-bar-list">
            <a href="#" className="nav-bar-home" style={{borderBottom:"0.4vw solid #4285F4"}}>HOME</a>
            <a href="#main-about" classname="nav-bar-about" style={{borderBottom:"0.4vw solid #EA4335"}}>ABOUT</a>
            <a href="#main-event" className="nav-bar-event" style={{borderBottom:"0.4vw solid #FBBC04"}}>EVENT</a>
            <a href="#main-project" className="nav-bar-projects" style={{borderBottom:"0.4vw solid #34A853"}}>PROJECTS</a>
            <a href="#main-team" className="nav-bar-team" style={{borderBottom:"0.4vw solid #5F6368"}}>TEAM</a>
        </ul>
    </div>
    )
}
