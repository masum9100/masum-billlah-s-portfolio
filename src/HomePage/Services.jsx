import React from 'react';
import { MdDoubleArrow } from "react-icons/md";

const Services = () => {
    return (
        <div>
            <div className='mt-16' style={{
                backgroundImage: "url(https://i.ibb.co/zQ2zRBv/service-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>SERVICES</p>
                        <p className='text-2xl font-bold'>What I Can Do For You</p>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto mt-5 grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 px-2'>
                {/* web development */}
                <div className='w-96 md:w-80 lg:w-96 space-y-1'>
                    <img src="https://i.ibb.co/QPzyHkN/web-development.gif" alt="" />
                    <p className='text-xl font-bold text-center'>Web Development</p>
                    <p className='text-md text-justify'>We excel in bringing digital visions to life through expert web development that combines functionality with aesthetics. Our dedicated team is skilled in creating responsive and dynamic websites, tailored to meet the unique goals of each project. By staying at the forefront of emerging technologies and design trends, we deliver cutting-edge online experiences that leave a lasting impact.</p>
                    <div className='flex flex-wrap gap-2'>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>HTML</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>CSS</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>TailwindCSS</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>React.js</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ui/ux */}
                <div className='w-96 md:w-80 lg:w-96 space-y-1'>
                    <img src="https://i.ibb.co/gRJK3hF/ui-ux.gif" alt="" />
                    <p className='text-xl font-bold text-center'>UI & UX Design</p>
                    <p className='text-md text-justify'>Our innovative approach ensures that every interaction is thoughtfully designed, resulting in meaningful connections between users and technology. With a focus on inclusivity and accessibility, we create designs that resonate with diverse audiences, setting new standards in the realm of UI/UX.</p>
                    <div className='flex flex-wrap gap-2'>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Website Design</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Website Redesign</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Figma Design</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Logo Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* digital mark */}
                <div className='w-96 md:w-80 lg:w-96 space-y-1'>
                    <img src="https://i.ibb.co/bv3mj6z/Digital-marketing.gif" alt="" />
                    <p className='text-xl font-bold text-center'>Back Office Support</p>
                    <p className='text-md text-justify'>With years of experience and a passion for efficiency, our team is dedicated to managing the essential tasks that keep your business running smoothly behind the scenes. We take pride in our commitment to excellence, ensuring that your back office operations are in capable hands, allowing you to focus on what you do best.</p>
                    <div className='flex flex-wrap gap-2'>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>SEO</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>SMM</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Data Processing</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Content Creation</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Lead Generation</p>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <MdDoubleArrow className='text-[#D26E3C]'></MdDoubleArrow>
                                <p>Web Research</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;