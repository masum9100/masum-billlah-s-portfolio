import React from 'react';
import NavBar from '../HomePage/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../HomePage/Footer';

const MainRoute = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainRoute;