// components/icons/OuterShirtIcon.tsx
import React from 'react';
import { ShirtStyle } from '../../types';

interface IconProps {
    color: string;
    style: ShirtStyle;
}

const OuterShirtIcon: React.FC<IconProps> = ({ color, style }) => {
  // Izquierda = barra “/” gruesa. Derecha = reflejo simétrico.
  const sleevePath =
    style === "long-sleeve"
      ? "M35 10 L55 10 L35 140 L10 140 Z M145 10 L165 10 L190 140 L165 140 Z"
      : "M35 10 L65 10 L40 70 L20 70 Z M135 10 L165 10 L180 70 L160 70 Z";

  return (
    <svg width="200" height="200" viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
      {/* cuerpo */}
      <path d="M50 10 L150 10 L150 160 L50 160 Z" fill={color} />
      {/* mangas */}
      <path d={sleevePath} fill={color} />
      {/* cuello */}
      <path d="M80 0 L120 0 L120 20 L80 20 Z" fill={color} />
    </svg>
  );
};


export default OuterShirtIcon;