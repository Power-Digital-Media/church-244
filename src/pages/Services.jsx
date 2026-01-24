import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { Pill, Repeat, Clock, Syringe, Truck, Package } from 'lucide-react';
import '../styles/BentoGrid.css'; // Reusing Bento styles for consistency

const Services = () => {
    const services = [
        { name: 'Prescription Filling', icon: Pill, desc: 'Fast, accurate filling with detailed counseling.' },
        { name: 'Medication Sync', icon: Clock, desc: 'Pick up all your meds on the same day each month.' },
        { name: 'Transfers', icon: Repeat, desc: 'We handle the paperwork to move your scripts here.' },
        { name: 'Immunizations', icon: Syringe, desc: 'Walk-in flu, strep, and shingles shots.' },
        { name: 'Free Delivery', icon: Truck, desc: 'Daily delivery to Flora and surrounding areas.' },
        { name: 'Drive-Thru', icon: Package, desc: 'Quick pickup without leaving your car.' },
    ];

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Pharmacy Services | Corner Pharmacy Flora</title>
                <meta name="description" content="Prescription filling, transfers, immunizations, and medication counseling in Flora, MS. Fast, friendly service you can trust." />
            </Helmet>

            <PageHeader
                title="Our Services"
                subtitle="Modern healthcare expertise with the personal attention you deserve."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridAutoRows: 'auto' }}>
                        {services.map(s => (
                            <div key={s.name} className="bento-card" style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
                                <div className="icon-circle" style={{ width: '40px', height: '40px' }}>
                                    <s.icon size={20} />
                                </div>
                                <h3>{s.name}</h3>
                                <p style={{ color: '#64748b', marginTop: '8px' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
