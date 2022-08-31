import React from 'react';
import {useRecipes} from '../../services';
import { RecipeRow } from './recipe-row';

import {
    RecipesWrapper
} from './elements';

function deleteMe() {
    return new Date().toTimeString();
}

export const Recipes: React.FC = () => {
    const [recipes, saveRecipe, removeRecipe] = useRecipes();


    return (
        <RecipesWrapper>
            {recipes.map(({name, ingredients}) => 
                <RecipeRow
                    key={name}
                    name={name}
                    ingredients={ingredients}
                    removeRecipe={removeRecipe}
                />
            )}
            <button onClick={() => saveRecipe(deleteMe(), [{name: deleteMe(), aisle: 'deli'}])}>
                Add Recipe!
            </button>
        </RecipesWrapper>  
    );
};
