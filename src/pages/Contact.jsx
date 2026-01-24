import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Contact Us | Corner Pharmacy & Market</title>
                <meta name="description" content="Visit Corner Pharmacy at 4835 Main St, Flora, MS. Call (601) 665-2299. Open Mon-Fri 8am-6pm. Your friendly local pharmacy." />
            </Helmet>
            <section className="section">
                <div className="container text-center">
                    <h1 className="section-title">Contact Us</h1>

                    <div className="contact-details" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card" style={{ padding: '24px' }}>
                            <Phone size={32} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                            <h3>Phone</h3>
                            <p>(601) 665-2299</p>
                        </div>
                        <div className="card" style={{ padding: '24px' }}>
                            <MapPin size={32} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                            <h3>Address</h3>
                            <p>4835 Main St, Flora, MS 39071</p>
                        </div>
                        <div className="card" style={{ padding: '24px' }}>
                            <Clock size={32} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                            <h3>Hours</h3>
                            <p>Mon-Fri: 8am - 6pm</p>
                            <p>Sat: 8am - 12pm</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
