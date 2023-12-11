import React from 'react';

const Contact = () => {
    return (
        <div className='my-16'>
            <div className='' style={{
                backgroundImage: "url(https://i.ibb.co/x5J9tr9/contact-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>CONTACT</p>
                        <p className='text-2xl font-bold'>Write a Quick Message</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='max-w-screen-xl mx-auto w-ful lg:flex justify-between items-center gap-20 px-2 space-y-5 mt-10'>
                <div className='lg:w-1/2'>
                    <p className='text-md text-justify mb-5'>Don't hesitate to reach out and let's discuss your next web project! Whether it's a new design, development, or revamp of an existing site, I'm ready to collaborate and bring your vision to life. Let's connect and make your web presence shine.</p>
                    <img src="https://i.ibb.co/1zKFcLh/firmbee-com-Sp-VHcbu-Ki6-E-unsplash.jpg" alt="" className='rounded-3xl' />
                </div>
                <div className='lg:w-1/2 space-y-5 lg:space-y-10'>
                    <form className='space-y-5'>
                        <div>
                            <p className='text-xl font-bold mb-2'>Name</p>
                            <input type="text" name="" id="" placeholder='Megan Fox' className='w-full border-b-[1px] rounded-xl border-[#D26E3C] py-3 px-3'/>
                        </div>
                        <div>
                            <p className='text-xl font-bold mb-2'>Email</p>
                            <input type="email" name="" id="" placeholder='hello@gmail.com' className='w-full border-b-[1px] rounded-xl border-[#D26E3C] py-3 px-3'/>
                        </div>
                        <div>
                            <p className='text-xl font-bold mb-2'>Phone</p>
                            <input type="tel" name="" id="" placeholder='+880 1234 567 890' className='w-full border-b-[1px] rounded-xl border-[#D26E3C] py-3 px-3'/>
                        </div>
                        <div>
                            <p className='text-xl font-bold mb-2'>Message</p>
                            <input type="text" name="" id="" placeholder='Hello!' className='w-full border-b-[1px] rounded-xl border-[#D26E3C] py-3 px-3'/>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className='w-full bg-[#D26E3C] text-white font-bold text-xl rounded-lg hover:text-[#D26E3C] hover:bg-white hover:border-2 border-[#D26E3C] py-3 px-3'/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;