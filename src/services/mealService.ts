import _ from 'lodash';
import { useCallback, useState } from 'react';

type useMeals = [Meal[], typeof saveMeal, typeof removeMeal];

export function useMeals(): useMeals {
    const [meals, setMeals] = useState(() => getMeals());
    
    const _saveMeal = useCallback((name: string) => {
        const newMeals = saveMeal(name);

        setMeals(newMeals);
        return newMeals;
    }, [setMeals, saveMeal]);

    const _removeMeal = useCallback((name: string) => {
        const newMeals = removeMeal(name);

        setMeals(newMeals);
        return newMeals;
    }, [setMeals, removeMeal]);

    return [meals, _saveMeal, _removeMeal];
}

export function getMeals(): Meal[] {
    const existingMealsJSON = window.localStorage.getItem('meals') || JSON.stringify([]);
    return JSON.parse(existingMealsJSON);
}

export function saveMeal(name: string) {
    const existingMeals = getMeals();
    const newMeal = {name: name};

    // _.findIndex returns -1 if the item can't be found, so
    // if mealToOverwrite is >= 0, then we know this meal
    // exists already.
    const mealToOverwrite = _.findIndex(existingMeals, {name});
    if (mealToOverwrite >= 0) {
        existingMeals.splice(mealToOverwrite, 1, newMeal);
    } else {
        existingMeals.push(newMeal);
    }

    
    window.localStorage.setItem('meals', JSON.stringify(existingMeals));
    return existingMeals;
}

export function removeMeal(name: string) {
    const existingMeals = getMeals();
    _.remove(existingMeals, {name});

    window.localStorage.setItem('meals', JSON.stringify(existingMeals));
    return existingMeals;
}
