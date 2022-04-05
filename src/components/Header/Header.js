import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>
                <Link className='link1' to="/">Home</Link> 
                <Link className='link' to="Reviews">Reviews</Link>
                <Link className='link' to="Dashboard">Dashboard</Link>
                <Link className='link' to="Blogs">Blogs</Link>

            </nav>
        </div>
    );
};

export default Header;