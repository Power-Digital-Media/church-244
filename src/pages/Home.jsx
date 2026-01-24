import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroV2 from '../components/HeroV2';
import BentoGrid from '../components/BentoGrid';
import { Truck, Heart, Clock, MapPin } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Corner Pharmacy & Market | Flora, MS</title>
                <meta name="description" content="Your trusted local independent pharmacy in Flora, MS. Fast prescriptions, free delivery, vaccines, and a friendly market. Locally owned and operated." />
            </Helmet>
            <HeroV2 />

            <BentoGrid />

            {/* Brand Statement / Trust Section */}
            <section className="section" style={{ padding: '100px 0' }}>
                <div className="container text-center" style={{ maxWidth: '900px' }}>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '32px' }}>
                        "The pharmacy of the future is actually <br />
                        <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>the pharmacy of the past.</span>"
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                        We believe technology should make us <em>more</em> human, not less.
                        That's why we use modern tools to give us more time to do what matters:
                        talking to you.
                    </p>
                    <div style={{ marginTop: '48px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80"
                            alt="Pharmacist consulting patient"
                            style={{ borderRadius: '24px', opacity: 0.8, boxShadow: 'var(--shadow-soft)' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
