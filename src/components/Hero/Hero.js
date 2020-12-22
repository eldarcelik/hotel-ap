import React from 'react';
import './Hero.css';

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

// setting default hero prop
Hero.defaultProps = {
    hero: "defaultHero"
}
