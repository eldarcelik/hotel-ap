import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { SiHotelsDotCom } from 'react-icons/si';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToogle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="nav-logo">
                        <SiHotelsDotCom />OTEL<span> AP</span>
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToogle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
