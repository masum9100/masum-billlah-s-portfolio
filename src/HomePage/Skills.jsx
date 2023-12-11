import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiWebflow } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <div className='mt-16' style={{
                backgroundImage: "url(https://i.ibb.co/h19VqSC/SKIL-BG.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>SKILLS</p>
                        <p className='text-2xl font-bold'>The Path of a Samurai</p>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-2 grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 mt-10'>
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>Html / Css</p>
                        <p className='text-xl leading-relaxed'>The building blocks of the web. HTML provides foundational structure, while CSS enhances visual and stylistic appearance.</p>
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

                </div>
                {/* html skill */}
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>JavaScript</p>
                        <p className='text-xl leading-relaxed'>The backbone of dynamic web development. Enables client-side scripting, interactivity, and responsive design.</p>
                        <div className='w-full  flex gap-2 mt-2'>
                            <div className='flex items-center '>

                                <IoLogoJavascript className='text-xl'></IoLogoJavascript>

                            </div>
                            <div className='w-full '>
                                <ProgressBar completed={80} bgColor='#D26E3C' />
                            </div>
                        </div>
                    </div>

                </div>
                {/* javaScript skill */}
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>React.js</p>
                        <p className='text-xl leading-relaxed'>A popular JavaScript library for building reusable UI components, widely used for creating dynamic and interactive user interfaces.</p>
                        <div className='w-full  flex gap-2 mt-2'>
                            <div className='flex items-center '>
                                <FaReact className='text-xl'></FaReact>
                            </div>
                            <div className='w-full '>
                                <ProgressBar completed={85} bgColor='#D26E3C' />
                            </div>
                        </div>
                    </div>

                </div>
                {/* react skill */}
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>Next.js</p>
                        <p className='text-xl leading-relaxed'>A high-performance React framework for server-side rendering, lightning-fast performance, seamless deployment, and easy scalability.</p>
                        <div className='w-full  flex gap-2 mt-2'>
                            <div className='flex items-center '>
                                <SiNextdotjs className='text-xl'></SiNextdotjs>
                            </div>
                            <div className='w-full '>
                                <ProgressBar completed={75} bgColor='#D26E3C' />
                            </div>
                        </div>
                    </div>

                </div>
                {/* Next.js skill */}
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>MongoDB</p>
                        <p className='text-xl leading-relaxed'>NoSQL document database that provides flexible and scalable data storage, allowing developers to build applications with ease.</p>
                        <div className='w-full  flex gap-2 mt-2'>
                            <div className='flex items-center '>
                                <DiMongodb className='text-xl'></DiMongodb>
                            </div>
                            <div className='w-full '>
                                <ProgressBar completed={80} bgColor='#D26E3C' />
                            </div>
                        </div>
                    </div>

                </div>
                {/* MongoDB skill */}
                <div className='w-96 md:w-80 lg:w-96'>
                    <div className='border-s-4 border-[#D26E3C] pl-5'>
                        <p className='text-3xl font-semibold'>Webflow</p>
                        <p className='text-xl leading-relaxed'>A user-friendly visual web development platform that empowers designers to create responsive websites without coding expertise.</p>
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
                {/* Webflow skill */}


            </div>

        </div>
    );
};

export default Skills;