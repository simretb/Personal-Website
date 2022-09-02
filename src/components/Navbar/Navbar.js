import React, { Component } from 'react'
import './Navbar.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from '../About/About';

 class Navbar extends Component {
    render() {
        return (
            <nav className="nav-container">
                <div className="logo">Simret D Belay</div>
                    <ul className="nav-links">  
                        <li><Link to="/home-container">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/myskills">Skills</Link></li>
                        
                    </ul>
            
            </nav>
        )
    }
}
export default Navbar