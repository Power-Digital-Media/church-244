import React from 'react';
import { Helmet } from 'react-helmet-async';

const Market = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>The Market | Corner Pharmacy Flora</title>
                <meta name="description" content="Explore our corner market for gifts, greeting cards, health essentials, and local goods in Flora, MS. More than just a pharmacy." />
            </Helmet>
            <section className="section">
                <div className="container text-center">
                    <h1 className="section-title">The Corner Market</h1>
                    <p>More than just a pharmacy. Come see our curated selection of local goods.</p>

                    <div className="market-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        marginTop: '32px'
                    }}>
                        <div className="card" style={{ padding: '24px' }}><h3>Gifts & Cards</h3><p>For every occasion.</p></div>
                        <div className="card" style={{ padding: '24px' }}><h3>Local Honey</h3><p>From local beekeepers.</p></div>
                        <div className="card" style={{ padding: '24px' }}><h3>Essentials</h3><p>Milk, bread, and OTC meds.</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Market;
