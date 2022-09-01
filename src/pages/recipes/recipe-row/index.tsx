import React, { useCallback, useState } from 'react';
import {keyframes} from '@emotion/react';
import { useGroceries } from '../../../services';
 
import {
    RecipeWrapper,
    RecipeHeader,
    Chevron,
    RecipeHeaderIcons,
    RecipeTitle,
    GarbageCan,
    EditIcon,
    IngredientsWrapper,
    Ingredient,
    AddToList,
    RemoveFromList,
    IngredientInfo,
    IngredientName,
    IngredientAisle,
    Animate,
    Modal,
    ModalFrame,
    WarningTitle,
    ButtonsWrapper,
    PrimaryButton,
    SecondaryButton,
    INGREDIENT_ROW_HEIGHT,
    AddAll,
} from './elements';

export interface RecipeRowProps {
    name: string;
    ingredients: Ingredient[];
    removeRecipe: (name: string) => Recipe[];
    editRecipe: (name: string) => void;
}

export const RecipeRow: React.FC<RecipeRowProps> = ({name, ingredients, removeRecipe, editRecipe}) => {
    const [groceries, {save: saveGrocery, remove: removeGrocery}] = useGroceries();
    const [expanded, setExpanded] = useState(false);
    const [removeWarningDisplayed, setRemoveWarningDisplayed] = useState(false);

    const onClickAddAll = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        ingredients.forEach(({name: groceryName, aisle}) => saveGrocery(groceryName, aisle, name));
    }, [ingredients, saveGrocery]);

    const onClickEdit = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        editRecipe(name);
    }, [name]);

    const onClickGarbageCan = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        setRemoveWarningDisplayed(true);
    }, [setRemoveWarningDisplayed]);

    return (
        <RecipeWrapper>
            <RecipeHeader onClick={() => setExpanded(isExpanded => !isExpanded)}>
                <Chevron expanded={expanded} stroke={'#FFF'} />
                <RecipeTitle>{name}</RecipeTitle>
                <RecipeHeaderIcons>
                    <AddAll height={25} width={25} stroke={'#FFF'} onClick={onClickAddAll} />
                    <EditIcon stroke={'#FFF'} onClick={onClickEdit} />
                    <GarbageCan stroke={'#FFF'} onClick={onClickGarbageCan}/>
                </RecipeHeaderIcons>
            </RecipeHeader>

            <Animate
                display={expanded}
                animationIn={keyframes`
                    from {max-height: 0px}
                    to {max-height: ${INGREDIENT_ROW_HEIGHT * ingredients.length}px}
                `}
                animationOut={keyframes`
                    from {max-height: ${INGREDIENT_ROW_HEIGHT * ingredients.length}px}
                    to {max-height: 0px}
                `}
            >
                <IngredientsWrapper>
                    {ingredients.map(({name: ingredientName, aisle}, index) => 
                        <Ingredient
                            key={index}
                            onClick={() => {
                                const included = groceries.map(({name}) => name).includes(ingredientName);
                                if (included) removeGrocery(ingredientName);
                                else saveGrocery(ingredientName, aisle, name);
                            }}
                        >
                            {groceries.map(({name}) => name).includes(ingredientName) ? (
                                <RemoveFromList stroke={'#FFF'} />
                            ) : (
                                <AddToList stroke={'#FFF'} />
                            )}
                            <IngredientInfo>
                                <IngredientName>{ingredientName}</IngredientName>
                                <IngredientAisle>{aisle}</IngredientAisle>
                            </IngredientInfo>
                        </Ingredient>    
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
                        <PrimaryButton onClick={() => setRemoveWarningDisplayed(false)}>No</PrimaryButton>
                        <SecondaryButton onClick={() => {
                            ingredients.forEach(({name: groceryName}) => removeGrocery(groceryName, name));
                            removeRecipe(name);
                        }}>
                            Yes
                        </SecondaryButton>
                    </ButtonsWrapper>
                </ModalFrame>
            </Modal>
        </RecipeWrapper>
    );
};
