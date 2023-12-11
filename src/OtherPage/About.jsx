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
import Marquee from "react-fast-marquee";
import { FaNodeJs } from "react-icons/fa";
import { SiAxios } from "react-icons/si";

const About = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className='max-w-screen-xl mx-auto mt-16'>
                <div className='lg:flex justify-between  mt-16 px-2'>
                    {/* skill */}
                    <div className='border-2 rounded-lg border-[#D26E3C] w-96 p-5 mx-auto'>
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
                        <div className='h-1 bg-gray-500 my-2'>
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
                        <div className='h-1 bg-gray-500 my-2'>
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
                        <div className='h-1 bg-gray-500 my-2'>
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
                        <div className='h-1 bg-gray-500 my-2'>
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
                        <div className='h-1 bg-gray-500 my-2'>
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
                    <div className=' my-auto mx-auto'>
                        <div className='py-2'>
                            <p className='text-7xl mb-1 text-center font-bold'>ABOUT ME</p>
                        </div>
                        <img src="https://i.ibb.co/LDwJ4Wp/pexels-lukas-574071.jpg" alt="" className='w-96 rounded-lg mx-auto' />
                    </div>
                    {/* edu */}
                    <div className='border-2 rounded-lg border-[#D26E3C] w-96 p-5 mx-auto mt-2 lg:mt-0'>
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
            {/* animation */}
            <div className='my-10'>
                <Marquee pauseOnHover={true}>
                    <FaHtml5 className='text-7xl text-[#DD4B25] ml-40'></FaHtml5>
                    <FaCss3Alt className='text-7xl text-[#254BDD] ml-40'></FaCss3Alt>
                    <IoLogoJavascript className='text-7xl text-[#EBD54F] ml-40'></IoLogoJavascript>
                    <FaReact className='text-7xl text-[#0FD3F7] ml-40'></FaReact>
                    <DiMongodb className='text-7xl text-[#4DA53F] ml-40'></DiMongodb>
                    <SiNextdotjs className='text-7xl text-[#000000] ml-40'></SiNextdotjs>
                    <FaNodeJs className='text-7xl text-[#86C001] ml-40'></FaNodeJs>
                    <SiAxios className='text-7xl text-[#5728DD] ml-40'></SiAxios>
                    <SiWebflow className='text-7xl text-[#4151F7] ml-40'></SiWebflow>
                </Marquee>

            </div>
            {/* paragraph */}
            <div>
                {/* dream */}
                <div className='max-w-screen-xl mx-auto w-ful lg:flex justify-between items-center gap-20 mt-5 px-2 space-y-5'>
                    <div className='lg:w-1/2 space-y-5'>
                        <p className='text-xl font-bold'>Dreaming Beyond Horizons</p>
                        <p><i>Unveiling the Aspirations of Masum Billah</i></p>
                        <div className='h-1 bg-gray-500'>
                            <hr />
                        </div>
                        <p className='leading-loose text-justify text-md'>In the tapestry of my dreams, I envision a digital realm pulsating with innovation and interconnectedness. My aspirations transcend the ordinary; they dance on the edges of imagination and possibility. I dream of weaving intricate codes that not only power websites but also elevate user experiences to sublime heights. It's a dream where pixels and lines of code amalgamate seamlessly, breathing life into the virtual canvas.</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src="https://i.ibb.co/mGwCq5x/dream.jpg" alt="" className='rounded-3xl' />
                    </div>
                </div>
                {/* vision */}
                <div className='max-w-screen-xl mx-auto w-ful lg:flex flex-row-reverse justify-between items-center gap-20 my-16 px-2 space-y-5'>
                    <div className='lg:w-1/2 space-y-5'>
                        <p className='text-xl font-bold'>Illuminating the Vision</p>
                        <p><i>A Glimpse into the Future by Masum Billah</i></p>
                        <div className='h-1 bg-gray-500'>
                            <hr />
                        </div>
                        <p className='leading-loose text-justify text-md'>My vision extends far beyond the screen; it's a tapestry woven with threads of innovation, efficiency, and user-centricity. I envision a future where technology isn't just a tool but an enabler of human connection and progress. It's a world where websites transcend mere functionality to become immersive experiences, capturing hearts and minds alike. With every keystroke and line of code, I aim to shape this vision into reality.</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src="https://i.ibb.co/nMC9w3N/vision.jpg" alt="" className='rounded-3xl' />
                    </div>
                </div>
                {/* mission */}
                <div className='max-w-screen-xl mx-auto w-ful lg:flex justify-between items-center gap-20 mt-5 px-2 space-y-5'>
                    <div className='lg:w-1/2 space-y-5'>
                        <p className='text-xl font-bold'>Navigating the Mission Pathway</p>
                        <p><i>Masum Billah's Voyage Toward Technological Excellence</i></p>
                        <div className='h-1 bg-gray-500'>
                            <hr />
                        </div>
                        <p className='leading-loose text-justify text-md'>My mission is rooted in a dedication to craft and an unwavering commitment to growth. I endeavor to craft digital landscapes that seamlessly blend aesthetics with functionality, employing HTML, CSS, TailwindCSS, JavaScript, React Js, and Next Js as my artistic instruments. It's a mission to continuously learn, innovate, and adapt in the ever-evolving tech landscape, creating digital footprints that stand the test of time. With each project, I embark on a journey to push boundaries and redefine what's possible in web development.</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src="https://i.ibb.co/wg1mQFJ/mission.jpg" alt="" className='rounded-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;