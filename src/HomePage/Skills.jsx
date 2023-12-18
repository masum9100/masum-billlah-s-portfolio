import React, { useEffect, useState } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiWebflow } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly", "bounce"]
import MovingText from 'react-moving-text'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const SkillBox = ({ title, description, icon, completed }) => {
    // Use intersection observer to detect when the component is in view
    const [ref, inView] = useInView({
        triggerOnce: false, // Only trigger once
        threshold: 0.2, // Trigger animation when 20% of the component is visible
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
            });
        }else {
            // Reset animation when out of view
            controls.start({
                opacity: 0,
                scale: 0.5,
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            transition={{
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <div className='w-96 md:w-80 lg:w-96'>
                <div className='border-s-4 border-[#D26E3C] pl-5'>
                    <p className='text-3xl font-semibold'>{title}</p>
                    <p className='text-xl leading-relaxed'>{description}</p>
                    <div className='w-full  flex gap-2 mt-2'>
                        <div className='flex items-center '>
                            {icon} {/* Render the icon dynamically */}
                        </div>
                        <div className='w-full '>
                            <ProgressBar completed={completed} bgColor='#D26E3C' />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        // ////////////////


    );
};


const Skills = () => {



    const [animationIndex, setAnimationIndex] = useState(0)
    const [animationType, setAnimationType] = useState(AnimationsForChaining[0])

    const handleChainAnimation = () => {
        setCounter(animationIndex + 1)
        setAnimationType(selectedItems[animationIndex + 1])
    }


    return (
        <div className='my-16'>
            <div className='' style={{
                backgroundImage: "url(https://i.ibb.co/h19VqSC/SKIL-BG.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className='max-w-screen-xl mx-auto px-2'>

                    <div className='py-2'>
                        <p className='text-xl mb-1'>SKILLS</p>

                        <MovingText
                            onAnimationEnd={handleChainAnimation}
                            type="bounce"
                            duration="5000ms"
                            timing="linear"
                            iteration={1}>
                            <p className='text-2xl font-bold'>The Path of a Samurai</p>
                        </MovingText>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-2 grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 mt-10'>

                <SkillBox title="Html / Css" description="The building blocks of the web. HTML provides foundational structure, while CSS enhances visual and stylistic appearance." icon={<FaHtml5 className='text-xl'></FaHtml5>
                    } completed={98} />

                {/* html skill */}
                <SkillBox title="JavaScript" description="The backbone of dynamic web development. Enables client-side scripting, interactivity, and responsive design." icon={<IoLogoJavascript className='text-xl'></IoLogoJavascript>} completed={80} />

                {/* javaScript skill */}
                <SkillBox title="React.js" description="A popular JavaScript library for building reusable UI components, widely used for creating dynamic and interactive user interfaces." icon={<FaReact className='text-xl'></FaReact>} completed={85} />

                {/* react skill */}
                <SkillBox title="Next.js" description="A high-performance React framework for server-side rendering, lightning-fast performance, seamless deployment, and easy scalability." icon={<SiNextdotjs className='text-xl'></SiNextdotjs>} completed={75} />


                {/* Next.js skill */}
                <SkillBox title="MongoDB" description="NoSQL document database that provides flexible and scalable data storage, allowing developers to build applications with ease." icon={<DiMongodb className='text-xl'></DiMongodb>} completed={80} />

                {/* MongoDB skill */}
                <SkillBox title="Webflow" description="A user-friendly visual web development platform that empowers designers to create responsive websites without coding expertise." icon={<SiWebflow className='text-xl'></SiWebflow>} completed={60} />



                {/* Webflow skill */}


            </div>

        </div>
    );
};

export default Skills;