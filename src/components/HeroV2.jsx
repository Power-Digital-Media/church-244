import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import '../styles/HeroV2.css';

const HeroV2 = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would start the onboarding flow
        alert('We will text you at ' + phoneNumber + ' to start your transfer!');
    };

    return (
        <section className="hero-v2">
            <div className="container hero-v2-container">

                {/* Left: Content */}
                <div className="hero-v2-content">
                    <div className="hero-badge-capsule">
                        <span className="dot"></span> Now accepting new patients in Flora
                    </div>

                    <h1 className="hero-v2-title">
                        The Pharmacy <br />
                        <span className="text-serif-italic">Reimagined.</span>
                    </h1>

                    <p className="hero-v2-subtitle">
                        Skip the line. Free same-day delivery. <br />
                        A smarter, kinder pharmacy experience for you and your family.
                    </p>

                    <form className="hero-input-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <Smartphone size={20} className="input-icon" />
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-gold">
                            Switch Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>

                    <div className="hero-trust">
                        <div className="trust-item"><CheckCircle size={16} /> Accepts All Major Insurance</div>
                        <div className="trust-item"><CheckCircle size={16} /> Free Local Delivery</div>
                    </div>
                </div>

                {/* Right: Abstract Visual */}
                <div className="hero-v2-visual">
                    <div className="abstract-sphere-container">
                        <div className="abstract-sphere"></div>
                        <div className="glass-card-float card-1">
                            <span>💊 Rx Ready</span>
                            <strong>Tue, 4:00 PM</strong>
                        </div>
                        <div className="glass-card-float card-2">
                            <span>🚚 Out for Delivery</span>
                            <strong>Arriving Soon</strong>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroV2;
