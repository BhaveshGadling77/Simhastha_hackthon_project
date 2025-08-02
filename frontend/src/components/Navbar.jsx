import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="bg-orange-600 p-4">
            <div className="container mx-auto flex items-start justify-end space-x-10 text-white">
                <a href="">Sponsers</a>
                <a href="">About</a>
                <a href="">Login/SignUp</a>
            </div>
        </nav>
    )
}
export default Navbar;