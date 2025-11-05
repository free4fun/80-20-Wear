// components/icons/HatIcon.tsx
import React from 'react';

interface IconProps {
    color: string;
}

const HatIcon: React.FC<IconProps> = ({ color }) => {
    return (
        <svg
            width="80"
            height="50"
            viewBox="0 0 100 60"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
        >
            {/* Visera de la gorra */}
            <ellipse cx="25" cy="35" rx="35" ry="8" fill={color} />
            {/* Corona de la gorra */}
            <path
                d="M20 15 C20 10, 30 8, 45 8 C60 8, 80 10, 85 15 L85 35 C85 40, 75 42, 60 42 C45 42, 25 40, 20 35 Z"
                fill={color}
            />
            {/* Panel frontal */}
            <path
                d="M30 12 C30 8, 40 6, 50 6 C60 6, 75 8, 78 12 L78 32 L30 32 Z"
                fill={color}
            />
        </svg>
    );
};

export default HatIcon;