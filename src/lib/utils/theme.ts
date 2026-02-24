
import { RestaurantTheme } from "@/types";

/**
 * 1. Robust HEX to RGB converter
 * Handles: #ABC, #AABBCC, ABC, AABBCC
 * Returns: "R G B" triplet for Tailwind opacity support
 */
const hexToRgb = (hex: string): string => {
  let cleanHex = hex.replace('#', '').trim();

  // Expand shorthand form (e.g. "03F") to full form ("0033FF")
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }

  // Fallback for invalid hex
  if (cleanHex.length !== 6) {
    console.warn(`MenuOS Theme: Invalid color hex provided: ${hex}. Falling back to black.`);
    return '0 0 0';
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `${r} ${g} ${b}`;
};

/**
 * 2. Dynamic Font Loader
 * Detects font names from the config and injects them from Google Fonts dynamically.
 * Prevents loading the same font twice.
 */
const loadDynamicFont = (fontFamilyString: string) => {
  if (!fontFamilyString) return;

  // Extract primary font name: "Playfair Display, serif" -> "Playfair Display"
  // Remove quotes if present
  const fontName = fontFamilyString.split(',')[0].replace(/['"]/g, '').trim();

  // List of web-safe fonts we shouldn't try to fetch
  const webSafe = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'system-ui', 'sans-serif', 'serif', 'Inter'];

  // If it's a web-safe font or our base font, skip fetching
  if (webSafe.some(f => f.toLowerCase() === fontName.toLowerCase())) return;

  // Create unique ID for the style tag
  const linkId = `font-${fontName.replace(/\s+/g, '-').toLowerCase()}`;

  if (!document.getElementById(linkId)) {
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    const formattedName = fontName.replace(/\s+/g, '+');
    // We load a versatile range of weights for headings and body
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap`;

    document.head.appendChild(link);
  }
};

export const applyTheme = (theme: RestaurantTheme) => {
  const root = document.documentElement;

  // --- COLORS ---
  // Using custom property setter ensures browser repaints efficiently
  root.style.setProperty('--color-brand-primary', hexToRgb(theme.colors.primary));
  root.style.setProperty('--color-brand-secondary', hexToRgb(theme.colors.secondary));
  root.style.setProperty('--color-brand-accent', hexToRgb(theme.colors.accent));
  root.style.setProperty('--color-brand-dark', hexToRgb(theme.colors.dark));

  // --- FONTS ---
  if (theme.fonts) {
    // 1. Inject the CSS Variables for Tailwind
    root.style.setProperty('--font-sans', theme.fonts.sans);
    root.style.setProperty('--font-serif', theme.fonts.serif);

    // 2. Actually fetch the font files
    loadDynamicFont(theme.fonts.sans);
    loadDynamicFont(theme.fonts.serif);
  }
};
