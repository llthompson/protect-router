import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
};
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    );
};



const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/' element={<ProtectedRoute component={Home} />} />
            <Route path='/about' element={<ProtectedRoute component={About} />} />
            <Route path='/car/:id' element={<ProtectedRoute component={Car} />} />
        </Routes>
    );
};

export default Router;