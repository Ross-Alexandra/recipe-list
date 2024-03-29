import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { FieldError, useFieldErrors } from '../../../hooks';
import { useAisles, useGroceries } from '../../../services';
import { errorCodesToText } from '../../../error-codes-to-text';

import {
    ModalFrame,
    ModalTitle,
    RecipeNameInputWrapper,
    RecipeNameInput,
    RecipeIngredients,
    IngredientWrapper,
    IngredientName,
    IngredientAisle,
    NewIngredient,
    ErrorText,
    IngredientNameInput,
    AisleSelector,
    AisleOption,
    CreateRecipeButton,
    Remove,
    NewItem
} from './elements';

export interface NewRecipeModalProps {
    closeModal: () => void;
    removeOldRecipe: () => void;
    saveNewRecipe: (name: string, ingredients: Ingredient[]) => void;
    editingRecipe?: Recipe;
}

export const NewRecipeModal: React.FC<NewRecipeModalProps> = ({
    closeModal,
    saveNewRecipe,
    removeOldRecipe,
    editingRecipe
}) => {
    const [aisles] = useAisles();
    const [recipeName, setRecipeName] = useState<string>(editingRecipe?.name ?? '');
    const [,{remove: removeGrocery}] = useGroceries();
    const [recipeIngredients, setRecipeIngredients] = useState<Ingredient[]>(editingRecipe?.ingredients ?? []);
    const [newIngredientName, setNewIngredientName] = useState<string>('');
    const [newIngredientAisle, setNewIngredientAisle] = useState<string>(_.get(aisles, 0));
    
    const [errors, {newError, clearFieldErrors}] = useFieldErrors<{
        recipeName: FieldError[];
        ingredientName: FieldError[];
        aisle: FieldError[];
    }>();

    const onRecipeNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        clearFieldErrors('recipeName');

        setRecipeName(e.target.value);
    }, [setNewIngredientAisle, clearFieldErrors]);

    const onNewIngredientNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        clearFieldErrors('ingredientName');

        setNewIngredientName(e.target.value);
    }, [setNewIngredientAisle, clearFieldErrors]);

    const onNewIngredientAisleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        clearFieldErrors('aisle');

        setNewIngredientAisle(e.target.value);
    }, [setNewIngredientAisle, clearFieldErrors]);

    const saveCurrentIngredient = useCallback(() => {
        if (!newIngredientName) { 
            newError('ingredientName', 'is-blank');
            return;
        } else if (recipeIngredients.some(({name}) => name === newIngredientName)) {
            newError('ingredientName', 'ingredient-exists');
            return;
        }

        if (!newIngredientAisle) {
            newError('aisle', 'is-blank');
            return;
        }

        setRecipeIngredients(currentRecipeIngredients => {
            const nextRecipeIngredients: Ingredient[] = [
                ...currentRecipeIngredients,
                {name: newIngredientName, aisle: newIngredientAisle}
            ];

            // Don't reset aisle as it's somewhat likely the user
            // wants to input another ingredient of the same aisle.
            setNewIngredientName('');
            return nextRecipeIngredients;
        });
    }, [newError, setRecipeIngredients, newIngredientName, newIngredientAisle]);

    const removeRecipeIngredient = useCallback((nameToRemove: string) => {
        setRecipeIngredients(currentIngredients => {
            return currentIngredients.filter(({name}) => name !== nameToRemove);
        });
    }, []);

    const editIngredient = useCallback((nameToEdit: string) => {
        const aisle = _.find(recipeIngredients, {name: nameToEdit})?.aisle ??  _.get(aisles, 0);

        removeRecipeIngredient(nameToEdit);
        setNewIngredientAisle(aisle);
        setNewIngredientName(nameToEdit);
    }, [recipeIngredients]);

    return (
        <ModalFrame handleClose={closeModal} closeButtonColor={'#FFF'}>
            <ModalTitle>New Recipe</ModalTitle>
            <RecipeNameInputWrapper>
                <RecipeNameInput 
                    type='text'
                    placeholder='Recipe Name'
                    value={recipeName}
                    onChange={onRecipeNameChange}
                    hasErrors={!_.isEmpty(errors.recipeName)}
                />
                {!_.isEmpty(errors.recipeName) && (
                    <ErrorText>{_.get(errorCodesToText, errors.recipeName?.[0])}</ErrorText>
                )}
            </RecipeNameInputWrapper>

            {!_.isEmpty(recipeIngredients) && (
                <RecipeIngredients>
                    {recipeIngredients.map(({name, aisle}) => 
                        <IngredientWrapper key={name} onClick={() => editIngredient(name)}>
                            <IngredientName>{name.toLowerCase()}</IngredientName>
                            <IngredientAisle>{aisle}</IngredientAisle>
                            <Remove 
                                onClick={(e) => {
                                    e.stopPropagation();

                                    removeRecipeIngredient(name);
                                    if (name && recipeName) removeGrocery(name, recipeName);
                                }}
                            />
                        </IngredientWrapper>
                    )}
                </RecipeIngredients>
            )}

            <NewIngredient>
                <div>
                    <IngredientNameInput
                        type='text'
                        placeholder='Ingredient Name'
                        hasErrors={!_.isEmpty(errors.ingredientName)}
                        value={newIngredientName}
                        onChange={onNewIngredientNameChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                saveCurrentIngredient();
                            }
                        }}
                    />
                    {!_.isEmpty(errors.ingredientName) && (
                        <ErrorText>{_.get(errorCodesToText, errors.ingredientName?.[0])}</ErrorText>
                    )}
                </div>
                <div>
                    <AisleSelector
                        value={newIngredientAisle}
                        hasErrors={!_.isEmpty(errors.aisle)}
                        onChange={onNewIngredientAisleChange}
                    >
                        {aisles.map(aisle => 
                            <AisleOption key={aisle} value={aisle}>{aisle}</AisleOption>
                        )}
                    </AisleSelector>
                    {!_.isEmpty(errors.aisle) && (
                        <ErrorText>{_.get(errorCodesToText, errors.aisle?.[0])}</ErrorText>
                    )}
                </div>

                <NewItem 
                    width={25}
                    height={25}
                    stroke={'#FFF'}
                    onClick={() => saveCurrentIngredient()}
                >
                    Add New
                </NewItem>
            </NewIngredient>

            <CreateRecipeButton
                onClick={() => {
                    if (!recipeName) {
                        newError('recipeName', 'is-blank');
                        return;
                    }

                    if (_.some(Object.values(errors))) {
                        return;
                    }

                    if (editingRecipe && recipeName !== editingRecipe.name) {
                        removeOldRecipe();
                    }

                    if (newIngredientName && recipeIngredients.every(({name}) => name !== newIngredientName)) {
                        saveNewRecipe(recipeName, [...recipeIngredients, {name: newIngredientName, aisle: newIngredientAisle}]);
                    } else {
                        saveNewRecipe(recipeName, recipeIngredients);
                    }
                }}
            >
                Save
            </CreateRecipeButton>
        </ModalFrame>
    );
};
