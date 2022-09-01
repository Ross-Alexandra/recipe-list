import React, { useCallback, useState } from 'react';
import {useRecipes} from '../../services';
import { RecipeRow } from './recipe-row';

import {
    RecipesWrapper,
    NewRecipeWrapper,
    AddNewItemText,
    NewItem,
    Modal
} from './elements';
import { NewRecipeModal } from './new-recipe-modal';

export const Recipes: React.FC = () => {
    const [recipes, saveRecipe, removeRecipe] = useRecipes();
    const [addingNewRecipe, setAddingNewRecipe] = useState(false);

    const openModal = useCallback(() => setAddingNewRecipe(true), [setAddingNewRecipe]);
    const closeModal = useCallback(() => setAddingNewRecipe(false), [setAddingNewRecipe]);
    const saveNewRecipe = useCallback((name, ingredients) => {
        saveRecipe(name, ingredients);

        closeModal();
    }, [closeModal]);

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
            <NewRecipeWrapper onClick={openModal}>
                <AddNewItemText>New Recipe!</AddNewItemText>
                <NewItem
                    stroke={'#fff'}
                />
            </NewRecipeWrapper>

            <Modal
                isOpen={addingNewRecipe}
                onBackgroundClick={closeModal}
            >
                <NewRecipeModal 
                    closeModal={closeModal}
                    saveNewRecipe={saveNewRecipe}
                />                
            </Modal>

        </RecipesWrapper>  
    );
};
