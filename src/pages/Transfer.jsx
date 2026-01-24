import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { Phone, CheckCircle } from 'lucide-react';

const Transfer = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Transfer & Refill Prescriptions | Corner Pharmacy Flora</title>
                <meta name="description" content="Easily transfer your prescriptions to Corner Pharmacy. We handle the calls for you. Fast refills and free local delivery available." />
            </Helmet>

            <PageHeader
                title="Switch to Corner Pharmacy"
                subtitle="You deserve a pharmacist who knows your name. We make transferring easy."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bento-card bento-wide" style={{ maxWidth: '800px', margin: '0 auto', background: '#022c22', color: 'white' }}>
                        <div className="bento-content text-center">
                            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '24px' }}>Ready to make the switch?</h2>
                            <p style={{ marginBottom: '32px', fontSize: '1.2rem', opacity: 0.9 }}>
                                Just give us your old pharmacy's information, and we'll handle the entire transfer process for you. No phone calls required on your end.
                            </p>

                            <div className="flex-center" style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="#d4af37" /> We call your doctor</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="#d4af37" /> We handle insurance</div>
                            </div>

                            <a href="tel:6016652299" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call (601) 665-2299
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Transfer;
