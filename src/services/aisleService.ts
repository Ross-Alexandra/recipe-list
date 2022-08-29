import { useCallback, useState } from 'react';

export const DEFAULT_AISLES = ['greens', 'meat', 'deli', 'frozen', 'dairy', 'snacks', 'other'];

export function useAisles() {
    const [aisles, setAisles] = useState(() => getAisles());
    
    const _saveAisle = useCallback((newAisle: string) => {
        const newAisles = saveAisle(newAisle);

        setAisles(newAisles);
    }, [setAisles, saveAisle]);
    const _removeAisle = useCallback((name: string) => {
        const newAisles = removeAisle(name);

        setAisles(newAisles);
    }, [setAisles, removeAisle]);

    return [aisles, _saveAisle, _removeAisle];
}

export function getAisles(): string[] {
    const aisles = window.localStorage.getItem('aisles') || JSON.stringify(DEFAULT_AISLES);

    return JSON.parse(aisles);
}

export function saveAisle(newAisle: string) {
    const currentAisles = getAisles();

    if (currentAisles.indexOf(newAisle) < 0) currentAisles.push(newAisle);

    window.localStorage.setItem('aisles', JSON.stringify(currentAisles));
    return currentAisles;
}

export function removeAisle(name: string) {
    const currentAisles = getAisles();
    if (DEFAULT_AISLES.includes(name)) return currentAisles;

    const aisleIndex = currentAisles.indexOf(name);
    if (aisleIndex < 0) return currentAisles;

    currentAisles.splice(aisleIndex, 1);
    
    window.localStorage.setItem('aisles', JSON.stringify(currentAisles));
    return currentAisles;
}
