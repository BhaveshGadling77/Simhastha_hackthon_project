import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Feature from "./components/feature";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Tagline />
     <div className="space-x-9 justify-center align-middle text-center">
      <Feature />
      <Feature />
      <Feature />
      </div> 
    </>
  );
}

export default App;
