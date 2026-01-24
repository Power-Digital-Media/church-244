import React from 'react';
import '../styles/Cards.css';

export const Card = ({ children, className = '' }) => {
    return <div className={`card ${className}`}>{children}</div>;
};

export const IconBox = ({ icon: Icon, title, description }) => {
    return (
        <div className="icon-box">
            <div className="icon-box-icon">
                <Icon size={32} />
            </div>
            <h3 className="icon-box-title">{title}</h3>
            {description && <p className="icon-box-desc">{description}</p>}
        </div>
    );
};

export const ActionCard = ({ title, icon: Icon, onClick, className = '' }) => {
    return (
        <div className={`action-card ${className}`} onClick={onClick} role="button" tabIndex={0}>
            <Icon size={40} className="action-card-icon" />
            <span className="action-card-title">{title}</span>
        </div>
    );
};
