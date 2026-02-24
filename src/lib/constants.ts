
import { MenuItem, Category, Story, RestaurantTheme } from '@/types';

// --- THEME CONFIGURATION ---
export const DEFAULT_THEME: RestaurantTheme = {
  colors: {
    primary: '#F94144',   // Red-Orange (Appetizing)
    secondary: '#1F2937', // Dark Gray
    accent: '#F3722C',    // Orange
    dark: '#030712',      // Deepest Black/Blue
  },
  fonts: {
    sans: 'Inter, sans-serif',
    serif: 'Playfair Display, serif',
  }
};

export const CATEGORIES: Category[] = [
  { id: 'starters', name: 'Entradas' },
  { id: 'mains', name: 'Fuertes' },
  { id: 'burgers', name: 'Handhelds' },
  { id: 'desserts', name: 'Postres' },
  { id: 'drinks', name: 'Bar & Cocteles' },
];

export const STORIES: Story[] = [
  {
    id: 's1',
    title: 'Nueva Trufa',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    viewed: false,
    type: 'dish',
    linkedItemId: 'm1'
  },
  {
    id: 's2',
    title: 'Mesa del Chef',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    viewed: false,
    type: 'chef',
  },
  {
    id: 's3',
    title: 'Coctelería',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    viewed: true,
    type: 'promo',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Truffle Smash Burger',
    description: 'Doble carne madurada, mayonesa de trufa negra, queso suizo y pan brioche artesanal.',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'burgers',
    tags: ['Popular', 'Chef Choice'],
    popular: true,
    available: true,
    calories: 950,
    pairing: 'Malbec Reserva',
    ingredients: ['Trufa Negra', 'Queso Suizo', 'Brioche', 'Res Madurada']
  },
  {
    id: 'm2',
    name: 'Tartar de Atún Picante',
    description: 'Atún aleta azul, mousse de aguacate, crujiente de sésamo y reducción de ponzu.',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80',
    category: 'starters',
    tags: ['Picante', 'GF', 'Proteína'],
    new: true,
    available: true,
    calories: 320,
    pairing: 'Sauvignon Blanc',
    ingredients: ['Atún Rojo', 'Ponzu', 'Aguacate']
  },
  {
    id: 'm3',
    name: 'Goddess Buddha Bowl',
    description: 'Quinoa tricolor, garbanzos rostizados, kale masajeado y aderezo diosa verde de tahini.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    category: 'mains',
    tags: ['Vegano', 'GF', 'Saludable'],
    available: true,
    calories: 450,
    pairing: 'Jugo Verde Detox'
  },
  {
    id: 'm4',
    name: 'Volcán de Chocolate',
    description: 'Fondant de chocolate 70%, gelato de vainilla de Madagascar y coulis de frutos rojos.',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=800&q=80',
    category: 'desserts',
    tags: ['Dulce', 'Indulgente'],
    popular: true,
    available: true,
    calories: 600,
    pairing: 'Espresso Martini'
  },
  {
    id: 'm5',
    name: 'Wagyu Steak Frites',
    description: 'Sirloin Wagyu A5 (8oz), mantequilla de hierbas compuesta y papas fritas trufadas.',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    category: 'mains',
    tags: ['GF', 'Premium'],
    chefChoice: true,
    available: true,
    calories: 800,
    pairing: 'Cabernet Sauvignon'
  },
  {
    id: 'm6',
    name: 'Paloma de Romero',
    description: 'Tequila Reposado, toronja fresca, jarabe de romero ahumado, lima y agua con gas.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    tags: ['Coctel', 'Refrescante'],
    available: true,
    calories: 180
  },
  {
    id: 'm7',
    name: 'Burrata & Durazno',
    description: 'Burrata italiana fresca, duraznos a la parrilla, aceite de albahaca y glaseado balsámico.',
    price: 36000,
    image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=800&q=80',
    category: 'starters',
    tags: ['Vegetariano', 'Temporada'],
    new: true,
    available: true,
    calories: 400,
    pairing: 'Vino Rosado'
  }
];
