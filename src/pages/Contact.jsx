import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Contact Us | Corner Pharmacy & Market</title>
                <meta name="description" content="Visit Corner Pharmacy at 4835 Main St, Flora, MS. Call (601) 665-2299. Open Mon-Fri 8am-6pm. Your friendly local pharmacy." />
            </Helmet>

            <PageHeader
                title="Get in Touch"
                subtitle="We'd love to hear from you. Visit us on Main Street."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bento-grid" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className="bento-card">
                            <Phone size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />
                            <h3>Phone</h3>
                            <p>(601) 665-2299</p>
                        </div>
                        <div className="bento-card">
                            <MapPin size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />
                            <h3>Address</h3>
                            <p>4835 Main St, Flora, MS</p>
                        </div>
                        <div className="bento-card">
                            <Clock size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />
                            <h3>Hours</h3>
                            <p>Mon-Fri: 8am - 6pm</p>
                            <p>Sat: 8am - 12pm</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
