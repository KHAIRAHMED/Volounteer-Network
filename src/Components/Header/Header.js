import React, { useContext } from 'react';
import { Link} from 'react-router-dom'
import logo from "../../images/logo.png"
import "./Header.css"
import { userContext } from '../../App';
import { auth } from '../Login/firebase.config';
import { signOut } from '@firebase/auth';

const Header = () => {
  const [userLoggedIn] = useContext(userContext)
  // const {email} = userLoggedIn
  const signingOut = ()=>{
    signOut(auth)
  

  }
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="logo this website" width="150px" />
      </div>
      <div className="link">
        <li><Link style={{ textDecoration: "none" }} to="/">Home</Link></li>
        <li><Link style={{ textDecoration: "none" }} to="/">Donation</Link></li>
        <li><Link style={{ textDecoration: "none" }} to="/">Events</Link></li>
        <li><Link style={{ textDecoration: "none" }} to="/">Blogs</Link></li>
        <li>
          <Link to="/admin">
            <button type="button" className="adminButton">Admin</button>
          </Link>
        </li>
        <li>
          <Link to="/resister">
            <button type="button" className="resisterButton">Resister</button>
          </Link>
        </li>
        <li>
          <Link to="login">
            <button type="button" onClick={signingOut} className="adminButton">{userLoggedIn?.email?"LogOut":"Login"}</button>
          </Link>
        </li>
        {/* <Link to="/addEvent">Add Event</Link>
        <Link to="/dashboard">Dashboard</Link> */}
      </div>

    </nav>
  );
};

export default Header;