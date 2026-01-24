import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const Market = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>The Market | Corner Pharmacy Flora</title>
                <meta name="description" content="Explore our corner market for gifts, greeting cards, health essentials, and local goods in Flora, MS. More than just a pharmacy." />
            </Helmet>

            <PageHeader
                title="The Market"
                subtitle="More than just a pharmacy. A curated collection of local goods, gifts, and essentials."
            />

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bento-grid" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="bento-card" style={{ height: '300px', background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)' }}>
                            <h3>Gifts & Cards</h3>
                        </div>
                        <div className="bento-card" style={{ height: '300px', background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)' }}>
                            <h3>Local Honey & Jams</h3>
                        </div>
                        <div className="bento-card" style={{ height: '300px', background: 'linear-gradient(to bottom right, #fff7ed, #ffedd5)' }}>
                            <h3>Vitamins & Wellness</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Market;
