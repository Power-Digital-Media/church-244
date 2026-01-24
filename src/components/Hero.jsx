import React from 'react';
import { Phone, ArrowRight, RefreshCw } from 'lucide-react';
import PillAnimation from './PillAnimation';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Your Hometown Pharmacy in Flora, MS</h1>
                    <p className="hero-subtitle">
                        Fast fills, friendly service, and free local delivery — with the care you won’t get at big chains.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Transfer Your Prescription <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn btn-secondary">
                            Refill a Prescription <RefreshCw size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>

                    <div className="hero-call-mobile">
                        <a href="tel:6016652299" className="call-link">
                            <Phone size={16} /> Call Now: (601) 665-2299
                        </a>
                    </div>

                    <div className="hero-badges">
                        <span>⭐ Locally owned</span>
                        <span>• Free local delivery</span>
                        <span>• Curbside pickup</span>
                        <span>• Vaccines available</span>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Animation Placeholder/Implementation */}
                    <PillAnimation />
                </div>
            </div>
        </section>
    );
};

export default Hero;
