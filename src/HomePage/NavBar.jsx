import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar pt-10 max-w-screen-xl flex justify-between ">
                <div className="navbar-start">
                <NavLink to={'/'}><a href=""><img src="./logo.png" alt="" className='h-20' /></a></NavLink>
                </div>

                <div className="navbar-end">
                <NavLink to={'/projects'}><button className='bg-[#D26E3C] text-white font-semibold text-xl py-2 px-5 rounded-lg hover:text-[#D26E3C] hover:bg-white '>Projects</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;