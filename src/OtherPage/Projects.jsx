import React from 'react';
import NavBar from '../HomePage/NavBar';
import { Helmet } from 'react-helmet';
import { LuArrowDownWideNarrow } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink } from 'react-router-dom';


const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Billh Bytes | Projects</title>
            </Helmet>
            <NavBar></NavBar>
            <div className='max-w-screen-xl mx-auto mt-16'>

                <div className='max-w-screen-xl mx-auto'>
                    <h1 class="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark:text-white">Take A Glimpse At My Finest Works</h1>
                    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Check out some featured projects I completed with absolute perfection. Many more astonishing projects are yet to be displayed from my repository.</p>

                    <div className='flex justify-center'>
                        <p className='bg-[#D26E3C] text-white font-semibold text-xl py-3 px-10 rounded-lg'>Scroll Down <LuArrowDownWideNarrow className='text-center mx-auto'></LuArrowDownWideNarrow></p>
                    </div>
                </div>
                {/* projects */}

                <div className='mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 md:gap-5 lg:gap-10 px-5 mt-16'>
                    {/* one card */}
                    <div className='w-96 md:w-80 lg:w-96 shadow-md shadow-[#D26E3C] my-10 md:mt-5 hover:scale-125 transition-all duration-500'>
                        <NavLink to={'/nexawave-tech'}><img src="https://i.ibb.co/m5WPZzw/nextc.jpg" alt="" className='' /></NavLink>
                        <div className='flex justify-between items-center px-2 py-5'>
                            <div>
                                <p className='text-xl font-bold mb-2'>NexaWave Technologies</p>
                                <p><span className='text-[#D26E3C]'>Web Development / </span> 10 Oct 2023</p>
                            </div>
                            <div>
                                <NavLink to={'/nexawave-tech'}><CiCirclePlus className='text-5xl font-extrabold text-[#D26E3C]'></CiCirclePlus></NavLink>
                            </div>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className='w-96 md:w-80 lg:w-96 shadow-md shadow-[#D26E3C] my-10 hover:scale-125 transition-all duration-500'>
                        <NavLink to={'/pest-control'}><img src="https://i.ibb.co/NT0byQd/pestc.jpg" alt="" className='' /></NavLink>
                        <div className='flex justify-between items-center px-2 py-5'>
                            <div>
                                <p className='text-xl font-bold mb-2'>Guardian Pest Control</p>
                                <p><span className='text-[#D26E3C]'>Web Development / </span> 30 Oct 2023</p>
                            </div>
                            <div>
                                <NavLink to={'/pest-control'}><CiCirclePlus className='text-5xl font-extrabold text-[#D26E3C]'></CiCirclePlus></NavLink>
                            </div>
                        </div>
                    </div>
                    {/* 3rd card */}
                    <div className='w-96 md:w-80 lg:w-96 shadow-md shadow-[#D26E3C] my-10 hover:scale-125 transition-all duration-500'>
                        <NavLink to={'/khulna-times'}><img src="https://i.ibb.co/sjq3SgH/khulnat.jpg" alt="" className='' /></NavLink>
                        <div className='flex justify-between items-center px-2 py-5'>
                            <div>
                                <p className='text-xl font-bold mb-2'>The Khulna Times</p>
                                <p><span className='text-[#D26E3C]'>Web Development / </span> 25 Nov 2023</p>
                            </div>
                            <div>
                                <NavLink to={'/khulna-times'}><CiCirclePlus className='text-5xl font-extrabold text-[#D26E3C]'></CiCirclePlus></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;