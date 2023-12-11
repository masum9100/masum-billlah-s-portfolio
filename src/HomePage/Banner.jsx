import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='' style={{
            backgroundImage: 'linear-gradient(135deg, #010101c1, #0202026e), url("https://i.ibb.co/hd2zGrd/hero-bg.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {/*  */}
            <div className='max-w-screen-xl mx-auto'>
                <div className="navbar pt-10 max-w-screen-xl flex justify-between items-center px-2">
                    <div className="navbar-start">
                        <NavLink to={'/'}><a href=""><img src="./logo.png" alt="" className='h-20' /></a></NavLink>
                    </div>

                    <div className="navbar-end">
                        <NavLink to={'/projects'}><button className='bg-[#D26E3C] text-white font-bold text-xl py-2 px-3 rounded-lg hover:text-[#D26E3C] hover:bg-white '>Projects</button></NavLink>
                    </div>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className='max-w-screen-xl mx-auto md:flex justify-between items-center px-2'>
                <div>
                    <img src="https://i.ibb.co/Hq0B6yw/hero-image.png" alt="" className='w-96 mx-auto' />
                </div>
                <div className='text-center md:text-right space-y-10'>
                    <p className='text-3xl text-white'>Hi ! I'm a Web Developer</p>
                    <p className='text-5xl md:text-5xl lg:text-7xl text-white font-bold' style={{ textShadow: '0px 5px 15px #dd8560' }}>Masum Billah</p>
                    <p className='text-xl text-[#D26E3C]'>Transforming Dreams into Digital Reality <br />
                        Where Imagination Meets Innovation</p>
                    <div className='md:flex justify-end space-x-10 pb-2'>
                        <a href="./Masum-Billlah's-Professional-CV-Resume.pdf" download>
                            <div className='flex items-center space-x-1 bg-[#D26E3C] text-white font-bold text-xl py-2 px-3 rounded-lg hover:text-[#D26E3C] hover:bg-white'>
                                <FaCloudDownloadAlt></FaCloudDownloadAlt>
                                <p>Download CV</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/masum-billah-0a38b915b/" target='_blank'>
                            <div className='flex items-center space-x-1 bg-[#D26E3C] text-white font-bold text-xl py-2 px-3 rounded-lg hover:text-[#D26E3C] hover:bg-white'>
                                <FaLinkedin></FaLinkedin>
                                <p>LinkedIn</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;