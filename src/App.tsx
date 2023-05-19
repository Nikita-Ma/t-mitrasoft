import React from 'react';
import {RouterProvider,createBrowserRouter} from "react-router-dom";




const router = createBrowserRouter([
    {path: '/', element: `All posts`, errorElement: `Error`},
    {path: '/creator', element: `About me`, errorElement: `Error`},
    {path: '/user/:id', element: `Details User (info users and post lists)`, errorElement: `Error`},
])
function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
