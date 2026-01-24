import React from 'react';
import { Helmet } from 'react-helmet-async';

const Vaccines = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Vaccines & Immunizations | Corner Pharmacy Flora</title>
                <meta name="description" content="Flu, Shingles, Pneumonia, and Tdap vaccines available in Flora, MS. Walk-ins welcome for most immunizations." />
            </Helmet>
            <section className="section">
                <div className="container text-center">
                    <h1 className="section-title">Immunizations & Vaccines</h1>
                    <p>Walk-ins welcome for most vaccines. Call ahead for Shingles.</p>
                    <div className="card" style={{ padding: '24px', maxWidth: '600px', margin: '24px auto' }}>
                        <ul style={{ textAlign: 'left', listStyle: 'disc', paddingLeft: '20px' }}>
                            <li>Seasonal Flu</li>
                            <li>Shingles (Shingrix)</li>
                            <li>Pneumonia</li>
                            <li>Tdap (Tetanus, Diphtheria, Pertussis)</li>
                        </ul>
                    </div>
                    <button className="btn btn-primary">Call to Schedule</button>
                </div>
            </section>
        </div>
    );
};

export default Vaccines;
