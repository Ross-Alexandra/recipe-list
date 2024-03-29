import React, { useCallback, useState } from 'react';
import {useRecipes} from '../../services';
import { RecipeRow } from './recipe-row';

import {
    RecipesWrapper,
    RecipesHeader,
    RecipesTitleText,
    AddRecipiesHelpText,
    Modal
} from './elements';
import { NewRecipeModal } from './new-recipe-modal';
import _ from 'lodash';
import { useCustomEventHandler } from '../../hooks';

export const Recipes: React.FC = () => {
    const [recipes, saveRecipe, removeRecipe] = useRecipes();
    const [addingNewRecipe, setAddingNewRecipe] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState<string | undefined>();

    const openModal = useCallback((name?: string) => {
        setEditingRecipe(name);
        setAddingNewRecipe(true);
    }, [setAddingNewRecipe]);
    
    const closeModal = useCallback(() => {
        setEditingRecipe(undefined);
        setAddingNewRecipe(false);
    }, [setAddingNewRecipe]);

    const saveNewRecipe = useCallback((name, ingredients) => {
        saveRecipe(name, ingredients);

        closeModal();
    }, [closeModal]);

    useCustomEventHandler('new-recipe', () => openModal());

    const totalGroceries = recipes.length;
    return (
        <RecipesWrapper>
            <RecipesHeader>
                <RecipesTitleText>{totalGroceries || 'No'} recipies</RecipesTitleText>
                {totalGroceries === 0 &&
                    <AddRecipiesHelpText>
                        You currently have no recipies, try adding one!
                    </AddRecipiesHelpText>
                }
            </RecipesHeader>

            {recipes.map(({name, ingredients}) => 
                <RecipeRow
                    key={name}
                    name={name}
                    ingredients={ingredients}
                    removeRecipe={removeRecipe}
                    editRecipe={() => openModal(name)}
                />
            )}

            <Modal
                isOpen={addingNewRecipe}
                onBackgroundClick={closeModal}
            >
                <NewRecipeModal 
                    closeModal={closeModal}
                    saveNewRecipe={saveNewRecipe}
                    removeOldRecipe={() => editingRecipe && void removeRecipe(editingRecipe)}
                    editingRecipe={_.find(recipes, {name: editingRecipe})}
                />                
            </Modal>

        </RecipesWrapper>  
    );
};
