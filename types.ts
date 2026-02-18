
export interface ModifierOption {
  id: string;
  name: string;
  price: number; // 0 for free options
  available: boolean;
}

export interface ModifierGroup {
  id: string;
  name: string; // e.g. "Choose your side", "Cook Temperature"
  minSelection: number; // 0 = optional, 1 = required
  maxSelection: number; // 1 = single select, >1 = multi select
  options: ModifierOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[]; // e.g., 'Spicy', 'Vegan', 'GF'
  popular?: boolean;
  new?: boolean;
  chefChoice?: boolean;
  calories?: number;
  available: boolean;
  modifiers?: ModifierGroup[]; // NEW: Support for customization
  ingredients?: string[]; // NEW: Key ingredients list for visuals
  pairing?: string; // NEW: Specific pairing text
  
  // Cart/Order Logic Fields (Optional)
  quantity?: number;
  selectedOptions?: { groupName: string; optionName: string; price: number }[];
  finalPrice?: number;
}

export interface Story {
  id: string;
  title: string;
  image: string;
  viewed: boolean;
  type: 'dish' | 'promo' | 'chef';
  linkedItemId?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface AdminStats {
  views: number;
  orders: number;
  revenue: number;
}

// --- NEW SAAS TYPES ---

export interface RestaurantTheme {
  colors: {
    primary: string;   // Main brand color
    secondary: string; // Secondary elements
    accent: string;    // CTAs, highlights
    dark: string;      // Backgrounds
  };
  fonts: {
    sans: string;
    serif: string;
  };
}

export interface RestaurantConfig {
  id: string;
  slug: string; // The URL identifier (e.g. 'sushi-master')
  name: string;
  tagline: string;
  coverImage: string; // NEW: Background for header
  logo?: string;      // NEW: Logo URL (optional, fallback to initial)
  theme: RestaurantTheme;
  currency: string; // The symbol (e.g. "$")
  // Locale removed: Defaulting to Colombia (es-CO) globally
}

// The complete data package for a single restaurant
export interface RestaurantData {
  config: RestaurantConfig;
  menu: MenuItem[];
  categories: Category[];
  stories: Story[];
}
