import React  from 'react';
import { Link , Outlet } from "react-router-dom";
import "./Admin.css";
const Admin = () => {
   
    return (
        <div className="admin">
            <div className="sideMenu">
                <Link to="addEvent" style={{ textDecoration: "none" }}>Add Event</Link> <br />
                {/* <button onClick={protect}>AddEvent</button> */}
                <Link to="resisterList" style={{ textDecoration: "none" }}>Volunter Resister List</Link> <br />
                <Link to="eventDelete" style={{ textDecoration: "none" }}>Delete Event</Link> <br />
                <Link to="authenticData" style={{ textDecoration: "none" }}>Authenticatedata</Link>
            </div>
            <div className="sideMenuContent">
                {/* 
                <Routes>
                    <Route path="addEvent" element={<AddEvent />} />
                    <Route path="resisterList" element={<ResisterList />} />
                </Routes> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;