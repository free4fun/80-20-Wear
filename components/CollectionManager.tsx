// components/CollectionManager.tsx
import React, { useState, useEffect } from 'react';
import { Outfit } from '../types';

interface SavedCollection {
    id: string;
    name: string;
    outfit: Outfit;
    showCoat: boolean;
    createdAt: string;
}

interface CollectionManagerProps {
    currentOutfit: Outfit;
    showCoat: boolean;
    onLoadCollection: (outfit: Outfit, showCoat: boolean) => void;
}

const CollectionManager: React.FC<CollectionManagerProps> = ({ currentOutfit, showCoat, onLoadCollection }) => {
    const [collections, setCollections] = useState<SavedCollection[]>([]);
    const [collectionName, setCollectionName] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // Cargar colecciones desde localStorage al montar el componente
    useEffect(() => {
        const savedCollections = localStorage.getItem('outfitCollections');
        if (savedCollections) {
            setCollections(JSON.parse(savedCollections));
        }
    }, []);

    // Guardar colecciones en localStorage cuando cambien
    const saveToLocalStorage = (updatedCollections: SavedCollection[]) => {
        localStorage.setItem('outfitCollections', JSON.stringify(updatedCollections));
        setCollections(updatedCollections);
    };

    // Guardar colección actual
    const handleSaveCollection = () => {
        if (!collectionName.trim()) {
            alert('Por favor ingresa un nombre para la colección');
            return;
        }

        const newCollection: SavedCollection = {
            id: Date.now().toString(),
            name: collectionName,
            outfit: currentOutfit,
            showCoat,
            createdAt: new Date().toISOString()
        };

        const updatedCollections = [...collections, newCollection];
        saveToLocalStorage(updatedCollections);
        setCollectionName('');
        alert('¡Colección guardada exitosamente!');
    };

    // Cargar colección
    const handleLoadCollection = (collection: SavedCollection) => {
        onLoadCollection(collection.outfit, collection.showCoat);
        alert(`Colección "${collection.name}" cargada`);
    };

    // Eliminar colección
    const handleDeleteCollection = (id: string) => {
        if (confirm('¿Estás seguro de que quieres eliminar esta colección?')) {
            const updatedCollections = collections.filter(c => c.id !== id);
            saveToLocalStorage(updatedCollections);
        }
    };

    // Exportar colección a JSON
    const handleExportCollection = (collection: SavedCollection) => {
        const dataStr = JSON.stringify(collection, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${collection.name.replace(/\s+/g, '_')}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    // Exportar todas las colecciones
    const handleExportAll = () => {
        if (collections.length === 0) {
            alert('No hay colecciones para exportar');
            return;
        }
        const dataStr = JSON.stringify(collections, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'todas_las_colecciones.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    // Importar colecciones desde archivo JSON
    const handleImportCollection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target?.result as string;
                const imported = JSON.parse(content);

                // Verificar si es una sola colección o múltiples
                if (Array.isArray(imported)) {
                    // Múltiples colecciones
                    const updatedCollections = [...collections, ...imported];
                    saveToLocalStorage(updatedCollections);
                    alert(`${imported.length} colección(es) importada(s) exitosamente`);
                } else if (imported.id && imported.outfit) {
                    // Una sola colección
                    const updatedCollections = [...collections, imported];
                    saveToLocalStorage(updatedCollections);
                    alert('Colección importada exitosamente');
                } else {
                    alert('Formato de archivo no válido');
                }
            } catch (error) {
                alert('Error al importar el archivo. Asegúrate de que sea un archivo JSON válido.');
            }
        };
        reader.readAsText(file);
        // Resetear el input para permitir importar el mismo archivo de nuevo
        event.target.value = '';
    };

    return (
        <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Colecciones</h3>
            
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
                <span className="font-semibold">{isOpen ? 'Ocultar' : 'Gestionar Colecciones'}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-4 space-y-4">
                    {/* Importar/Exportar */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Importar/Exportar</h4>
                        <div className="flex gap-2">
                            <label className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer text-center">
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleImportCollection}
                                    className="hidden"
                                />
                                Importar
                            </label>
                            <button
                                onClick={handleExportAll}
                                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                            >
                                Exportar Todas
                            </button>
                        </div>
                    </div>

                    {/* Lista de colecciones guardadas */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                        <h4 className="font-semibold text-gray-800 mb-3">Mis Colecciones ({collections.length})</h4>
                        {collections.length === 0 ? (
                            <p className="text-gray-500 text-sm text-center py-4">No hay colecciones guardadas</p>
                        ) : (
                            <div className="space-y-2">
                                {collections.map((collection) => (
                                    <div
                                        key={collection.id}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex-grow">
                                            <p className="font-medium text-gray-800">{collection.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(collection.createdAt).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 ml-2">
                                            <button
                                                onClick={() => handleLoadCollection(collection)}
                                                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
                                                title="Cargar"
                                            >
                                                Cargar
                                            </button>
                                            <button
                                                onClick={() => handleExportCollection(collection)}
                                                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                                                title="Exportar"
                                            >
                                                ⬇
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCollection(collection.id)}
                                                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                                                title="Eliminar"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Guardar colección actual - Ahora al final */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Guardar Colección Actual</h4>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={collectionName}
                                onChange={(e) => setCollectionName(e.target.value)}
                                placeholder="Nombre de la colección"
                                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSaveCollection()}
                            />
                            <button
                                onClick={handleSaveCollection}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollectionManager;
