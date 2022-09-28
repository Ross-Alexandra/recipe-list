import React from 'react';
import { AddToList, IngredientAisle, IngredientInfo, IngredientName, IngredientWrapper, RemoveFromList } from './elements';

export interface IngredientProps {
    name: string;
    aisle: string;
    recipeName: string;
    groceries: Grocery[];
    saveGrocery: (name: string, aisle: string, from: string) => Grocery[];
    removeGrocery: (name: string, fromRecipe?: string | undefined) => Grocery[];
    index: number;

}

export const Ingredient: React.FC<IngredientProps> = ({
    name,
    aisle,
    recipeName,
    groceries,
    saveGrocery,
    removeGrocery,
    index,
}) => {
    const included = groceries.some(({name: groceryName, usedBy}) => groceryName === name && usedBy.includes(recipeName));

    return (
        <IngredientWrapper
            key={index}
            onClick={() => {
                if (included) removeGrocery(name, recipeName);
                else saveGrocery(name, aisle, recipeName);
            }}
        >
            <IngredientInfo>
                <IngredientName>{name}</IngredientName>
                <IngredientAisle>{aisle}</IngredientAisle>
            </IngredientInfo>
            {included ? (
                <RemoveFromList stroke={'#FFF'} />
            ) : (
                <AddToList stroke={'#FFF'} />
            )}
        </IngredientWrapper>
    );
};
