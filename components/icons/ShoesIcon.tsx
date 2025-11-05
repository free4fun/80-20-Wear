// components/icons/ShoesIcon.tsx
import React from 'react';

interface IconProps {
    color: string;
}

const ShoesIcon: React.FC<IconProps> = ({ color }) => {
    return (
        <svg
            width="110"
            height="100"
            viewBox="0 0 140 60"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
        >
            {/* Left Shoe */}
            <g transform="translate(0, 0)">
                <path d="M5,30 C0,10 30,0 60,10 L65,40 L5,40 Z" fill={color} />

            </g>
            {/* Right Shoe */}
            <g transform="translate(70, 0)">
                 <path d="M65,30 C70,10 40,0 10,10 L5,40 L65,40 Z" fill={color} />
            </g>
        </svg>
    );
};

export default ShoesIcon;