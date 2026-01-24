import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import '../styles/StickyMobileBar.css';

const StickyMobileBar = () => {
    return (
        <div className="sticky-mobile-bar">
            <a href="tel:6016652299" className="sticky-btn sticky-call">
                <Phone size={18} />
                <span>Call Now</span>
            </a>
            <button className="sticky-btn sticky-transfer">
                <span>Transfer Rx</span>
                <ArrowRight size={18} />
            </button>
        </div>
    );
};

export default StickyMobileBar;
