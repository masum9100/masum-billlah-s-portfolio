import React from 'react';

const Experiences = () => {
    return (
        <div className='my-16'>
            <div className='' style={{
                backgroundImage: "url(https://i.ibb.co/ZSbsJky/EXP-BG.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>EXPERIENCES</p>
                        <p className='text-2xl font-bold'>Companies Where I Worked</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='max-w-screen-xl mx-auto px-2 mt-10 space-y-10'>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C]'>
                    <div>
                        <p className='text-3xl font-bold'>Executive Officer <span className='text-sm font-bold text-[#D26E3C]'>/VieGenius Inc.</span></p>
                    </div>
                    <div>
                        <p className='text-2xl'>Jan 2022-Present</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C]'>
                    <div>
                        <p className='text-3xl font-bold'>Sr. Executive Assistant <span className='text-sm font-bold text-[#D26E3C]'>/VieGenius Inc.</span></p>
                    </div>
                    <div>
                        <p className='text-2xl'>Nov 2019-Dec 2022</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C]'>
                    <div>
                        <p className='text-3xl font-bold'>Jr. Executive Assistant <span className='text-sm font-bold text-[#D26E3C]'>/VieGenius Inc.</span></p>
                    </div>
                    <div>
                        <p className='text-2xl'>Dec 2017-Oct 2019</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C]'>
                    <div>
                        <p className='text-3xl font-bold'>Jr. Executive Assistant <span className='text-sm font-bold text-[#D26E3C]'> /Stylish Garments</span></p>
                    </div>
                    <div>
                        <p className='text-2xl'>Mar 2019-May 2019</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-between border-b-2 border-[#D26E3C]'>
                    <div>
                        <p className='text-3xl font-bold'>Success Coach <span className='text-sm font-bold text-[#D26E3C]'>/Empower</span></p>
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