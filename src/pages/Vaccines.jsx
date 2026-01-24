import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const Vaccines = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Vaccines & Immunizations | Corner Pharmacy Flora</title>
                <meta name="description" content="Flu, Shingles, Pneumonia, and Tdap vaccines available in Flora, MS. Walk-ins welcome for most immunizations." />
            </Helmet>

            <PageHeader
                title="Vaccines & Immunizations"
                subtitle="Protect yourself and your family. Walk-ins available for most vaccines."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container text-center">
                    <div className="bento-grid" style={{ maxWidth: '800px', margin: '0 auto', gridTemplateColumns: '1fr 1fr' }}>
                        <div className="bento-card" style={{ gridColumn: 'span 1' }}><h3>Flu Shots</h3><p>Seasonal</p></div>
                        <div className="bento-card" style={{ gridColumn: 'span 1' }}><h3>Shingles</h3><p>Shingrix</p></div>
                        <div className="bento-card" style={{ gridColumn: 'span 1' }}><h3>Pneumonia</h3><p>Prevnar 20</p></div>
                        <div className="bento-card" style={{ gridColumn: 'span 1' }}><h3>Tdap</h3><p>Tetanus</p></div>
                    </div>
                    <button className="btn-gold" style={{ marginTop: '48px' }}>Call to Schedule</button>
                </div>
            </section>
        </div>
    );
};

export default Vaccines;
