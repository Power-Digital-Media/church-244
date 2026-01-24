import React from 'react';
import '../styles/PillAnimation.css';

const PillAnimation = () => {
    // Generate random trajectories for pills
    const pills = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        style: {
            '--tx': `${(Math.random() * 200 - 50)}px`, // Spread mostly right/down
            '--ty': `${(Math.random() * 150 + 20)}px`,
            '--r': `${Math.random() * 360}deg`,
            animationDelay: `${1.2 + Math.random() * 0.3}s` // Start after bottle lands
        }
    }));

    return (
        <div className="pill-animation-container" style={{ position: 'relative', width: '250px', height: '250px' }}>
            <div className="pill-bottle">
                <div className="pill-cap"></div>
                <div className="bottle-label" style={{
                    position: 'absolute', top: '20px', left: '10%', width: '80%', height: '60%', background: '#fff', opacity: 0.8
                }}></div>
            </div>
            {pills.map(pill => (
                <div key={pill.id} className="pill" style={pill.style}></div>
            ))}
        </div>
    );
};

export default PillAnimation;
