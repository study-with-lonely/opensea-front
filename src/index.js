import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import App from "./App";
import MainPage from "./components/MainPage";
import Gallery from "./components/Gallery";
import Help from "./components/Help";
import News from "./components/News";
import Contacts from "./components/Contacts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage/>,
            },
            {
                path: "/help",
                element: <Help/>,
            },
            {
                path: "/news",
                element: <News/>,
            },
            {
                path: "/gallery",
                element: <Gallery/>,
            },
            {
                path: "/contacts",
                element: <Contacts/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

