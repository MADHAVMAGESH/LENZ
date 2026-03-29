import React from 'react';
import './GlassmorphicInput.css';

const GlassmorphicInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input className="glassmorphic-input" {...props} />
    );
};

export default GlassmorphicInput;
