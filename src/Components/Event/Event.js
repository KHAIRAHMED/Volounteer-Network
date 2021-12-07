import React from 'react';
import { Link } from "react-router-dom";
import "./Event.css"

const Event = ({ event }) => {

    return (
        <div className="card">
            <img style={{ height: '250px' }} src={event.image} alt="event cart" />
            <Link to={"/event/" + `${event._id}`} style={{textDecoration:"none"}} 
            className="eventButton">{event.name}</Link>

            {/* <button onClick={()=>deleteEvent(`${event._id}`)} className="eventButton">Delete</button> */}
        </div>
    );
};

export default Event;