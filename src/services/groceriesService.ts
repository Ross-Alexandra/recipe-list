import _ from 'lodash';
import { useCallback, useState } from 'react';

type UseGroceries = [Grocery[], {
    save: typeof saveGrocery,
    remove: typeof removeGrocery,
    check: typeof checkGrocery,
    uncheck: typeof uncheckGrocery
}];

export function useGroceries(fromAisle?: string): UseGroceries {
    const [groceries, setGroceries] = useState(() => getGroceries(fromAisle));
    
    const _saveGrocery = useCallback((name: string, aisle: string, from: string) => {
        const newGroceries = saveGrocery(name, aisle, from);

        if (fromAisle) {
            setGroceries(newGroceries.filter(({aisle}) => aisle === fromAisle));
        } else {
            setGroceries(newGroceries);
        }

        return newGroceries;
    }, [setGroceries, saveGrocery]);

    const _removeGrocery = useCallback((name: string) => {
        const newGroceries = removeGrocery(name);

        if (fromAisle) {
            setGroceries(newGroceries.filter(({aisle}) => aisle === fromAisle));
        } else {
            setGroceries(newGroceries);
        }

        return newGroceries;
    }, [setGroceries, removeGrocery]);

    const _checkGrocery = useCallback((name: string) => {
        const newGroceries = checkGrocery(name);

        if (fromAisle) {
            setGroceries(newGroceries.filter(({aisle}) => aisle === fromAisle));
        } else {
            setGroceries(newGroceries);
        }

        return newGroceries;
    }, [setGroceries, checkGrocery]);

    const _uncheckGrocery = useCallback((name: string) => {
        const newGroceries = uncheckGrocery(name);

        if (fromAisle) {
            setGroceries(newGroceries.filter(({aisle}) => aisle === fromAisle));
        } else {
            setGroceries(newGroceries);
        }
        
        return newGroceries;
    }, [setGroceries, uncheckGrocery]);

    return [groceries, {
        save: _saveGrocery,
        remove: _removeGrocery,
        check: _checkGrocery,
        uncheck: _uncheckGrocery
    }];
}

export function getGroceries(fromAisle?: string) {
    const groceriesString = window.localStorage.getItem('groceries') || JSON.stringify([]);
    const groceries: Grocery[] = JSON.parse(groceriesString);

    if (fromAisle) return groceries.filter(({aisle}) => aisle === fromAisle);
    return groceries;
}

export function checkGrocery(name: string) {
    const groceries = getGroceries();
    const updatedGroceries = groceries.map(grocery => {
        if (grocery.name === name) return {
            ...grocery,
            checked: true,
        };
        else return grocery;
    });

    window.localStorage.setItem('groceries', JSON.stringify(updatedGroceries));
    return updatedGroceries;
}

export function uncheckGrocery(name: string) {
    const groceries = getGroceries();
    const updatedGroceries = groceries.map(grocery => {
        if (grocery.name === name) return {
            ...grocery,
            checked: false,
        };
        else return grocery;
    });

    window.localStorage.setItem('groceries', JSON.stringify(updatedGroceries));
    return updatedGroceries;
}

export function saveGrocery(name: string, aisle: string, from: string) {
    const currentGroceries = getGroceries();
    const newGrocery = {name, aisle, usedBy: [from], checked: false};

    const existingIndex = _.findIndex(currentGroceries, {name});
    if (existingIndex >= 0) {
        const updatedGrocery = currentGroceries[existingIndex];
        currentGroceries.splice(existingIndex, 1, {
            name: updatedGrocery.name,
            aisle: updatedGrocery.aisle,
            checked: updatedGrocery.checked,
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
