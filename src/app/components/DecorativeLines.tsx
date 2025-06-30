// Si no funcionan las clases bg-albatrosBlue/Red, usar esto:
// src/app/components/DecorativeLines.jsx
import React from 'react';

const DecorativeLines = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Línea Azul con estilo in-line */}
            <div style={{ backgroundColor: '#1A2B4B' }} className="h-2"></div>
            {/* Línea Roja con estilo in-line */}
            <div style={{ backgroundColor: '#E53E3E' }} className="h-1"></div>
        </div>
    );
};

export default DecorativeLines;