// constants.ts
import { Color, Outfit } from './types';

export const ALL_COLORS: Color[] = [
    // Neutrals from user prompt
    { name: 'Navy', hex: '#1f2a44', type: 'neutral' },
    { name: 'Charcoal', hex: '#36454F', type: 'neutral' },
    { name: 'Dark Gray', hex: '#4B4B4B', type: 'neutral' },
    { name: 'Gray', hex: '#808080', type: 'neutral' },
    { name: 'Olive', hex: '#556B2F', type: 'neutral' },
    { name: 'Chocolate', hex: '#4a2f27', type: 'neutral' },
    { name: 'Camel', hex: '#C19A6B', type: 'neutral' },
    { name: 'Stone', hex: '#bdb28e', type: 'neutral' }, // Khaki/Stone
    { name: 'White', hex: '#FFFFFF', type: 'neutral' },
    { name: 'Cream', hex: '#F5F3E5', type: 'neutral' }, // Corrected Cream
    { name: 'Tan', hex: '#D2B48C', type: 'neutral' },
    { name: 'Beige', hex: '#d9cbb6', type: 'neutral' },
    { name: 'Denim', hex: '#1F456E', type: 'neutral' },
    { name: 'Black', hex: '#000000', type: 'neutral' },

    // Accents from user prompt
    { name: 'Rust', hex: '#B7410E', type: 'accent' },
    { name: 'Burgundy', hex: '#800020', type: 'accent' },
    { name: 'Gold', hex: '#D4A017', type: 'accent' }, // Mustard/Gold
    { name: 'Teal', hex: '#4682b4', type: 'accent' }, // Steel Blue/Teal
    { name: 'Tobacco', hex: '#8B4513', type: 'accent' }, // Brown/Tobacco
    { name: 'Royal Purple', hex: '#4B0082', type: 'accent' }, // Indigo/Purple
    { name: 'Pink', hex: '#FFC0CB', type: 'accent' },
    { name: 'Sky Blue', hex: '#87ceeb', type: 'accent' },
];

export const INITIAL_OUTFIT: Outfit = {
    hat: { id: 'hat', name: 'Gorro', color: ALL_COLORS[2], type: 'accessory' },
    coat: { id: 'coat', name: 'Abrigo', color: ALL_COLORS[1], style: 'jacket', type: 'investment' },
    outerShirt: { id: 'outerShirt', name: 'Camisa', color: ALL_COLORS[7], style: 'long-sleeve', type: 'accessory' },
    pants: { id: 'pants', name: 'Pantalones', color: ALL_COLORS[0], style: 'long', type: 'investment' },
    shoes: { id: 'shoes', name: 'Zapatos', color: ALL_COLORS[12], type: 'investment' },
};
