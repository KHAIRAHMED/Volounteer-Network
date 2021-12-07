import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./ResisterList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ResisterList = () => {
    const [resisterList, setResisterList] = useState([])

    useEffect(() => {
        axios.get("https://protected-dawn-00887.herokuapp.com/resisterData")
            .then(res => {
                setResisterList(res.data)
            })
            .catch(err => {
            })
    }, [])
    const deleteResister = (id)=>{
    // useEffect(()=>{
    axios.delete(`https://protected-dawn-00887.herokuapp.com/delete/${id}`)
    .then(res =>{
        if(res.data){
            // res.redirect("/admin")
        }

    })
    .catch(err =>{

    })
    // },[])
    }

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Register Date</th>
                <th>Volounteer LIst</th>
                <th>Action</th>
            </tr>
            {
                resisterList.map(list => <tr key={list._id}>
                    <td>{list.fullName}</td>
                    <td>{list.email}</td>
                    <td>{list.resisterDate}</td>
                    <td>{list.description}</td>
                    <td><FontAwesomeIcon icon={faTrash} color="red" style={{ cursor: "pointer" }} onClick={()=>deleteResister(`${list._id}`)} /> 
                    </td>
                </tr>)
            }
        </table>

    );
};

export default ResisterList;