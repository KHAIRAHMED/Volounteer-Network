import React, { useEffect, useState,useContext } from 'react';
import Event from '../Event/Event';
import "./Home.css"


const Home = () => {
    const [events , setEvents] = useState([])
    
    useEffect(()=>{
        fetch("https://protected-dawn-00887.herokuapp.com/events")
        .then(res => res.json())
        .then(data =>{
            setEvents(data)
        })
    },[])
   
    return (
        <div>
        <div className = "searchInputSection">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <form>
                <input type="text" placeholder="Search" id="searchInput" />
                <input type="submit" id="submitInput" />
            </form>
        </div>
          <div className="eventList">
          {
                 events?.map(event => <Event event= {event} key={event._id}></Event>)
             }
          </div>
        </div>
    );
};

export default Home;