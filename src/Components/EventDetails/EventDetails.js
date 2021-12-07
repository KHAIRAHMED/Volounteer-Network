import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import "./EventDetails.css"
const EventDetails = () => {
    let { eventDetails } = useParams()
    const [details , setDtails] = useState([])
    useEffect(() => {
        axios.get(`https://protected-dawn-00887.herokuapp.com/event/${eventDetails}`)
            .then((res) => {
                setDtails(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

        // fetch()
    }, [eventDetails])
    return (
        <div className="details">
            <img style={{ height: '250px' }} src={details.image} alt="event cart" />
            <h3>Evant Name : {details.name}</h3>
            <h4>Date : {details.eventDate}</h4>
            <p>Description : {details.description}</p>
        </div>
    );
};

export default EventDetails;