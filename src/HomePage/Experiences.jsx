import React, { useState } from 'react';
import { motion } from "framer-motion";

const Experiences = () => {




    return (
        <div className='my-16'>
            <motion.div className="box"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>

                <div className='' style={{
                    backgroundImage: "url(https://i.ibb.co/ZSbsJky/EXP-BG.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className='max-w-screen-xl mx-auto px-2'>

                        <div className='py-2 text-center'>
                            <p className='text-xl mb-1'>EXPERIENCES</p>

                            <p className='text-2xl font-bold'>Companies Where I Worked</p>

                        </div>
                    </div>
                </div>
            </motion.div>

            {/*  */}
            <div className='max-w-screen-xl mx-auto px-2 mt-10 space-y-10'>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C] pb-5'>

                    
                    <div className='flex justify-start items-baseline gap-3'>
                        <p className='text-3xl font-bold'>Executive Officer</p>
                        <a href="https://www.virgenius.com/" target='_blank'><p className='text-sm font-bold text-[#D26E3C] animate-bounce'>-VirGenius Inc.</p></a>
                    </div>
                    <div>
                        <p className='text-2xl'>Jan 2022-Present</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C] pb-5'>
                    <div className='flex justify-start items-baseline gap-3'>
                        <p className='text-3xl font-bold'>Sr. Executive Assistant</p>
                        <a href="https://www.virgenius.com/" target='_blank'><p className='text-sm font-bold text-[#D26E3C] animate-bounce'>-VirGenius Inc.</p></a>
                    </div>
                    <div>
                        <p className='text-2xl'>Nov 2019-Dec 2022</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C] pb-5'>
                    <div className='flex justify-start items-baseline gap-3'>
                        <p className='text-3xl font-bold'>Jr. Executive Assistant</p>
                        <a href="https://www.virgenius.com/" target='_blank'><p className='text-sm font-bold text-[#D26E3C] animate-bounce'>-VirGenius Inc.</p></a>
                    </div>
                    <div>
                        <p className='text-2xl'>Dec 2017-Oct 2019</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C] pb-5'>
                    <div className='flex justify-start items-baseline gap-3'>
                        <p className='text-3xl font-bold'>Executive Assistant</p>
                        <a href="https://www.facebook.com/StylishGarmentsLimited/" target='_blank'><p className='text-sm font-bold text-[#D26E3C] animate-bounce'>-Stylish Garments</p></a>
                    </div>
                    <div>
                        <p className='text-2xl'>Mar 2019-May 2019</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C] pb-5'>
                    <div className='flex justify-start items-baseline gap-3'>
                        <p className='text-3xl font-bold'>Success Coach</p>
                        <a href="https://www.empower.com/" target='_blank'><p className='text-sm font-bold text-[#D26E3C] animate-bounce'>-Empower.com</p></a>
                    </div>
                    <div>
                        <p className='text-2xl'>Aug 2018-Mar 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;