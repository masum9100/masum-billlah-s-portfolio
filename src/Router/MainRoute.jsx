import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../HomePage/Footer';

const MainRoute = () => {
    return (
        <div>
           
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainRoute;