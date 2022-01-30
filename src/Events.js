import React from 'react'
import Calendar from './Images/Calendar.png'
import EjectIcon from '@material-ui/icons/Eject';
import IconButton from '@material-ui/core/IconButton'
import './Events.css'

export default function Events() {
    return (
        <div id="main-event">
            <h2 className="event-content-heading">EVENTS <span style={{color:"green"}}>WE</span> ORGANIZE</h2>
            <div className="event-content">
                <div className="event-content-text">
                    <p>
                        Sometimes College Life just gets too boring and you need 
                        some action to cling onto it. We organize a great deal of 
                        Events to <span style={{color:"red"}}>rejuvenate</span> your College Life. 
                    </p>
                </div>
                    <img className="event-content-image" src={Calendar}/>
            </div>
            <button className="text-button-event">Have a Look</button>
            {/* <IconButton id="home-arrow">
                <EjectIcon style={{fontSize:60}} />
                <path d=""/>
            </IconButton> */}
        </div>
    )
}
