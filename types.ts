// types.ts
export type ClothingPieceName = 'hat' | 'coat' | 'outerShirt' | 'pants' | 'shoes';

export type ColorType = 'neutral' | 'accent';

export interface Color {
    name: string;
    hex: string;
    type: ColorType;
}

export interface ClothingPiece {
    name: string;
    id: ClothingPieceName;
    color: Color;
    style?: string;
    type: 'investment' | 'accessory';
}

export interface Outfit {
    hat: ClothingPiece;
    coat: ClothingPiece;
    outerShirt: ClothingPiece;
    pants: ClothingPiece;
    shoes: ClothingPiece;
}

export type PantsStyle = 'long' | 'shorts';
export type ShirtStyle = 'long-sleeve' | 'short-sleeve';
export type CoatStyle = 'jacket' | 'open-shirt';
