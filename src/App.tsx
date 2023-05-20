import React from 'react';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {AllPosts} from "./pages/AllPosts";
import {Creator} from "./pages/Creator";
import {UserProfile} from "./pages/UserProfile";

// create routes
const router = createBrowserRouter([
    {path: '/', element: <AllPosts/>, errorElement: `Error`},
    {path: '/creator', element: <Creator/>, errorElement: `Error`},
    {path: '/user/:id', element: <UserProfile/>, errorElement: `Error`},
])
function App() {
    return (
        <Provider store={store}>
         <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
