import React, { useState } from 'react';
import { Link } from 'react-router';
function Navbar() {

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
                </div>
            </div>
        </nav>
    )
}
export default Navbar;