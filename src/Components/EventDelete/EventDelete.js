import React ,{useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "../ResisterList/ResisterList.css"

const EventDelete = () => {
    const [events , setEvents] = useState([])
    useEffect(()=>{
        fetch("https://protected-dawn-00887.herokuapp.com/events")
        .then(res => res.json())
        .then(data =>{
            setEvents(data)
        })
    },[])

    const deleteEvent = (id)=>{
            fetch(`https://protected-dawn-00887.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
    }
    return (
        <table>
        <tr>
            <th>Event Name</th>
            <th> Date</th>
            <th>Action</th>
        </tr>
        {
            events?.map(event => <tr>
                <td>{event.name}</td>
                <td>{event.eventDate}</td>
                <td><FontAwesomeIcon icon={faTrash} color="red" style={{ cursor: "pointer" }} onClick={()=>deleteEvent(`${event._id}`)} /> 
                </td>
            </tr>)
        }
    </table>
    );
};

export default EventDelete;