import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { Truck } from 'lucide-react';

const Delivery = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Free Prescription Delivery | Corner Pharmacy Flora</title>
                <meta name="description" content="We offer free prescription delivery within Flora, MS. Call us to arrange curbside pickup or home delivery for your medications." />
            </Helmet>

            <PageHeader
                title="We Come to You"
                subtitle="Free delivery to Flora and surrounding areas. Because sometimes you just can't make it to the pharmacy."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bento-card bento-medium" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                        <Truck size={48} color="#d4af37" style={{ marginBottom: '24px' }} />
                        <h3>Same-Day Delivery</h3>
                        <p style={{ margin: '16px 0 32px', color: '#64748b' }}>
                            Call before 12:00 PM for same-day service. We deliver to your home or office.
                        </p>
                        <button className="btn-dark">Call to Arrange</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Delivery;
