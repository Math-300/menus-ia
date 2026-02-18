
import { RestaurantData } from '../types';

// --- DATABASE SIMULATION ---

export const RESTAURANT_DB: Record<string, RestaurantData> = {
  // 1. DEFAULT (The Burger/Steak House) - Colombia
  'demo-grill': {
    config: {
      id: 'res_01',
      slug: 'demo-grill',
      name: 'MenuOS Grill',
      tagline: 'Fuego, Sabor & Experiencia',
      currency: '$', 
      coverImage: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80',
      theme: {
        colors: {
          primary: '#F94144',   // Red-Orange
          secondary: '#1F2937', 
          accent: '#F3722C',    
          dark: '#030712',      // Deep Black
        },
        fonts: {
          sans: 'Inter, sans-serif',
          serif: 'Playfair Display, serif',
        }
      }
    },
    categories: [
      { id: 'starters', name: 'Entradas' },
      { id: 'mains', name: 'Fuertes' },
      { id: 'burgers', name: 'Handhelds' }, 
      { id: 'desserts', name: 'Postres' },
      { id: 'drinks', name: 'Bar' },
    ],
    stories: [
      { id: 's1', title: 'Nueva Trufa', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', viewed: false, type: 'dish' },
      { id: 's2', title: 'Mesa del Chef', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', viewed: false, type: 'chef' },
      { id: 's3', title: 'Coctelería', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', viewed: true, type: 'promo' },
    ],
    menu: [
      { 
          id: 'm1', 
          name: 'Truffle Smash', 
          description: 'Doble carne madurada, mayonesa de trufa negra, queso suizo y pan brioche artesanal.', 
          price: 38000, 
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', 
          category: 'burgers', 
          tags: ['Popular'], 
          popular: true, 
          available: true,
          ingredients: ['Trufa Negra', 'Queso Suizo', 'Brioche', 'Res Madurada'],
          pairing: 'Malbec Reserva', // Text match for smart lookup
          modifiers: [
              {
                  id: 'temp',
                  name: 'Término de la carne',
                  minSelection: 1,
                  maxSelection: 1,
                  options: [
                      { id: 't1', name: 'Medio (Recomendado)', price: 0, available: true },
                      { id: 't2', name: 'Tres Cuartos', price: 0, available: true },
                      { id: 't3', name: 'Bien Cocido', price: 0, available: true }
                  ]
              },
              {
                  id: 'extras',
                  name: 'Extras & Lujos',
                  minSelection: 0,
                  maxSelection: 3,
                  options: [
                      { id: 'e1', name: 'Huevo Frito', price: 4000, available: true },
                      { id: 'e2', name: 'Tocino Ahumado', price: 6000, available: true },
                      { id: 'e3', name: 'Extra Queso', price: 3000, available: true }
                  ]
              }
          ]
      },
      { id: 'm2', name: 'Tartar Atún', description: 'Aleta azul, ponzu, sésamo crujiente.', price: 42000, image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa', category: 'starters', tags: ['Raw'], new: true, available: true, pairing: 'Sauvignon Blanc', ingredients: ['Atún Rojo', 'Ponzu', 'Aguacate'] },
      { id: 'm3', name: 'Wagyu Steak', description: 'A5 Japonés, papas trufadas.', price: 125000, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e', category: 'mains', tags: ['Premium'], chefChoice: true, available: true, pairing: 'Cabernet Sauvignon' },
      { id: 'm4', name: 'Volcán Choco', description: 'Fondant 70%, helado vainilla.', price: 22000, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d', category: 'desserts', tags: ['Dulce'], available: true, pairing: 'Espresso Martini' },
      
      // DRINKS (Needed for Smart Lookup to find matches)
      { id: 'd1', name: 'Copa Malbec Reserva', description: 'Mendoza, Argentina. Notas a ciruela y tabaco.', price: 28000, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3', category: 'drinks', tags: ['Vino Tinto'], available: true },
      { id: 'd2', name: 'Cerveza Stout Artesanal', description: 'Notas a café y chocolate amargo.', price: 15000, image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042', category: 'drinks', tags: ['Cerveza'], available: true },
      { id: 'd3', name: 'Sauvignon Blanc', description: 'Fresco, cítrico y mineral.', price: 24000, image: 'https://images.unsplash.com/photo-1572569970938-16a30c51f501', category: 'drinks', tags: ['Vino Blanco'], available: true },
      { id: 'd4', name: 'Espresso Martini', description: 'Vodka, Kahlua, Espresso fresco.', price: 32000, image: 'https://images.unsplash.com/photo-1623861214046-63300885e3d7', category: 'drinks', tags: ['Coctel'], available: true, popular: true }
    ]
  },
  'sushi-master': {
    config: {
      id: 'res_02',
      slug: 'sushi-master',
      name: 'Omakase Zen',
      tagline: 'Arte Japonés Milenario',
      coverImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
      currency: '$', 
      theme: {
        colors: {
          primary: '#FFD700',   // Gold
          secondary: '#2C2C2C', 
          accent: '#FFFFFF',    
          dark: '#0a0a0a',      // Pitch Black
        },
        fonts: {
          sans: 'Lato, sans-serif',
          serif: 'Cinzel, serif',
        }
      }
    },
    categories: [
      { id: 'nigiri', name: 'Nigiri' },
      { id: 'sashimi', name: 'Sashimi' },
      { id: 'rolls', name: 'Maki Rolls' },
      { id: 'sake', name: 'Sake Bar' },
    ],
    stories: [
      { id: 's1', title: 'Pescado Fresco', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', viewed: false, type: 'chef' },
      { id: 's2', title: 'Sake Tasting', image: 'https://images.unsplash.com/photo-1582234084120-d38e07f6f140?auto=format&fit=crop&w=800&q=80', viewed: false, type: 'promo' },
    ],
    menu: [
      { id: 'sm1', name: 'Otoro Nigiri', description: 'Atún graso premium, wasabi fresco.', price: 45000, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351', category: 'nigiri', tags: ['Premium', 'Raw'], chefChoice: true, available: true, pairing: 'Sake Junmai' },
      { id: 'sm2', name: 'Dragon Roll', description: 'Anguila, aguacate, pepino, salsa unagi.', price: 38000, image: 'https://images.unsplash.com/photo-1617196034438-62e8f46d2672', category: 'rolls', tags: ['Popular'], popular: true, available: true, pairing: 'Sapporo Premium' },
      { id: 'sm3', name: 'Sake Junmai', description: 'Botella 300ml, notas florales.', price: 85000, image: 'https://images.unsplash.com/photo-1582234084120-d38e07f6f140', category: 'sake', tags: ['Alcohol'], available: true },
    ]
  },
  'green-eats': {
    config: {
      id: 'res_03',
      slug: 'green-eats',
      name: 'Roots & Seeds',
      tagline: 'Plant-Based Soul Food',
      coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
      currency: '$',
      theme: {
        colors: {
          primary: '#4ADE80',   // Bright Green
          secondary: '#374151', 
          accent: '#FBBF24',    // Warm Yellow
          dark: '#1C1917',      // Warm Dark Brown/Black
        },
        fonts: {
          sans: 'Quicksand, sans-serif', 
          serif: 'Lora, serif',
        }
      }
    },
    categories: [
      { id: 'bowls', name: 'Power Bowls' },
      { id: 'toasts', name: 'Toasts' },
      { id: 'smoothies', name: 'Superfoods' },
    ],
    stories: [
      { id: 's1', title: 'Farm to Table', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80', viewed: false, type: 'chef' },
    ],
    menu: [
      { id: 'ge1', name: 'Avo Toast', description: 'Pan masa madre, aguacate, semillas hemp.', price: 24000, image: 'https://images.unsplash.com/photo-1588137372308-15f75323a51d', category: 'toasts', tags: ['Vegan', 'Popular'], popular: true, available: true, pairing: 'Green Detox' },
      { id: 'ge2', name: 'Acai Bowl', description: 'Base acai puro, granola casera, frutas.', price: 28000, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733', category: 'bowls', tags: ['GF', 'Fresh'], available: true },
      { id: 'ge3', name: 'Green Detox', description: 'Kale, espinaca, manzana, jengibre.', price: 16000, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec', category: 'smoothies', tags: ['Healthy'], available: true },
    ]
  }
};
