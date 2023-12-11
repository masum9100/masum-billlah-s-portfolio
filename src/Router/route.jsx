import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';
import About from '../OtherPage/About';
import Projects from '../OtherPage/Projects';

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
            }
        ]
    }
])

export default route;