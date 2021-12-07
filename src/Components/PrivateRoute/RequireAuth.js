import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const RequireAuth = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext);
    let location = useLocation();

    if (!userLoggedIn?.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children
}

export default RequireAuth