import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';
import About from '../OtherPage/About';
import Projects from '../OtherPage/Projects';
import Nexa from '../OtherPage/Nexa';
import PestCon from '../OtherPage/PestCon';
import KhulnaTimes from '../OtherPage/KhulnaTimes';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-me',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/nexawave-tech',
                element: <Nexa></Nexa>
            },
            {
                path: '/pest-control',
                element: <PestCon></PestCon>
            },
            {
                path: '/khulna-times',
                element: <KhulnaTimes></KhulnaTimes>
            }
        ]
    }
])

export default route;