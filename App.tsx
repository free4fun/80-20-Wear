// App.tsx
import React, { useState, useEffect } from 'react';
// Fix: Import ClothingPiece to use for type assertion.
import { Outfit, ClothingPieceName, Color, ClothingPiece } from './types';
import { INITIAL_OUTFIT, ALL_COLORS } from './constants';
import ClothingDisplay from './components/ClothingDisplay';
import Controls from './components/Controls';
import CollectionManager from './components/CollectionManager';

const App: React.FC = () => {
    const [outfit, setOutfit] = useState<Outfit>(INITIAL_OUTFIT);
    const [selectedPiece, setSelectedPiece] = useState<ClothingPieceName | null>(null);
    const [availableColors, setAvailableColors] = useState<Color[]>(ALL_COLORS);
    const [showCoat, setShowCoat] = useState(true);

    useEffect(() => {
        if (!selectedPiece) {
            setAvailableColors(ALL_COLORS);
            return;
        }

        const pieceInfo = outfit[selectedPiece];

        // Las piezas de inversión solo pueden ser neutras
        if (pieceInfo.type === 'investment') {
            setAvailableColors(ALL_COLORS.filter(c => c.type === 'neutral'));
            return;
        }

        // Las piezas de accesorio pueden ser neutras o de acento, pero solo se permite un acento en todo el atuendo
        if (pieceInfo.type === 'accessory') {
            // Comprueba si ya existe un acento en CUALQUIER OTRA prenda
            const hasExistingAccent = Object.entries(outfit).some(([key, piece]) => {
                // No nos importa la pieza seleccionada actualmente, solo las otras
                if (key === selectedPiece) return false;
                // Fix: Cast 'piece' to ClothingPiece because Object.entries infers its type as 'unknown'.
                return (piece as ClothingPiece).color.type === 'accent';
            });

            if (hasExistingAccent) {
                // Si ya existe un acento en otro lugar, esta pieza solo puede ser neutra
                setAvailableColors(ALL_COLORS.filter(c => c.type === 'neutral'));
            } else {
                // Si no existe ningún otro acento, todos los colores están disponibles
                setAvailableColors(ALL_COLORS);
            }
        }

    }, [selectedPiece, outfit]);

    const handlePieceSelect = (piece: ClothingPieceName) => {
        setSelectedPiece(piece);
    };

    const handleColorSelect = (color: Color) => {
        if (selectedPiece) {
            setOutfit(prev => ({
                ...prev,
                [selectedPiece]: { ...prev[selectedPiece], color }
            }));
            // No deseleccionamos la prenda para permitir cambiar de color nuevamente
        }
    };
    
    const handleStyleChange = (piece: ClothingPieceName, style: string) => {
        setOutfit(prev => ({
            ...prev,
            [piece]: { ...prev[piece], style }
        }));
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        // Deseleccionar si se hace clic en el fondo
        if (e.target === e.currentTarget) {
            setSelectedPiece(null);
        }
    };

    const handleLoadCollection = (loadedOutfit: Outfit, loadedShowCoat: boolean) => {
        setOutfit(loadedOutfit);
        setShowCoat(loadedShowCoat);
        setSelectedPiece(null);
    };

    return (
        <div 
            className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans antialiased"
            onClick={handleBackgroundClick}
        >
            <header className="mb-6 text-center" onClick={handleBackgroundClick}>
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Generador de Paletas de Vestimenta</h1>
                <p className="text-md text-gray-600 mt-2 max-w-2xl">Crea atuendos armoniosos siguiendo reglas de color probadas.</p>
            </header>
            <main className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                {/* Columna izquierda: Colecciones */}
                <aside className="lg:max-w-xs w-full flex-shrink-0">
                    <CollectionManager
                        currentOutfit={outfit}
                        showCoat={showCoat}
                        onLoadCollection={handleLoadCollection}
                    />
                </aside>
                
                {/* Columna central: Display de ropa */}
                <section className="flex-grow flex justify-center items-center bg-gray-50 rounded-xl p-4 relative min-h-[600px] lg:min-h-0" onClick={handleBackgroundClick}>
                    <div className="absolute top-4 right-4 z-20">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" checked={showCoat} onChange={() => setShowCoat(!showCoat)} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <span className="text-sm font-medium text-gray-700">Mostrar Abrigo</span>
                        </label>
                    </div>
                    <ClothingDisplay outfit={outfit} onPieceSelect={handlePieceSelect} selectedPiece={selectedPiece} showCoat={showCoat} />
                </section>
                
                {/* Columna derecha: Controles */}
                <aside className="lg:max-w-sm w-full flex-shrink-0">
                    <Controls
                        selectedPiece={selectedPiece}
                        outfit={outfit}
                        onColorSelect={handleColorSelect}
                        onCancelColorSelect={() => setSelectedPiece(null)}
                        availableColors={availableColors}
                        onStyleChange={handleStyleChange}
                    />
                </aside>
            </main>
        </div>
    );
};

export default App;