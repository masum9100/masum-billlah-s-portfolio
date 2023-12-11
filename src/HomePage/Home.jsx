import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
import Experiences from './Experiences';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Billh Bytes | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experiences></Experiences>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;