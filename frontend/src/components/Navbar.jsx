import React, { useState } from 'react';

function Navbar() {

    return(
        <nav className="bg-navBgC fixed w-screen z-50 backdrop-blur-2xl shadow-sm border-b-[1px] ">
            <div className='w-full lg:w-4/5 container px-6 py-2 md:py-4 mx-auto'>
                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <a href="/">
                                <img src="../../images/Saarthi-logo-transparent.png" alt="Saarthi Logo" className='h-12'/>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:mx-1 lg:backdrop-blur-none lg:backdrop-brightness-100 py-2 lg:py-0 text-lg font-semibold gap-2 mt-6 md:mt-8 lg:mt-0 lg:bg-transparent px-4 rounded-xl space-x-10 text-teal-50'> 
                        <a href="">Sponsors</a>
                        <a href=''> About</a>
                        <a href=''>Login / SignUp</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;