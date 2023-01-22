
import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='nav-bar'>
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
            <div className='container-lg'>
                <a href="#" className="navbar-brand">Lorem</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse-navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                       <Link to="/"  className="nav-link">Home</Link>   
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"  className="nav-link">Contact</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to="#"  className="nav-link">Services</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to="#"  className="nav-link">Pricing</Link>  
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
