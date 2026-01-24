import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Corner Pharmacy
                </Link>

                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/transfer">Transfer/Refill</Link>
                    <Link to="/delivery">Delivery</Link>
                    <Link to="/vaccines">Vaccines</Link>
                    <Link to="/market">The Market</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
