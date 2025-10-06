import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/mobiles">Mobiles</NavLink>
              <NavLink to="/laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;