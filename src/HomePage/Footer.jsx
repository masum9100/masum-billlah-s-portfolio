import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>


            <footer className="bg-gradient-to-t from-[#D26E3C] to-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="" className="flex items-center">
                                <img src="./logo.png" className="h-16 me-3" alt="FlowBite Logo" />
                            </a>
                            <p className='mt-4 font-semibold'>HTML for structure, CSS for style, <br />JavaScript for magic, React for wizardry. <br /> Building the web, one line at a time.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                            <div>
                                <h2 className="mb-6 text-base font-bold uppercase dark:text-white">Company</h2>
                                <ul className=" dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="" className="hover:underline ">About</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Projects</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-bold uppercase dark:text-white">Contact</h2>
                                <ul className=" dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="mailto:masum.seopro@gmail.com" className="hover:underline ">masum.seopro@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:+8801713789711" className="hover:underline">+880 1713 789 711</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">BillahBytes™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/30masum" target='_blank' className=" text-xl hover:text-gray-900 dark:hover:text-white">
                                <FaFacebookSquare></FaFacebookSquare>
                                <span className="sr-only">Facebook page</span>
                            </a>

                            <a href="https://twitter.com/30masum" target='_blank' className="text-xl hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaSquareXTwitter></FaSquareXTwitter>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="https://github.com/masum9100" target='_blank' className="text-xl hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaGithubSquare></FaGithubSquare>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="https://www.linkedin.com/in/masum-billah-0a38b915b/" target='_blank' className="text-xl hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaLinkedin></FaLinkedin>
                                <span className="sr-only">LinkedIn account</span>
                            </a>
                            <a href="https://www.instagram.com/30masum/" target='_blank' className="text-xl hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaInstagramSquare></FaInstagramSquare>
                                <span className="sr-only">Instagram account</span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;