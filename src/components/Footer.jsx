import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3 className="footer-logo">Corner Pharmacy</h3>
                    <p className="footer-tagline">Your hometown health partner in Flora, MS.</p>
                    <div className="footer-social">
                        {/* Placeholder for social links */}
                        <span className="social-icon"><Facebook size={20} /></span>
                    </div>
                </div>

                <div className="footer-nav">
                    <h4>Navigate</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/transfer">Transfer / Refill</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/vaccines">Vaccines</Link></li>
                        <li><Link to="/market">The Market</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p className="contact-item"><MapPin size={16} /> 4835 Main St, Flora, MS 39071</p>
                    <a href="tel:6016652299" className="contact-item"><Phone size={16} /> (601) 665-2299</a>
                    <p className="contact-item"><Clock size={16} /> Mon-Fri: 8am - 6pm</p>
                    <p className="contact-item" style={{ marginLeft: '24px' }}>Sat: 8am - 12pm</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} Corner Pharmacy & Market. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
