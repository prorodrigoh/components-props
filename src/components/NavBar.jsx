import React from 'react';
import '../styles/navbar.css'

// react components MUST begin with Capital Letter
function NavBar(){

    return (
        <nav className='navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}


// call the component the same name as the file
export default NavBar