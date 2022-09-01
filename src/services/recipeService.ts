import _ from 'lodash';
import { useCallback, useState } from 'react';

type UseRecipe = [Recipe[], typeof saveRecipe, typeof removeRecipe];

export function useRecipes(): UseRecipe {
    const [recipes, setRecipes] = useState(() => getRecipes());
    
    const _saveRecipe = useCallback((name: string, ingredients: Ingredient[]) => {
        const newRecipes = saveRecipe(name, ingredients);

        setRecipes(newRecipes);
        return newRecipes;
    }, [setRecipes, saveRecipe]);
    const _removeRecipe = useCallback((name: string) => {
        const newRecipes = removeRecipe(name);

        setRecipes(newRecipes);
        return newRecipes;
    }, [setRecipes, removeRecipe]);

    return [recipes, _saveRecipe, _removeRecipe];
}

export function getRecipes(): Recipe[] {
    const existingRecipesJSON = window.localStorage.getItem('recipes') || JSON.stringify([]);
    return JSON.parse(existingRecipesJSON);
}

export function saveRecipe(name: string, ingredients: Ingredient[]) {
    const existingRecipes = getRecipes();
    const newRecipe = {name: name, ingredients: ingredients.map(({name, aisle}) => ({
        name: name.toLowerCase(),
        aisle
    }))};

    // _.findIndex returns -1 if the item can't be found, so
    // if recipeToOverwrite is >= 0, then we know this recipe
    // exists already.
    const recipeToOverwrite = _.findIndex(existingRecipes, {name});
    if (recipeToOverwrite >= 0) {
        existingRecipes.splice(recipeToOverwrite, 1, newRecipe);
    } else {
        existingRecipes.push(newRecipe);
    }

    
    window.localStorage.setItem('recipes', JSON.stringify(existingRecipes));
    return existingRecipes;
}

export function removeRecipe(name: string) {
    const existingRecipes = getRecipes();
    _.remove(existingRecipes, {name});

    window.localStorage.setItem('recipes', JSON.stringify(existingRecipes));
    return existingRecipes;
}
