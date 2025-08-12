import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Layout from './layout.jsx'
import DashBoard from './components/DashBoard/main.jsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "about",
          element: <About />
        },
        {
          path: "dashboard",
          element: <DashBoard />
        },
        {
          path: "*",
          element: <NotFoundPage />
        },
      ],
    },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
