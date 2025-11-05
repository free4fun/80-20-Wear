# 80/20 Wear

A web application that helps you create harmonious outfits following proven color theory rules. Design and visualize complete outfits with customizable clothing pieces and save your favorite combinations.

## Features

### 🎨 Color Management
- **Smart Color Rules**: Follow proven color theory with neutral and accent color combinations
- **Investment Pieces**: Base pieces (coat, pants, shoes) restricted to neutral colors
- **Accessory Colors**: Flexible color options for shirts and hats
- **Accent Limitation**: Only one accent color allowed per outfit

### 👔 Clothing Customization
- **Hat**: Baseball cap with customizable color
- **Coat/Jacket**: Two styles available (Jacket, Open Shirt)
- **Shirt**: Long sleeve or short sleeve options
- **Pants**: Long pants or shorts
- **Shoes**: Solid color footwear
- **Toggle Coat**: Show or hide the coat layer

### 💾 Collection Management
- **Save Outfits**: Name and save your favorite outfit combinations
- **Load Collections**: Quickly restore saved outfits
- **Export**: Download individual collections or all at once as JSON files
- **Import**: Share and load collections from JSON files
- **Local Storage**: Automatically saves collections in your browser

### 🎨 Available Colors

**Neutral Colors:**
- Navy, Charcoal, Dark Gray, Gray
- Olive, Chocolate, Camel, Stone
- White, Cream, Tan, Beige
- Denim, Black

**Accent Colors:**
- Rust, Burgundy, Gold
- Teal, Tobacco, Royal Purple
- Pink, Sky Blue

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/free4fun/80-20-Wear.git
cd 80-20-Wear
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Creating an Outfit

1. **Select a Piece**: Click on any clothing item in the mannequin display
2. **Choose a Color**: Pick from the available color palette
3. **Customize Style**: Use the dropdown menus to change clothing styles
4. **Toggle Coat**: Use the checkbox to show/hide the coat layer

### Managing Collections

1. **Save**: Enter a name and click "Guardar" to save the current outfit
2. **Load**: Click "Cargar" on any saved collection to restore it
3. **Export**: Download individual collections or all at once
4. **Import**: Load collections from JSON files
5. **Delete**: Remove unwanted collections

### Exporting and Sharing

Collections are saved as JSON files that can be:
- Shared with other users
- Backed up externally
- Imported into any instance of the application

## Project Structure

```
generador-de-paletas-de-vestimenta/
├── components/
│   ├── icons/              # SVG clothing icons
│   │   ├── HatIcon.tsx
│   │   ├── CoatIcon.tsx
│   │   ├── OuterShirtIcon.tsx
│   │   ├── PantsIcon.tsx
│   │   └── ShoesIcon.tsx
│   ├── ClothingDisplay.tsx # Mannequin display component
│   ├── ColorPalette.tsx    # Color selection component
│   ├── Controls.tsx        # Style controls component
│   └── CollectionManager.tsx # Collection management component
├── constants.ts            # Color definitions and initial outfit
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
├── index.tsx              # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS (via classes)
- **LocalStorage API** - Client-side data persistence

## Color Theory Rules

The application enforces these color combination rules:

1. **Investment Pieces** (coat, pants, shoes) must use neutral colors
2. **Accessories** (hat, shirt) can use neutral or accent colors
3. **Only one accent color** is allowed per outfit
4. If an accent is used, other accessories must be neutral

These rules help create balanced, professional-looking outfits.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [Affero GPL License](LICENSE).

## Acknowledgments

- Color theory principles based on proven fashion and design guidelines
- Icon designs inspired by modern minimalist fashion illustration
- Built with modern web technologies for optimal performance

## Support

For questions, issues, or suggestions, please open an issue in the repository.

---

Made with ❤️ for fashion enthusiasts and color theory lovers
