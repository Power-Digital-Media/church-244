import React from 'react';
import '../styles/PageHeader.css';

const PageHeader = ({ title, subtitle, align = 'center' }) => {
    return (
        <header className={`page-header align-${align}`}>
            <div className="container">
                <h1 className="page-header-title">
                    {title}
                </h1>
                {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
            </div>
        </header>
    );
};

export default PageHeader;
