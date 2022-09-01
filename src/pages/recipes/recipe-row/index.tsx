import React, { useCallback, useState } from 'react';
import {keyframes} from '@emotion/react';
import { useGroceries } from '../../../services';
 
import {
    RecipeWrapper,
    RecipeHeader,
    Chevron,
    RecipeTitle,
    GarbageCan,
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
} from './elements';

export interface RecipeRowProps {
    name: string;
    ingredients: Ingredient[];
    removeRecipe: (name: string) => Recipe[];
}

export const RecipeRow: React.FC<RecipeRowProps> = ({name, ingredients, removeRecipe}) => {
    const [groceries, {save: saveGrocery, remove: removeGrocery}] = useGroceries();
    const [expanded, setExpanded] = useState(false);
    const [removeWarningDisplayed, setRemoveWarningDisplayed] = useState(false);

    const onClickGarbageCan = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();

        setRemoveWarningDisplayed(true);
    }, [setRemoveWarningDisplayed]);

    return (
        <RecipeWrapper>
            <RecipeHeader onClick={() => setExpanded(isExpanded => !isExpanded)}>
                <Chevron expanded={expanded} stroke={'#FFF'} />
                <RecipeTitle>{name}</RecipeTitle>
                <GarbageCan stroke={'#FFF'} onClick={onClickGarbageCan}/>
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
            </Animate>

            <Modal
                isOpen={removeWarningDisplayed}
                onBackgroundClick={() => setRemoveWarningDisplayed(false)}
            >
                <ModalFrame closeButtonColor='#FFF' handleClose={() => setRemoveWarningDisplayed(false)}>
                    <WarningTitle>Really remove this recipe?</WarningTitle>
                    <ButtonsWrapper>
                        <PrimaryButton onClick={() => setRemoveWarningDisplayed(false)}>No</PrimaryButton>
                        <SecondaryButton onClick={() => removeRecipe(name)}>Yes</SecondaryButton>
                    </ButtonsWrapper>
                </ModalFrame>
            </Modal>
        </RecipeWrapper>
    );
};
