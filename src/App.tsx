import React from 'react';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {AllPosts} from "./pages/AllPosts";
import {Creator} from "./pages/Creator";
import {User} from "./pages/User";

// create routes
const router = createBrowserRouter([
    {path: '/', element: <AllPosts/>, errorElement: `Error Posts Page`},
    {path: '/creator', element: <Creator/>, errorElement: `Error Creator Page`},
    {path: '/user/:id', element: <User/>, errorElement: `Error User Page`},
])
function App() {
    return (
        <Provider store={store}>
         <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
