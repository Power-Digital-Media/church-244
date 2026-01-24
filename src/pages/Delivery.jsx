import React from 'react';
import { Helmet } from 'react-helmet-async';

const Delivery = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Free Prescription Delivery | Corner Pharmacy Flora</title>
                <meta name="description" content="We offer free prescription delivery within Flora, MS. Call us to arrange curbside pickup or home delivery for your medications." />
            </Helmet>
            <section className="section">
                <div className="container text-center">
                    <h1 className="section-title">Free Local Delivery</h1>
                    <p>We deliver to all addresses within Flora city limits.</p>
                    <button className="btn btn-primary" style={{ marginTop: '24px' }}>Call to Arrange Delivery</button>
                </div>
            </section>
        </div>
    );
};

export default Delivery;
