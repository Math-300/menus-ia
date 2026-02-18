import { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { CATEGORIES } from '../constants';

// Manual "Embeddings" for instant semantic search without API latency
const CATEGORY_SYNONYMS: Record<string, string[]> = {
  burgers: ['hamburguesa', 'sandwich', 'bocadillo', 'carne', 'res', 'handheld', 'cheeseburger'],
  starters: ['entrada', 'botana', 'inicio', 'para compartir', 'tapas', 'picada'],
  mains: ['fuerte', 'principal', 'plato', 'cena', 'comida', 'grande', 'lujo'],
  desserts: ['postre', 'dulce', 'pastel', 'chocolate', 'helado', 'azucar', 'final'],
  drinks: ['bebida', 'coctel', 'trago', 'vino', 'cerveza', 'alcohol', 'soda', 'refresco', 'bar']
};

export const useMenuFilter = (items: MenuItem[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper: Normalize text (remove accents, lowercase)
  const normalize = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const filteredItems = useMemo(() => {
    // 1. GLOBAL SEARCH PRIORITY
    if (searchQuery.trim()) {
      const terms = normalize(searchQuery).split(' ').filter(t => t.length > 0);
      
      const scoredItems = items.map(item => {
        let score = 0;
        
        // Data Preparation
        const normName = normalize(item.name);
        const normDesc = normalize(item.description);
        const normTags = item.tags.map(t => normalize(t));
        
        // Intelligent Category Matching
        const categoryId = item.category;
        const categoryDisplay = CATEGORIES.find(c => c.id === categoryId)?.name || '';
        const normCatDisplay = normalize(categoryDisplay);
        const normCatId = normalize(categoryId);
        const categorySynonyms = CATEGORY_SYNONYMS[categoryId] || [];

        terms.forEach(term => {
          // Priority 1: Exact Name Match or Starts With (Highest relevance)
          if (normName === term) score += 100;
          else if (normName.startsWith(term)) score += 50;
          
          // Priority 2: Name contains term
          else if (normName.includes(term)) score += 25;
          
          // Priority 3: Tags (Discovery)
          if (normTags.some(t => t.includes(term))) score += 20;

          // Priority 4: Category Display Name (e.g., searching "Entradas")
          if (normCatDisplay.includes(term)) score += 15;
          
          // Priority 5: Category Synonyms (The "Smart" Layer - e.g. searching "Hamburguesa" hits "burgers")
          if (categorySynonyms.some(syn => syn.includes(term))) score += 15;

          // Priority 6: Description (Context)
          if (normDesc.includes(term)) score += 5;
        });

        return { item, score };
      });

      // Filter out zero matches and sort by relevance
      return scoredItems
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(x => x.item);
    }

    // 2. CATEGORY FILTER (Fallback)
    if (selectedCategory !== 'all') {
      return items.filter(i => i.category === selectedCategory);
    }

    return items;
  }, [items, selectedCategory, searchQuery]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredItems
  };
};