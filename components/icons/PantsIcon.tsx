// components/icons/PantsIcon.tsx
import React from 'react';
import { PantsStyle } from '../../types';

interface IconProps {
    color: string;
    style: PantsStyle;
}

const PantsIcon: React.FC<IconProps> = ({ color, style }) => {
    const path = style === 'long'
        ? "M0 55 L40 55 L40 200 L0 200 Z M60 55 L110 55 L110 200 L60 200 Z"
        : "M0 55 L40 55 L40 110 L0 110 Z M60 55 L110 55 L110 110 L60 110 Z";
    
    return (
        <svg
            width="100"
            height="200"
            viewBox="0 0 100 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
        >
             <path d="M0 0 L100 0 L100 55 L0 55 Z" fill={color} />
            <path d={path} fill={color} />
        </svg>
    );
};

export default PantsIcon;