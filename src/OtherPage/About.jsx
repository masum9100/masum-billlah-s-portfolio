import React from 'react';
import NavBar from '../HomePage/NavBar';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiWebflow } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <div className='max-w-screen-xl mx-auto mt-16'>

                <div className='flex justify-between  mt-16 px-2'>
                    {/* skill */}
                    <div className='border-2 rounded-lg border-[#D26E3C] w-96 p-5'>
                        <p className='text-3xl font-semibold text-center'>SKILLS</p>
                        <div className=''>
                            <p className='text-xl font-semibold'>Html / Css</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>
                                    <FaHtml5 className='text-xl'></FaHtml5>
                                    /
                                    <FaCss3Alt className='text-xl'></FaCss3Alt>

                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={98} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1 bg-gray-500 my-2 my-2'>
                            <hr />
                        </div>
                        {/*  */}
                        <div className=''>
                            <p className='text-xl font-semibold'>JavaScript</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>

                                    <IoLogoJavascript className='text-xl'></IoLogoJavascript>

                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={80} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1 bg-gray-500 my-2 my-2'>
                            <hr />
                        </div>
                        {/*  */}
                        <div className=''>
                            <p className='text-xl font-semibold'>React.js</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>
                                    <FaReact className='text-xl'></FaReact>
                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={85} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1 bg-gray-500 my-2 my-2'>
                            <hr />
                        </div>
                        {/*  */}
                        <div className=''>
                            <p className='text-xl font-semibold'>Next.js</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>
                                    <SiNextdotjs className='text-xl'></SiNextdotjs>
                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={75} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1 bg-gray-500 my-2 my-2'>
                            <hr />
                        </div>
                        {/*  */}
                        <div className=''>
                            <p className='text-xl font-semibold'>MongoDB</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>
                                    <DiMongodb className='text-xl'></DiMongodb>
                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={80} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1 bg-gray-500 my-2 my-2'>
                            <hr />
                        </div>
                        {/*  */}
                        <div className=''>
                            <p className='text-xl font-semibold'>Webflow</p>
                            <div className='w-full  flex gap-2 mt-2'>
                                <div className='flex items-center '>
                                    <SiWebflow className='text-xl'></SiWebflow>
                                </div>
                                <div className='w-full '>
                                    <ProgressBar completed={60} bgColor='#D26E3C' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* img */}
                    <div className=' my-auto'>
                        <div className='py-2'>
                            <p className='text-7xl mb-1 text-center font-bold'>ABOUT ME</p>
                        </div>
                        <img src="https://i.ibb.co/LDwJ4Wp/pexels-lukas-574071.jpg" alt="" className='w-96 rounded-lg' />
                    </div>
                    {/* edu */}
                    <div className='border-2 rounded-lg border-[#D26E3C] w-96 p-5'>
                        <p className='text-3xl font-semibold text-center mb-2'>EDUCATION</p>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold'>Degree</p>
                            <p className='text-xl font-semibold'>Passing Year</p>
                            <p className='text-xl font-semibold'>Result</p>
                        </div>
                        <div className='h-1 bg-gray-500 my-2'>
                            <hr />
                        </div>
                        {/* ssc */}
                        <div className='my-2'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>SSC</p>
                                <p className='text-xl font-semibold'>2009</p>
                                <p className='text-xl font-semibold'><samp className='text-xs font-thin'>GPA</samp>4.44</p>
                            </div>
                            <div className='flex justify-center gap-2 text-[#D26E3C]'>
                                <p>Jashore Board</p>
                                /
                                <p>Science</p>
                            </div>
                            <div className='h-1 bg-gray-500 my-2'>
                                <hr />
                            </div>
                        </div>
                        {/* hsc */}
                        <div className='my-2'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>HSC</p>
                                <p className='text-xl font-semibold'>2011</p>
                                <p className='text-xl font-semibold'><samp className='text-xs font-thin'>GPA</samp>4.00</p>
                            </div>
                            <div className='flex justify-center gap-2 text-[#D26E3C]'>
                                <p>Jashore Board</p>
                                /
                                <p>Science</p>
                            </div>
                            <div className='h-1 bg-gray-500 my-2'>
                                <hr />
                            </div>
                        </div>
                        {/* ba */}
                        <div className='my-2'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>BA</p>
                                <p className='text-xl font-semibold'>2016</p>
                                <p className='text-xl font-semibold'><samp className='text-xs font-thin'>CGPA</samp>2.96</p>
                            </div>
                            <div className='flex justify-center gap-2 text-[#D26E3C]'>
                                <p>National University</p>
                                /
                                <p>Bangla</p>
                            </div>
                            <div className='h-1 bg-gray-500 my-2'>
                                <hr />
                            </div>
                        </div>
                        {/* ma */}
                        <div className='my-2'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>MA</p>
                                <p className='text-xl font-semibold'>2017</p>
                                <p className='text-xl font-semibold'><samp className='text-xs font-thin'>CGPA</samp>2.88</p>
                            </div>
                            <div className='flex justify-center gap-2 text-[#D26E3C]'>
                                <p>National University</p>
                                /
                                <p>Bangla</p>
                            </div>
                            <div className='h-1 bg-gray-500 my-2'>
                                <hr />
                            </div>

                        </div>
                        {/* web developer */}
                        <div className='my-2'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>FSD</p>
                                <p className='text-xl font-semibold'>2023</p>
                                <p className='text-xl font-semibold'><samp className='text-xs font-thin'></samp>Pending</p>
                            </div>
                            <div className='flex justify-center gap-2 text-[#D26E3C]'>
                                <p>Programming Hero</p>
                                /
                                <p>Developer</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;