import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  {createBrowserRouter, Router, RouterProvider, Link} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Feature from "./components/feature";
import ReviewCard from "./components/ReviewCard";
import Footer from "./components/footer";
import DashBoard from "./components/DashBoard/main";
import LoginPage from "./components/LoginPage/main";
import About from "./components/About/About";import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


function App() {
  const [count, setCount] = useState(0);
  const [Review, setReview] = useState([{
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "This product exceeded my expectations! The quality is outstanding and the customer service was excellent.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review:
        "Great value for money. Would definitely recommend to others looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Absolutely love it! The features are exactly what I needed, and it's so easy to use.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review:
        "Very impressed with the quality and attention to detail. A fantastic product overall.",
    },
  ])
  const router = createBrowserRouter([
    {path:"/", element:<App/>},
    {path:"/dashboard",element:<DashBoard />},
    {path:"/loginpage", element:<LoginPage/>},
    {path:"/about", element: <About/>}, 
    {path:"*", element:<NotFoundPage/>}
])
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <RouterProvider router={router}/>
        <Tagline />
        <div className="justify-center align-middle text-center">
          <Feature />
          <Feature />
          <Feature />
        </div>
        <br />
        <br />
        
        <div className="columns-1 space-x-4">
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        <ReviewCard props={Review}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
