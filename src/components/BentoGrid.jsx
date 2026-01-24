import React from 'react';
import { Pill, Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';
import '../styles/BentoGrid.css';

const BentoGrid = () => {
    return (
        <section className="bento-section section">
            <div className="container">
                <h2 className="section-title text-center">Modern Healthcare.<br />Old Fashioned Care.</h2>

                <div className="bento-grid">
                    {/* Card 1: Large Feature - Services */}
                    <div className="bento-card bento-large service-feature">
                        <div className="bento-content">
                            <div className="icon-circle"><Pill size={24} /></div>
                            <h3>Full Service Pharmacy</h3>
                            <p>From complex compounding to routine refills, we handle it all with precision and care.</p>
                            <div className="tags-row">
                                <span>Compounding</span>
                                <span>Med Sync</span>
                                <span>Testing</span>
                            </div>
                        </div>
                        <div className="bento-bg-decoration"></div>
                    </div>

                    {/* Card 2: Stat - Speed */}
                    <div className="bento-card bento-medium stat-card">
                        <div className="stat-number">10<span>min</span></div>
                        <p className="stat-label">Avg. Wait Time</p>
                        <Clock size={20} className="stat-icon" />
                    </div>

                    {/* Card 3: Feature - Delivery */}
                    <div className="bento-card bento-medium delivery-feature">
                        <Truck size={32} className="feature-icon" />
                        <h3>Free Delivery</h3>
                        <p>We bring the pharmacy to your doorstep. No fees, no hassle.</p>
                    </div>

                    {/* Card 4: Wide - Trust/Vaccines */}
                    <div className="bento-card bento-wide trust-feature">
                        <div className="trust-content">
                            <h3>Immunization Hub</h3>
                            <p>Flu, Shingles, COVID, and Tdap. Walk-ins always welcome.</p>
                            <button className="btn-link">Schedule Appointment &rarr;</button>
                        </div>
                        <div className="shield-visual">
                            <ShieldCheck size={80} strokeWidth={1} />
                        </div>
                    </div>

                    {/* Card 5: Map/Location */}
                    <div className="bento-card bento-tall map-card">
                        <div className="map-overlay">
                            <MapPin size={24} />
                            <h3>Find Us</h3>
                            <p>4835 Main St, Flora</p>
                        </div>
                        {/* Placeholder for real map image */}
                        <div className="map-bg"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
