import React from 'react';
import './Card.css'

function Card({variant = 'square', children, bgColor = 'white', color = 'black'}) {
    return (
        <div className = {`card ${variant}`} style = {{backgroundColor: bgColor, color: color}}>
            {children}
        </div>
    );
}

export default Card;