import React, { useContext, useEffect, useState } from 'react';
// import *as firebase  from 'firebase/app'
import './Login.css'
import googleLogo from "../../images/googleLogo.png"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
// import auth from './firebase.config';
import { auth } from "./firebase.config"
import { userContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({})
    const [loggedInUser, setLoggedInUser] = useState({})
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    let location = useLocation();
    let navigate = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {
        const authChangess = onAuthStateChanged(auth, (currentUser) => {
            setUserLoggedIn(currentUser)
            setLoggedInUser(currentUser)
        })
        return authChangess;
    })

    const handleOnBlur = (e) => {
        const validUser = { ...user }
        let isValid = false;
        if (e.target.name === "name") {
            validUser.name = e.target.value
            setUser(validUser)
        };

        if (e.target.name === "email") {
            isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
        }
        else if (e.target.name === "password") {
            isValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value)
        };


        if (isValid) {
            validUser[e.target.name] = e.target.value
            setUser(validUser)
        };


    }
    const handleOnSubmit = (e) => {
        // sign in email and password 
        const { email, password, name } = user
        if (!newUser && email && password && name) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateName(name)
                    const validUser = { ...user }
                    validUser.loggedInUser = true
                    setUser(validUser)
                    idToken()
                    navigate(from)
                })
                .catch((error) => {
                    const validUser = { ...user }
                    validUser.error = error.message
                    setUser(validUser)
                })
        }
        else if (newUser && email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const validUser = { ...user }
                    validUser.loggedInUser = true
                    setUser(validUser)
                    idToken()
                    navigate(from)
                })
                .catch((error) => {
                    const validUser = { ...user }
                    validUser.error = error.message
                    setUser(validUser)

                });
        }


        e.preventDefault();
    };

    const handleOnClick = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const validUser = { ...user }
                validUser.loggedInUser = true
                setUser(validUser)
                idToken()
                navigate(from)
            }).catch((error) => {
                const validUser = { ...user }
                validUser.error = error.message
                setUser(validUser)
            });

    }

    // sign out 

    // const signOutemail = () => {
    //     signOut(auth)
    // }

    // update name 

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {
                const validUser = { ...user }
                validUser.loggedInUser = true
                setUser(validUser)
            }).catch((error) => {
                const validUser = { ...user }
                validUser.error = error.message
                setUser(validUser)
            });
    }


    const idToken = () => {
        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            console.log(idToken)
            sessionStorage.setItem("token",idToken)
            // ...
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="formContainer">
            <div className="newUser">
                <input type="checkBox" id="newUser" onClick={() => setNewUser(!newUser)} />
                <strong><label htmlFor="newUser">{newUser ? "Login" : "Sign Up"}</label></strong>
            </div>
            <form onSubmit={handleOnSubmit}>
                {!newUser && <div className="loginInput">
                    <input type="text" name="name" placeholder="Enter Your Name" required onBlur={handleOnBlur} />
                </div>
                }
                <div className="loginInput">
                    <input type="email" name="email" placeholder="Enter Your Email" required onBlur={handleOnBlur} />
                </div>
                <div className="loginInput">
                    <input type="password" name="password" placeholder="Enter Your password" required onBlur={handleOnBlur} />
                </div>
                <div className="submitInput">
                    <input type="submit" />
                </div>
            </form>
            <div className="logInaAnotherApp" onClick={handleOnClick}>
                <div>
                    <img src={googleLogo} alt="google logo" width="35px" />
                </div>
                <div className="logInaAnotherAppTitle">
                    <span>Sign In Google</span>
                </div>
                <div className=""></div>
            </div>
            <h3 style={{ color: "red", marginTop: "20px" }}>
                {user.loggedInUser ? "" : user.error}</h3>

            <div>
                {/* <button onClick={signOutemail}>Sign Out</button> */}
            </div>
        </div>
    );
};

export default Login;