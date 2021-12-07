import React ,{useState , useContext , useEffect} from 'react';
import axios from 'axios';
import { userContext } from './../../App';

const Authenticatedata = () => {
    const [authenticData , setAuthenticData] = useState([])
    const [loggedInUser] = useContext(userContext)
    const {email} = loggedInUser
    useEffect(()=>{
        axios.get("https://protected-dawn-00887.herokuapp.com/authenticateData?email="+email ,{
            headers : {
                "Authorization" : `Bearer ${sessionStorage.getItem("token")}` 
            }
        })
        .then(res => {
            setAuthenticData(res.data)
        })
        .catch(err => console.log(err))
    },[email])
    return (
        <div>
            <h1>authentic data : {authenticData.length}</h1>
        </div>
    );
};

export default Authenticatedata;