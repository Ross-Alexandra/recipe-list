import _ from 'lodash';
import { useCallback, useState } from 'react';

export function useGroceries() {
    const [groceries, setGroceries] = useState(() => getGroceries());
    
    const _saveGrocery = useCallback((name: string, aisle: string, from: string) => {
        const newGroceries = saveGrocery(name, aisle, from);

        setGroceries(newGroceries);
    }, [setGroceries, saveGrocery]);
    const _removeGrocery = useCallback((name: string) => {
        const newGroceries = removeGrocery(name);

        setGroceries(newGroceries);
    }, [setGroceries, removeGrocery]);

    return [groceries, _saveGrocery, _removeGrocery];
}

export function getGroceries(): Grocery[] {
    const groceries = window.localStorage.getItem('groceries') || JSON.stringify([]);

    return JSON.parse(groceries);
}

export function saveGrocery(name: string, aisle: string, from: string) {
    const currentGroceries = getGroceries();
    const newGrocery = {name, aisle, usedBy: [from]};

    const existingIndex = _.findIndex(currentGroceries, {name});
    if (existingIndex >= 0) {
        const updatedGrocery = currentGroceries[existingIndex];
        currentGroceries.splice(existingIndex, 1, {
            name: updatedGrocery.name,
            aisle: updatedGrocery.aisle,
            usedBy: [
                ...updatedGrocery.usedBy,
                from
            ]
        });
    } else {
        currentGroceries.push(newGrocery);
    }

    window.localStorage.setItem('groceries', JSON.stringify(currentGroceries));
    return currentGroceries;
}

export function removeGrocery(name: string) {
    const currentGroceries = getGroceries();

    _.remove(currentGroceries, {name});

    window.localStorage.setItem('groceries', JSON.stringify(currentGroceries));
    return currentGroceries;
}
