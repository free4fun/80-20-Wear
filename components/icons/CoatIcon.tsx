// components/icons/CoatIcon.tsx
import React from 'react';
import { CoatStyle } from '../../types';

interface IconProps {
    color: string;
    style: CoatStyle;
}

const CoatIcon: React.FC<IconProps> = ({ color, style }) => {
    const styles = {
        'jacket': {
            // Cuerpo principal - abierto arriba para mostrar la camisa
            path: "M50 10 L50 220 L120 220 L80 10 Z M150 10 L150 220 L80 220 L120 10 Z",
            // Mangas más largas y anchas
            sleeves: "M35 10 L55 10 L45 170 L10 150 Z M145 10 L165 10 L190 150 L155 170 Z"
        },
        'open-shirt': {
            // Cuerpo similar al jacket pero más corto
            path: "M50 10 L50 160 L90 160 L85 10 Z M150 10 L150 160 L115 160 L115 10 Z",
            // Mangas más cortas y menos anchas que el jacket
            sleeves: "M35 10 L55 10 L40 150 L10 150 Z M145 10 L165 10 L190 150 L160 150 Z"
        }
    };
    
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
        >
            <path d={styles[style].sleeves} fill={color} />
            <path d={styles[style].path} fill={color} />
            
        </svg>
    );
};

export default CoatIcon;