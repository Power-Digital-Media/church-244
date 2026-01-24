import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { ActionCard, IconBox } from '../components/Cards';
import StickyMobileBar from '../components/StickyMobileBar';
import { Pill, RefreshCw, Truck, Heart, Clock, MapPin } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Corner Pharmacy & Market | Flora, MS</title>
                <meta name="description" content="Your trusted local independent pharmacy in Flora, MS. Fast prescriptions, free delivery, vaccines, and a friendly market. Locally owned and operated." />
            </Helmet>
            <Hero />

            {/* Section 1: Quick Actions */}
            <section className="section section-quick-actions">
                <div className="container">
                    <h2 className="section-title text-center">What Can We Help You With Today?</h2>
                    <div className="quick-actions-grid">
                        <ActionCard title="Transfer Prescription" icon={Pill} />
                        <ActionCard title="Refill Prescription" icon={RefreshCw} />
                        <ActionCard title="Delivery & Curbside" icon={Truck} />
                    </div>
                </div>
            </section>

            {/* Section 2: Why Choose Us */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Why Flora Chooses Corner Pharmacy</h2>
                    <div className="features-grid">
                        <IconBox title="Personal Local Care" icon={Heart} description="We treat you like family, not a number." />
                        <IconBox title="Fast Reliable Service" icon={Clock} description="Prescriptions filled in minutes, not hours." />
                        <IconBox title="Free Local Delivery" icon={Truck} description="We bring your meds right to your door." />
                        <IconBox title="Curbside Pickup" icon={MapPin} description="Stay in your car, we'll run it out to you." />
                    </div>
                </div>
            </section>

            {/* Section 3: Services Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Pharmacy Services</h2>
                    <div className="services-list-grid">
                        {['Prescription Filling', 'Prescription Transfers', 'Medication Counseling', 'Over-the-Counter Products', 'Immunizations / Vaccines', 'Medication Support'].map(service => (
                            <div key={service} className="service-item">
                                <div className="service-dot"></div>
                                {service}
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '32px' }}>
                        <button className="btn btn-secondary">View All Services</button>
                    </div>
                </div>
            </section>

            {/* Section 4: Delivery Highlight */}
            <section className="section bg-primary-soft">
                <div className="container delivery-highlight">
                    <div className="delivery-icon">
                        <Truck size={48} color="#1B5E20" />
                    </div>
                    <div className="delivery-content">
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>Free Prescription Delivery in Flora</h2>
                        <p className="delivery-text">Don't feel like getting out? We'll bring your medications directly to your doorstep at no extra cost.</p>
                        <div className="delivery-actions">
                            <button className="btn btn-primary">Request Delivery Info</button>
                            <button className="btn btn-secondary">Call to Arrange</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Vaccines */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">Vaccines Available</h2>
                    <div className="vaccine-badges">
                        <span className="vaccine-badge">Flu</span>
                        <span className="vaccine-badge">Shingles</span>
                        <span className="vaccine-badge">Pneumonia</span>
                        <span className="vaccine-badge">Tdap</span>
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: '24px' }}>Call to Schedule</button>
                </div>
            </section>

            {/* Section 6: Market */}
            <section className="section bg-light">
                <div className="container market-section">
                    <div className="market-text">
                        <h2 className="section-title">More Than a Pharmacy — It’s a Corner Market Too</h2>
                        <ul className="market-list">
                            <li>Gifts & greeting cards</li>
                            <li>Health & wellness items</li>
                            <li>Convenient local essentials</li>
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '24px' }}>Explore The Market</button>
                    </div>
                </div>
            </section>

            {/* Section 7: Local Trust */}
            <section className="section">
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h2 className="section-title">Local Service You Can Count On</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Corner Pharmacy & Market is proud to serve Flora. We believe in knowing our neighbors by name and taking the time to answer your questions.
                    </p>
                </div>
            </section>

            {/* Section 8: Contact */}
            <section className="section bg-dark text-white">
                <div className="container">
                    <h2 className="section-title text-center" style={{ color: '#fff' }}>Visit Us in Flora, MS</h2>
                    <div className="contact-info text-center">
                        <p className="address">4835 Main St, Flora, MS 39071</p>
                        <p className="phone" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '16px 0' }}>(601) 665-2299</p>
                        <div className="contact-actions">
                            <button className="btn btn-primary">Get Directions</button>
                            <a href="tel:6016652299" className="btn btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>Call Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <StickyMobileBar />
        </div>
    );
};

export default Home;
