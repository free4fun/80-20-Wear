// components/Controls.tsx
import React from 'react';
import { ClothingPieceName, Outfit, Color, PantsStyle, ShirtStyle, CoatStyle } from '../types';
import ColorPalette from './ColorPalette';

interface ControlsProps {
    selectedPiece: ClothingPieceName | null;
    outfit: Outfit;
    onColorSelect: (color: Color) => void;
    onCancelColorSelect: () => void;
    availableColors: Color[];
    onStyleChange: (piece: ClothingPieceName, style: string) => void;
}

const Controls: React.FC<ControlsProps> = ({
    selectedPiece,
    outfit,
    onColorSelect,
    onCancelColorSelect,
    availableColors,
    onStyleChange
}) => {
    
    const renderStyleOption = (
        pieceName: ClothingPieceName,
        label: string,
        value: string | undefined,
        options: { value: string; label: string }[]
    ) => (
         <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
                onChange={(e) => onStyleChange(pieceName, e.target.value)}
                value={value}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>
    );

    return (
        <div className="p-6 bg-gray-50 rounded-lg space-y-6 h-full flex flex-col">
            <div className="flex-grow min-h-[450px]">
                {selectedPiece ? (
                    <ColorPalette
                        pieceName={outfit[selectedPiece].name}
                        availableColors={availableColors}
                        onColorSelect={onColorSelect}
                        onCancel={onCancelColorSelect}
                    />
                ) : (
                    <div className="text-center text-gray-500 py-8 px-4 bg-white rounded-md h-full flex flex-col justify-center items-center">
                        <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        <h3 className="text-lg font-semibold text-gray-700">Selecciona una Prenda</h3>
                        <p className="text-sm mt-1">Haz clic en una prenda del maniquí para ver los colores disponibles y cambiarla.</p>
                    </div>
                )}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200 flex-shrink-0">
                <h3 className="text-xl font-bold text-gray-800">Personaliza el Estilo</h3>
                 {renderStyleOption('coat', 'Estilo de Abrigo', outfit.coat.style, [
                    { value: 'jacket', label: 'Chaqueta' },
                    { value: 'open-shirt', label: 'Camisa Abierta' },
                ])}
                {renderStyleOption('outerShirt', 'Estilo de Camisa', outfit.outerShirt.style, [
                    { value: 'long-sleeve', label: 'Manga Larga' },
                    { value: 'short-sleeve', label: 'Manga Corta' },
                ])}
                {renderStyleOption('pants', 'Estilo de Pantalón', outfit.pants.style, [
                    { value: 'long', label: 'Pantalones Largos' },
                    { value: 'shorts', label: 'Pantalones Cortos' },
                ])}
            </div>
        </div>
    );
};

export default Controls;
