import React from 'react';

const NavBar = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar fixed z-10 pt-10 max-w-screen-xl ">
                <div className="navbar-start">
                    <a href=""><img src="./logo.png" alt="" className='h-20' /></a>
                </div>

                <div className="navbar-end">
                    <button className='bg-[#D26E3C] text-white font-bold text-xl py-2 px-3 rounded-lg hover:text-[#D26E3C] hover:bg-white hover:border-2 border-[#D26E3C]'>Projects</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;