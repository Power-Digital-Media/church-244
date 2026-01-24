import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Pharmacy Services | Corner Pharmacy Flora</title>
                <meta name="description" content="Prescription filling, transfers, immunizations, and medication counseling in Flora, MS. Fast, friendly service you can trust." />
            </Helmet>
            <section className="section">
                <div className="container">
                    <h1 className="section-title">Our Services</h1>
                    <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {['Prescription Filling', 'Transfers', 'Med Synchronization', 'Immunizations', 'Curbside Pickup', 'Free Delivery'].map(s => (
                            <div key={s} className="card" style={{ padding: '24px' }}>
                                <h3>{s}</h3>
                                <p style={{ marginTop: '8px', color: '#666' }}>Professional and fast {s.toLowerCase()} services.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
