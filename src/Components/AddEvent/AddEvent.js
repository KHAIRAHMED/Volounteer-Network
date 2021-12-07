
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddEvent.css"
import { userContext } from './../../App';

const AddEvent = () => {
    const [imageURL, setImageURL] = useState(null)
    const [loggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.eventName,
            image: imageURL,
            description : data.description,
            eventDate : data.eventDate,
            email : loggedInUser?.email
        }
        // useEffect(()=>{
            fetch("https://protected-dawn-00887.herokuapp.com/addEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        // },[])
        
    }

    const handleUploadImage = event => {
        const imageData = new FormData()
        imageData.set("key", "ab87cf536eeca3b2df277ea89f05dc17")
        imageData.append("image", event.target.files[0])

        // image post in imgbb    
        // useEffect(()=>{
            axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

        // },[])   
       
    }
    return (
        // <div >
            <form onSubmit={handleSubmit(onSubmit)} className="eventFrom">
                <div>
                    <p>Event Name</p>
                    <input type="text" placeholder="Event Name" required {...register("eventName")} />
                </div>
                <div>
                    <p><label for="eventDate">Event Date:</label></p>
                    <input type="date" id="eventDate"  required {...register("eventDate")} />
                </div>
                <div className="eventFromDescription">
                    <p>Description</p>
                    <textarea name="description" id="" cols="30" rows="5" required {...register("description")}>
                        Description
                    </textarea>
                    {/* <input placeholder="Description" type="text"  required {...register("description")}/> */}
                </div>
                <div>
                    <p>File</p>
                    <input type="file" onChange={handleUploadImage} />
                </div>
                <div id="eventSubmitButton">
                    <input type="submit" />
                   
                </div>
            </form>
        // </div>
    );
};

export default AddEvent;