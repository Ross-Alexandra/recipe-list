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
import _ from 'lodash';

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

    return (
        <RecipesWrapper>
            {recipes.map(({name, ingredients}) => 
                <RecipeRow
                    key={name}
                    name={name}
                    ingredients={ingredients}
                    removeRecipe={removeRecipe}
                    editRecipe={() => openModal(name)}
                />
            )}
            <NewRecipeWrapper onClick={() => openModal()}>
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
                    editingRecipe={_.find(recipes, {name: editingRecipe})}
                />                
            </Modal>

        </RecipesWrapper>  
    );
};
