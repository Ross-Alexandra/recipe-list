import styled from '@emotion/styled';
import {
    Animate as _Animate,
    Modal as _Modal,
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';
import { 
    AddToList as _AddToList,
    Chevron as _Chevron,
    RemoveFromList as _RemoveFromList,
    GarbageCan as _GarbageCan
} from '../../../icons';
import { backgroundColor, ButtonCSS, sectionBackgroundColor, sectionBorderColor } from '../../../palette';

export const RecipeWrapper = styled.div`
    border-bottom: 1px solid ${sectionBorderColor};
`;

export const RecipeHeader = styled.div`
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Chevron = styled(_Chevron)<{
    expanded: boolean;
}>`
    margin: 0px 10px 0px 5px;

    flex-shrink: 0;

    transition: transform 250ms;
    ${({expanded}) => expanded ? `
        transform: rotate(90deg);
    ` : `
        transform: rotate(0deg);
    `}
`;

export const RecipeTitle = styled.h3`
    text-transform: capitalize;

    font-size: 25px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const GarbageCan = styled(_GarbageCan)`
    margin-left: auto;

    cursor: pointer;
`;

export const IngredientsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 10px;

    background-color: ${sectionBackgroundColor};
`;

export const Animate = styled(_Animate)`
    overflow: hidden;
`;

export const INGREDIENT_ROW_HEIGHT = 70;
export const Ingredient = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: ${INGREDIENT_ROW_HEIGHT}px;

    border-bottom: 1px dotted ${sectionBorderColor};

    :last-of-type {
        border-bottom: unset;
    }
`;

export const IngredientInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // Don't allow the text element to infinitely expand this flex.
    min-width: 0px;
`;

export const IngredientName = styled.h4`
    font-size: 20px;
    text-transform: capitalize;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const IngredientAisle = styled.p`
    font-size: 12px;
    text-transform: capitalize;

    opacity: 0.5;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const AddToList = styled(_AddToList)`
    margin-right: 10px;

    flex-shrink: 0;

    cursor: pointer;
`;

export const RemoveFromList = styled(_RemoveFromList)`
    margin-right: 10px;

    flex-shrink: 0;

    cursor: pointer;
`;

export const Modal = styled(_Modal)`
    .modal {
        width: 90vw;
        background-color: ${backgroundColor};
    }
`;

export const ModalFrame = styled(_ModalFrame)`
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 35px;
`;

export const WarningTitle = styled.h3``;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 75%;
`;

export const PrimaryButton = styled.div`
    ${ButtonCSS()}
`;

export const SecondaryButton = styled.div`
    ${ButtonCSS()}

    opacity: 0.9;
`;