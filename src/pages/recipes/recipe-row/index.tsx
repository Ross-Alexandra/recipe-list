import React, { useCallback, useMemo, useState } from 'react';
import {keyframes} from '@emotion/react';
import { useGroceries } from '../../../services';
 
import {
    RecipeWrapper,
    RecipeHeader,
    Chevron,
    RecipeHeaderIcons,
    RecipeTitle,
    AddMealIcon,
    RemoveMealIcon,
    GarbageCan,
    EditIcon,
    IngredientsWrapper,
    AddToList,
    RemoveFromList,
    IngredientInfo,
    IngredientName,
    IngredientAisle,
    Animate,
    IngredientSummary,
    Modal,
    ModalFrame,
    WarningTitle,
    ButtonsWrapper,
    PrimaryButton,
    SecondaryButton,
    INGREDIENT_ROW_HEIGHT,
} from './elements';
import { useMeals } from '../../../services/mealService';
import _ from 'lodash';
import { Ingredient } from './ingredient';

export interface RecipeRowProps {
    name: string;
    ingredients: Ingredient[];
    removeRecipe: (name: string) => Recipe[];
    editRecipe: (name: string) => void;
}

export const RecipeRow: React.FC<RecipeRowProps> = ({name, ingredients, removeRecipe, editRecipe}) => {
    const [groceries, {save: saveGrocery, remove: removeGrocery}] = useGroceries();
    const [meals, saveMeal, removeMeal] = useMeals();
    const [expanded, setExpanded] = useState(false);
    const [removeWarningDisplayed, setRemoveWarningDisplayed] = useState(false);
    
    const addedGroceries = useMemo(() => {
        const ingredientNames = ingredients.map(({name}) => name);
        return groceries.filter(({name: groceryName, usedBy}) => {
            return ingredientNames.includes(groceryName) && usedBy.includes(name);
        });
    }, [groceries]);

    const onClickAddAll = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        ingredients.forEach(({name: groceryName, aisle}) => saveGrocery(groceryName, aisle, name));
    }, [ingredients, saveGrocery]);

    const onClickRemoveAll = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        ingredients.forEach(({name: groceryName}) => removeGrocery(groceryName, name));
    }, [ingredients]);

    const onClickEdit = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        editRecipe(name);
    }, [name]);

    const onClickGarbageCan = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        setRemoveWarningDisplayed(true);
    }, [setRemoveWarningDisplayed]);

    const noAddedIngredients = addedGroceries.length === 0;
    const lessHalfIngredientsAdded = addedGroceries.length > 0 && addedGroceries.length <= (Math.floor(ingredients.length / 2));
    const moreHalfIngredientsAdded = addedGroceries.length < ingredients.length && addedGroceries.length > (Math.floor(ingredients.length / 2));
    const allIngredientsAdded = addedGroceries.length === ingredients.length;
    return (
        <RecipeWrapper>
            <RecipeHeader onClick={() => setExpanded(isExpanded => !isExpanded)}>
                <Chevron expanded={expanded} stroke={'#FFF'} />
                <RecipeTitle>{name}</RecipeTitle>
                <RecipeHeaderIcons>
                    {!_.isUndefined(_.find(meals, {name})) ? (
                        <RemoveMealIcon stroke={'#FFF'} onClick={(e) => {
                            e.stopPropagation();

                            removeMeal(name);
                        }} 
                        />
                    ) : (
                        <AddMealIcon stroke={'#FFF'} onClick={(e) => {
                            e.stopPropagation();

                            saveMeal(name);
                        }} 
                        />
                    )}
                    <EditIcon stroke={'#FFF'} onClick={onClickEdit} />
                    <GarbageCan stroke={'#FFF'} onClick={onClickGarbageCan}/>
                </RecipeHeaderIcons>
            </RecipeHeader>

            <Animate
                display={expanded}
                animationIn={keyframes`
                    from {max-height: 0px}
                    to {max-height: ${INGREDIENT_ROW_HEIGHT * (ingredients.length + 1)}px}
                `}
                animationOut={keyframes`
                    from {max-height: ${INGREDIENT_ROW_HEIGHT * (ingredients.length +1)}px}
                    to {max-height: 0px}
                `}
            >
                <IngredientsWrapper>
                    <IngredientSummary>
                        <IngredientInfo>
                            <IngredientName >
                                {noAddedIngredients && 'Add All'}
                                {lessHalfIngredientsAdded && 'Add Remaining'}
                                {moreHalfIngredientsAdded && 'Remove Remaining'}
                                {allIngredientsAdded && 'Remove All'}
                            </IngredientName>
                            <IngredientAisle>{`${addedGroceries.length} / ${ingredients.length} items`}</IngredientAisle>
                        </IngredientInfo>
                        {(noAddedIngredients || lessHalfIngredientsAdded) && <AddToList stroke={'#FFF'} onClick={onClickAddAll}/>}
                        {(allIngredientsAdded || moreHalfIngredientsAdded) && <RemoveFromList stroke={'#FFF'} onClick={onClickRemoveAll}/>}
                    </IngredientSummary>
                    {ingredients.map(({name: ingredientName, aisle}, index) => 
                        <Ingredient
                            key={index}
                            index={index}
                            name={ingredientName}
                            aisle={aisle}
                            recipeName={name}
                            groceries={groceries}
                            saveGrocery={saveGrocery}
                            removeGrocery={removeGrocery}
                        />
                    )}
                </IngredientsWrapper>
            </Animate>

            <Modal
                isOpen={removeWarningDisplayed}
                onBackgroundClick={() => setRemoveWarningDisplayed(false)}
            >
                <ModalFrame closeButtonColor='#FFF' handleClose={() => setRemoveWarningDisplayed(false)}>
                    <WarningTitle>Really remove this recipe?</WarningTitle>
                    <ButtonsWrapper>
                        <SecondaryButton onClick={() => {
                            ingredients.forEach(({name: groceryName}) => removeGrocery(groceryName, name));
                            removeRecipe(name);
                            removeMeal(name);
                        }}>
                            Yes
                        </SecondaryButton>
                        <PrimaryButton onClick={() => setRemoveWarningDisplayed(false)}>No</PrimaryButton>
                    </ButtonsWrapper>
                </ModalFrame>
            </Modal>
        </RecipeWrapper>
    );
};
