// components/ColorPalette.tsx
import React from 'react';
import { Color } from '../types';

interface ColorPaletteProps {
    pieceName: string;
    availableColors: Color[];
    onColorSelect: (color: Color) => void;
    onCancel: () => void;
}

// Fix: Moved ColorSwatch outside of ColorPalette to be a standalone component.
// This resolves the TypeScript error with the `key` prop and is a React best practice.
interface ColorSwatchProps {
    color: Color;
    onColorSelect: (color: Color) => void;
}

// Fix: Explicitly typing ColorSwatch as React.FC makes TypeScript recognize it as a component, allowing the `key` prop.
const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, onColorSelect }) => (
    <div 
        onClick={() => onColorSelect(color)} 
        className="group flex flex-col items-center cursor-pointer text-center" 
        title={color.name}
    >
        <div 
            className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-200 shadow-md"
            style={{ backgroundColor: color.hex, outline: color.hex === '#FFFFFF' ? '1px solid #ccc' : 'none' }}
        ></div>
        <span className="text-xs mt-2 text-gray-600 group-hover:font-medium truncate w-full">{color.name}</span>
    </div>
);

const ColorPalette: React.FC<ColorPaletteProps> = ({ pieceName, availableColors, onColorSelect, onCancel }) => {
    const neutralColors = availableColors.filter(c => c.type === 'neutral');
    const accentColors = availableColors.filter(c => c.type === 'accent');

    return (
        <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">Colores para: <span className="font-bold text-indigo-600">{pieceName}</span></h3>
                 <button 
                    onClick={onCancel}
                    className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                >
                    Cancelar
                </button>
            </div>
            
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {neutralColors.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-sm text-gray-500 mb-3 sticky top-0 bg-gray-50 py-1">Neutros</h4>
                        <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                            {neutralColors.map(color => <ColorSwatch key={color.name} color={color} onColorSelect={onColorSelect} />)}
                        </div>
                    </div>
                )}
                {accentColors.length > 0 && (
                     <div>
                        <h4 className="font-semibold text-sm text-gray-500 mb-3 sticky top-0 bg-gray-50 py-1">Acentos</h4>
                        <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                            {accentColors.map(color => <ColorSwatch key={color.name} color={color} onColorSelect={onColorSelect} />)}
                        </div>
                    </div>
                )}
            </div>

            {availableColors.length === 0 && (
                <div className="text-center text-gray-500 py-4 bg-white rounded-md">
                    <p>No hay más colores de acento disponibles para este atuendo.</p>
                </div>
            )}
        </div>
    );
};

export default ColorPalette;