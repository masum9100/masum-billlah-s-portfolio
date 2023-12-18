import React from 'react';
import NavBar from '../HomePage/NavBar';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
// logo icon
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Nexa = () => {
    return (
        <div>
            <Helmet>
                <title>Billh Bytes | My One work</title>
            </Helmet>
            <NavBar></NavBar>
            <div className='mx-auto max-w-screen-lg mt-16'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/Fz8F8hz/nexa1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/vLYmxjG/nexa2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/xHfqSSw/nexa3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/0jRB5Fy/nexa4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/D7SmynM/nexa5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/sjZ1j5t/nexa6.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex justify-center gap-10 my-16'>
                <a href="https://nexawave-1d00b.web.app/" target='_blank' className='bg-[#D26E3C] text-white font-semibold text-xl py-2 px-5 rounded-lg hover:text-[#D26E3C] hover:bg-white '>Live Demo</a>
                <a href="https://github.com/masum9100/NexaWave-Technologies" target='_blank' className='bg-[#D26E3C] text-white font-semibold text-xl py-2 px-5 rounded-lg hover:text-[#D26E3C] hover:bg-white '>GitHub Repo</a>
            </div>
            <div className='mx-auto w-full max-w-screen-xl px-2 grid md:flex justify-between mt-16'>
                <div className='w-full md:w-2/3'>
                    <p className='text-2xl font-semibold mb-10'>Project Features</p>
                    <div className='flex gap-2 items-center px-5 mb-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>User Authentication and Authorization:</span> Your website implements a secure user authentication system using Firebase. This ensures that users can create accounts, log in, and have personalized experiences while interacting with your application.</p>
                    </div>
                    <div className='flex gap-2 items-center px-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>React and Tailwind CSS for Frontend:</span> The frontend of your website is built using React, a popular JavaScript library for building user interfaces. Additionally, you've utilized Tailwind CSS, a utility-first CSS framework, to style and design your application, resulting in a visually appealing and responsive user interface.</p>
                    </div>
                    <div className='flex gap-2 items-center px-5 my-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>CRUD Operations for Products:</span> Your application supports CRUD (Create, Read, Update, Delete) operations for products. This means users can add new products, view existing ones, update product details, and delete products as needed. This functionality provides a seamless and efficient way to manage the product catalog.</p>
                    </div>
                    <div className='flex gap-2 items-center px-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>Shopping Cart Functionality:</span> You've implemented a shopping cart feature that allows users to add products to their cart. This feature enables a user-friendly shopping experience, allowing customers to easily select and keep track of the items they intend to purchase.</p>
                    </div>
                    <div className='flex gap-2 items-center px-5 my-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>Integration with Node.js and MongoDB Backend:</span> The backend of your application is powered by Node.js, providing a robust and scalable server-side environment. Additionally, you've chosen MongoDB as your database, a popular NoSQL database, for efficient data storage and retrieval. This combination ensures that your application can handle data effectively and scale with growing user demands.</p>
                    </div>
                    <div className='flex gap-2 items-center px-5'>
                        <p className='text-3xl text-[#D26E3C]'><FaArrowRight></FaArrowRight></p>
                        <p><span className='font-bold'>Responsive Design for Cross-Device Compatibility:</span> Your website is designed with responsiveness in mind, ensuring that it looks and functions well on various devices, including desktops, tablets, and mobile phones. This feature enhances user experience and accessibility, allowing users to interact with your application seamlessly regardless of their chosen device.</p>
                    </div>

                </div>
                <div className='w-full md:w-1/3 '>
                    <p className='text-2xl font-semibold mb-10'>Technology I used</p>
                    <div className='flex flex-wrap gap-8 px-5'>
                        <div>
                            <p className='text-5xl text-[#DD4B25]'><FaHtml5></FaHtml5></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>HTML</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#254BDD]'><FaCss3Alt></FaCss3Alt></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>CSS</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#EBD54F]'><IoLogoJavascript></IoLogoJavascript></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>JavaScript</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#5ED3F3]'><FaReact></FaReact></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>React</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#EE7E0C]'><IoLogoFirebase></IoLogoFirebase></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>Firebase</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#37B8F0]'><BiLogoTailwindCss></BiLogoTailwindCss></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>TailwindCSS</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#4DA53F]'><SiMongodb></SiMongodb></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>MongoDB</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#00000]'><SiNextdotjs></SiNextdotjs></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>Next.js</p>
                        </div>
                        <div>
                            <p className='text-5xl text-[#7DC521]'><FaNodeJs></FaNodeJs></p>
                            <p className='text-xl md:text-3xl text-gray-500 font-bold'>Node.js</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex justify-center mt-16'>
                <NavLink to={'/projects'}><button className='bg-[#D26E3C] text-white font-semibold text-xl py-2 px-5 rounded-lg hover:text-[#D26E3C] hover:bg-white '>Other Projects</button></NavLink>
            </div>

        </div>
    );
};

export default Nexa;