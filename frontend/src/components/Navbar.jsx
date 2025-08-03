import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="bg-navBgC p-4">
            <div className='inline-block'>
               
            </div> <img src="../../images/favicon.jpeg" alt="image" className='h-12'/>
            <div className="container mx-auto flex items-start justify-end space-x-10 text-white">
                <a href="" className='font-bold'>Sponsers</a>
                <a href="" className='font-bold'>About</a>
                <a href="" className='font-bold'>Login/SignUp</a>
            </div>
        </nav>
    )
}
export default Navbar;