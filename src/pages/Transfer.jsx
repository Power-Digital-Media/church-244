import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight } from 'lucide-react';

const Transfer = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Transfer & Refill Prescriptions | Corner Pharmacy Flora</title>
                <meta name="description" content="Easily transfer your prescriptions to Corner Pharmacy. We handle the calls for you. Fast refills and free local delivery available." />
            </Helmet>
            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="section-title">Transfer or Refill Your Prescription</h1>
                    <p className="page-subtitle" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
                        Moving your prescriptions to Corner Pharmacy is easy. We handle the paperwork for you.
                    </p>

                    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', padding: '32px' }}>
                        <h2 style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>How to Transfer</h2>

                        <div className="steps" style={{ textAlign: 'left', marginBottom: '32px' }}>
                            <div style={{ marginBottom: '16px' }}><strong>1. Call or Visit Us</strong> <br />Give us a call or stop by with your bottle.</div>
                            <div style={{ marginBottom: '16px' }}><strong>2. We Contact Your Old Pharmacy</strong> <br />We'll get your info from the big chain.</div>
                            <div><strong>3. We Fill It Fast</strong> <br />Usually ready in 15 minutes or less.</div>
                        </div>

                        <div className="transfer-actions" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <a href="tel:6016652299" className="btn btn-primary">
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call to Transfer
                            </a>
                            <button className="btn btn-secondary">
                                Refill Prescription
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Transfer;
