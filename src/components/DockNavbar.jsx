import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Pill, Repeat, Truck, Syringe, ShoppingBag, Phone } from 'lucide-react';
import '../styles/DockNavbar.css';

const DockNavbar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/services', icon: Pill, label: 'Services' },
        { path: '/transfer', icon: Repeat, label: 'Transfer' },
        { path: '/delivery', icon: Truck, label: 'Delivery' },
        { path: '/vaccines', icon: Syringe, label: 'Vaccines' },
        { path: '/market', icon: ShoppingBag, label: 'Market' },
        { path: '/contact', icon: Phone, label: 'Contact' },
    ];

    return (
        <>
            {/* Top Brand Bar for Mobile/Desktop Brand Visibility */}
            <div className="brand-bar">
                <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                    <span className="brand-logo-text">CORNER PHARMACY</span>
                </div>
            </div>

            {/* Floating Dock */}
            <div className="dock-wrapper">
                <nav className="dock-container">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`dock-item ${isActive ? 'active' : ''}`}
                                title={item.label}
                            >
                                <div className="dock-icon-box">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="dock-label">{item.label}</span>
                                {isActive && <span className="dock-dot"></span>}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default DockNavbar;
