import React, { useState } from 'react';
import { useGroceries } from '../../../services';
 
import {
    RecipeWrapper,
    RecipeHeader,
    Chevron,
    RecipeTitle,
    IngredientsWrapper,
    Ingredient,
    AddToList,
    RemoveFromList,
    IngredientInfo,
    IngredientName,
    IngredientAisle,
} from './elements';

export interface RecipeRowProps {
    name: string;
    ingredients: Ingredient[];
    removeRecipe: (name: string) => Recipe[];
}

export const RecipeRow: React.FC<RecipeRowProps> = ({name, ingredients, removeRecipe}) => {
    const [groceries, {save: saveGrocery, remove: removeGrocery}] = useGroceries();
    const [expanded, setExpanded] = useState(false);

    return (
        <RecipeWrapper>
            <RecipeHeader onClick={() => setExpanded(isExpanded => !isExpanded)}>
                <Chevron expanded={expanded} stroke={'#FFF'} />
                <RecipeTitle>{name}</RecipeTitle>
            </RecipeHeader>

            {expanded && (
                <>
                    <IngredientsWrapper>
                        {ingredients.map(({name: ingredientName, aisle}, index) => 
                            <Ingredient key={index}>
                                {groceries.map(({name}) => name).includes(ingredientName) ? (
                                    <RemoveFromList stroke={'#FFF'} onClick={() => removeGrocery(ingredientName)} />
                                ) : (
                                    <AddToList stroke={'#FFF'} onClick={() => saveGrocery(ingredientName, aisle, name)} />
                                )}
                                <IngredientInfo>
                                    <IngredientName>{ingredientName}</IngredientName>
                                    <IngredientAisle>{aisle}</IngredientAisle>
                                </IngredientInfo>
                            </Ingredient>    
                        )}
                    </IngredientsWrapper>

                    <button onClick={() => removeRecipe(name)}>
                        Delete
                    </button>
                </>
            )}
        </RecipeWrapper>
    );
};
