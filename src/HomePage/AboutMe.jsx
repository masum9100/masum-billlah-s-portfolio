import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className='mt-10' style={{
                backgroundImage: "url(https://i.ibb.co/Z2f26Wq/aa.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>About</p>
                        <p className='text-2xl font-bold'>How I Ended Up Here</p>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto w-ful lg:flex justify-between items-center gap-20 mt-5 px-2 space-y-5'>
                <div className='lg:w-1/2 space-y-5 lg:space-y-10'>
                    <p className='leading-loose'>Being a web developer is not just a profession but a passion for me. With every line of code I write, I am able to shape the digital world and bring ideas to life on the internet. In this article, I will share my journey as a web developer and shed light on what this role entails.</p>
                    <p className='leading-loose'>My fascination with web development started when I first encountered a website that seemed like magic. I was captivated by the way it effortlessly combined design, functionality, and interactivity. It sparked a curiosity within me to learn how these websites were created, leading me on a path towards becoming a web developer. <i>Read More...</i></p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="https://i.ibb.co/hs7nDdc/about-img.jpg" alt="" className='rounded-3xl'/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;