import React, { useState } from "react";
import { Link } from "react-router";
import {FaTimes} from "react-icons/fa"

// import {CiMenuFries} from "react-icons/CimenuFries"
import { CiMenuFries } from "react-icons/ci";


function Navbar() {
// function handleClick() {
//     setClick(!click)
// }
//     const [click, setClick] = useState(false)
//   const content = (
//     <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800">
//       <ul className="text-center text-xl p-20">
//         <Link spy={true} smooth={true} to="/dashboard" className="text-lg">
//           <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-600 hover:rounded">DashBoard</li>
//         </Link>
//         <Link spy={true} smooth={true} to="/about" className="text-lg">
//           {" "}
//           <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-600 hover:rounded">About</li>
//         </Link>
//         <Link spy={true} smooth={true} to="/loginpage" className="text-lg">
//           <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-600 hover:rounded">Login / SignUp</li>
//         </Link>
//       </ul>
//     </div>
//   );
//   return (
//     <nav className="bg-bl">
//       <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
//         <div className="flex items-center flex-1">
//           <span className="text-3xl font-bold">Logo</span>
//         </div>
//         <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
//           <div className="flex gap-8 mr-16 text-[18px]">
//             <ul className="inline-block">
//               <Link spy={true} smooth={true} to="/dashboard" className="text-lg">
//                 <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-600 hover:border-fuchsia-500 cursor-pointer">DashBoard</li>
//               </Link>
//               <Link spy={true} smooth={true} to="/about" className="text-lg">
//                 <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-600 hover:border-fuchsia-500 cursor-pointer">About</li>
//               </Link>
//               <Link spy={true} smooth={true} to="/loginpage" className="text-lg">
//                 <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-600 hover:border-fuchsia-500 cursor-pointer">Login / SignUp</li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div>
//             {click && content}
//         </div>
//         <button className="block sm:hidden transition " onClick={handleClick}>
//             {click ? <FaTimes/> : <CiMenuFries/>}
//         </button>
//       </div>
//     </nav>
//   );
//}
      return(
          <nav className="bg-navBgC w-screen z-50 backdrop-blur-sm fixed shadow-sm border-b-[1px]">
              <div className='w-full lg:w-4/5 container px-6 py-2 md:py-4 mx-auto'>
                  <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                      <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                              <Link to="/">
                                  <img src="/images/Saarthi-logo-transparent.png" alt="Saarthi Logo" className='h-12'/>
                              </Link>
                              <Link>
                              <p className='ml-6 font-bold text-2xl text-center text-white' id='Name'>Saarthi</p>
                              </Link>
                          </div>
                      </div>
                      <div className='flex flex-c lg:mx-1 lg:backdrop-blur-none lg:backdrop-brightness-100 py-2 lg:py-0 font-bold gap-2 mt-6 md:mt-8 lg:mt-0 px-4 space-x-10 text-teal-50 overflow-hidden'>
                          <Link to="/dashboard" className='text-lg'>Sponsors</Link>
                          <Link to='/about' className='text-lg'> About</Link>
                          <Link to='/loginpage' className='text-lg'>Login / SignUp</Link>
                      </div>
                      {/* dropDown menu */}

                  </div>
              </div>
          </nav>
  ) 
}
export default Navbar;
