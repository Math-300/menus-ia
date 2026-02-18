import React, { useState } from 'react';
import { generateDishDescription, generateDishImage, editDishImage, analyzeMenuHealth } from '../services/geminiService';
import { MenuItem } from '../types';

export const useAdminAI = (
    items: MenuItem[], 
    setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>,
    hasApiKey: boolean,
    onRequireKey: () => Promise<void>
) => {
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [healthScore, setHealthScore] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Image Gen State
    const [generatedImg, setGeneratedImg] = useState<string | null>(null);
    const [editInstruction, setEditInstruction] = useState('');

    const handleGenerateDescription = async (item: MenuItem) => {
        setLoadingId(item.id);
        setError(null);
        try {
            const desc = await generateDishDescription(item.name, item.tags.join(', '));
            setItems(prev => prev.map(i => i.id === item.id ? { ...i, description: desc } : i));
        } catch (e) {
            setError("Failed to generate description.");
        }
        setLoadingId(null);
    };

    const handleGenerateImage = async (prompt: string, size: "1K" | "2K" | "4K") => {
        if (!prompt) return;
        
        if (!hasApiKey) {
           await onRequireKey();
           // User needs to click again after connecting, or we could auto-retry, 
           // but for security/billing awareness, explicit action is better.
           return;
        }

        setLoadingId('gen-img');
        setError(null);
        const result = await generateDishImage(prompt, size);
        if (result) {
            setGeneratedImg(result);
        } else {
            setError("Image generation failed. Please try again.");
        }
        setLoadingId(null);
    };

    const handleEditImage = async () => {
         if (!generatedImg || !editInstruction) return;
         setLoadingId('edit-img');
         setError(null);
         const result = await editDishImage(generatedImg, editInstruction);
         if (result) {
             setGeneratedImg(result);
             setEditInstruction('');
         } else {
             setError("Could not refine image. Try a different instruction.");
         }
         setLoadingId(null);
    };

    const handleMenuAnalysis = async () => {
        setAnalyzing(true);
        setError(null);
        const menuSummary = items.map(i => `${i.name} (${i.category})`).join(', ');
        const result = await analyzeMenuHealth(menuSummary);
        setHealthScore(result);
        setAnalyzing(false);
    };

    return {
        loadingId,
        analyzing,
        healthScore,
        generatedImg,
        editInstruction,
        error,
        setEditInstruction,
        handleGenerateDescription,
        handleGenerateImage,
        handleEditImage,
        handleMenuAnalysis
    };
};