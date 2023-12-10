import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default route;