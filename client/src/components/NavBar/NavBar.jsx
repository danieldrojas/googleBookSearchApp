import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Google Books</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Search <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Saved</Link>
                        </li>                        
                    </ul>
     
</nav>
        </div>
    );
};

export default NavBar;