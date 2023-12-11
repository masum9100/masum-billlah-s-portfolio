import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;