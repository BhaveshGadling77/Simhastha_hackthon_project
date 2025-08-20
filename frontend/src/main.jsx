import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import About from "./components/About/About.jsx";
import Layout from "./layout.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Settings from "./components/DashBoard/Settings/settings.jsx";
import SignOut from "./components/DashBoard/SignOut/signout.jsx";
import DashBoardLayout from "./dashBoardLayout.jsx";
import HealthCenters from "./components/DashBoard/HealthCenters.jsx";
import RestRooms from "./components/DashBoard/RestRooms.jsx";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "dashboard",
                element: <DashBoardLayout />,
                children:[
                    {
                        path:"",
                        element:<DashBoard/>
                    },
                    {
                        path:"settings",
                        element:<Settings />
                    },
                    {
                        path:"signout",
                        element:<SignOut />
                    },
                    {
                        path:"healthcenters",
                        element:<HealthCenters/>
                    },
                    {
                        path:"restrooms",
                        element:<RestRooms/>
                    }
                ]
            },
            {
                path: "loginpage",
                element: <LoginPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>
);
