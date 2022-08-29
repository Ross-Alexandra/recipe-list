import React from 'react';
import {useRecipes} from '../../services';

function deleteMe() {
    return new Date().toTimeString();
}

export const Recipes: React.FC = () => {
    const [recipes, saveRecipe, removeRecipe] = useRecipes();

    return (
        <div>
            {recipes.map(({name, ingredients}) => 
                <div key={name}>
                    <h2>{name}</h2>
                    <ol>
                        {ingredients.map(({name, type}, index) => 
                            <li key={index}>
                                <div>Name: {name}</div>
                                <div>Type: {type}</div>
                            </li>    
                        )}
                    </ol>
                    <button onClick={() => removeRecipe(name)}>
                        Delete
                    </button>
                </div>
            )}
            <button onClick={() => saveRecipe(deleteMe(), [{name: deleteMe(), type: deleteMe()}])}>
                Add Recipe!
            </button>
        </div>  
    );
};
