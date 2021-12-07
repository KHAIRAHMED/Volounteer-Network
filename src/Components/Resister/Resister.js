import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Resister.css'
const Resister = () => {
    const [resister, setResister] = useState({})
    const submitResisterFrom = (e) => {
        // if(navigate.push("/resister")){
            axios.post('https://protected-dawn-00887.herokuapp.com/resister', resister)
            .then((response) => {
            })
            .catch((error) => {
            });
        // }

        e.preventDefault()
    }

    const handleChange = (e) => {
        const newObj = {...resister}
        newObj[e.target.name] = e.target.value;
        setResister(newObj)
    }
    return (
        <div className="resisterFromSection">
            <form className="resisterFrom" onSubmit={submitResisterFrom}>
                <h4>Resister as a Volundier</h4>
                <input type="text" placeholder="Full Name" onChange={handleChange} required name="fullName" /> <br />
                <input type="Email" placeholder="Email" onChange={handleChange} required name="email" /> <br />
                <input type="date" name="resisterDate" onChange={handleChange} id="" /><br />
                <input type="text" placeholder="Description" onChange={handleChange} required name="description" /><br />
                <input type="text" placeholder="Organize books at the library" onChange={handleChange} required name="Organize" /><br />
                <input type="submit" value="Resister" />
            </form>

            <Link to="/login">Already a user</Link>
        </div>
    );
};

export default Resister;