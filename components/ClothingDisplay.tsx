// components/ClothingDisplay.tsx
import React from 'react';
import { Outfit, ClothingPieceName, CoatStyle, ShirtStyle, PantsStyle } from '../types';

import HatIcon from './icons/HatIcon';
import ShoesIcon from './icons/ShoesIcon';
import CoatIcon from './icons/CoatIcon';
import OuterShirtIcon from './icons/OuterShirtIcon';
import PantsIcon from './icons/PantsIcon';

interface ClothingDisplayProps {
    outfit: Outfit;
    onPieceSelect: (piece: ClothingPieceName) => void;
    selectedPiece: ClothingPieceName | null;
    showCoat: boolean;
}

const ClothingDisplay: React.FC<ClothingDisplayProps> = ({ outfit, onPieceSelect, selectedPiece, showCoat }) => {
    const pieceWrapper = (pieceName: ClothingPieceName, children: React.ReactNode, styles: React.CSSProperties, zIndex: number) => (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onPieceSelect(pieceName);
            }}
            className={`absolute cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 ${selectedPiece === pieceName ? 'scale-105' : ''}`}
            style={{ ...styles, zIndex }}
        >
            {children}
            {selectedPiece === pieceName && <div className="absolute inset-0 rounded-lg ring-4 ring-indigo-500 ring-offset-2 transition-all duration-200"></div>}
        </div>
    );

    return (
        <div className="relative w-[350px] h-[550px]">
            {pieceWrapper('hat', <HatIcon color={outfit.hat.color.hex} />, { top: 0, left: '50%', transform: 'translateX(-50%)' }, 50)}
            
            {showCoat && pieceWrapper('coat', <CoatIcon color={outfit.coat.color.hex} style={outfit.coat.style as CoatStyle} />, { top: '65px', left: '50%', transform: 'translateX(-50%)' }, 30)}
            
            {pieceWrapper('outerShirt', <OuterShirtIcon color={outfit.outerShirt.color.hex} style={outfit.outerShirt.style as ShirtStyle} />, { top: '70px', left: '50%', transform: 'translateX(-50%)' }, 20)}
            
            {pieceWrapper('pants', <PantsIcon color={outfit.pants.color.hex} style={outfit.pants.style as PantsStyle} />, { top: '235px', left: '50%', transform: 'translateX(-50%)' }, 10)}
            
            {pieceWrapper('shoes', <ShoesIcon color={outfit.shoes.color.hex} />, { top: '450px', left: '50%', transform: 'translateX(-50%)' }, 5)}
        </div>
    );
};

export default ClothingDisplay;
