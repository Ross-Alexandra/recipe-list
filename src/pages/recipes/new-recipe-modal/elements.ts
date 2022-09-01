import styled from '@emotion/styled';
import {sectionBackgroundColor, sectionBorderColor, TextInputCSS } from '../../../palette';
import {
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';
import { 
    Close as _Close,
    NewItem as _NewItem
} from '../../../icons';

export const ModalFrame = styled(_ModalFrame)`
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 30px;
    padding: 2.5vh 0px;
`;

export const ModalTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;

    width: 100%;
    text-align: center;
`;

export const RecipeNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
`;

export const RecipeNameInput = styled.input<{
    hasErrors: boolean;
}>`
    ${({hasErrors}) => TextInputCSS(hasErrors)}
    width: 100%;
`;

export const RecipeIngredients = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;

    width: 90%;
`;

export const IngredientWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${sectionBackgroundColor};
    border: 1px solid ${sectionBorderColor};
    boder-radius: 4px;
`;

export const Close = styled(_Close)`
    position: absolute;
    top: -6px;
    right: -6px;

    background-color: white;
    padding: 3px;
    border-radius: 50%;

    cursor: pointer;
`;

export const IngredientName = styled.h4`
    text-transform: capitalize;
    text-align: center;

    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const IngredientAisle = styled.p` 
    font-size: 13px;
    opacity: 0.5;

    text-transform: capitalize;
`;

export const NewIngredient = styled.div`
    display: grid;
    grid-template-columns: minmax(0, .75fr) minmax(0, .25fr) 25px;
    align-items: center;
    column-gap: 15px;

    width: 90%;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 10px;
`;

export const IngredientNameInput = styled.input<{
    hasErrors: boolean;
}>`
    ${({hasErrors}) => TextInputCSS(hasErrors)}
`;

export const AisleSelector = styled.select<{
    hasErrors: boolean;
}>`
    text-transform: capitalize;

    height: 40px;
    background-color: ${sectionBackgroundColor};
    border: 1px solid ${sectionBorderColor};

    outline: none;
`;

export const AisleOption = styled.option``;

export const CreateRecipeButton = styled.div`
    display: grid;
    place-items: center;
    height: 40px;
    padding: 0px 20px;

    font-size: 17px;
    font-family: 'Poppins', sans-serif;

    background-color: ${sectionBackgroundColor};
    border: 1px solid ${sectionBorderColor};

    cursor: pointer;

    border-radius: 4px;
`;

export const NewItem = styled(_NewItem)`
    overflow: visible;
`;