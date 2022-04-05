import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>
                <Link className='link1' to="/">Home</Link> 
                <Link  to="Reviews">Reviews</Link>
                <Link  to="Dashboard">Dashboard</Link>
                <Link  to="Blogs">Blogs</Link>

            </nav>
        </div>
    );
};

export default Header;