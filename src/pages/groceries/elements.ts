import styled from '@emotion/styled';
import { backgroundColor, ButtonCSS, sectionBackgroundColor, sectionBorderColor, TextInputCSS } from '../../palette';
import {
    Modal as _Modal,
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';

export const GroceryHeader = styled.div`
    display: grid;
    grid-template-rows: .5fr 1fr;
    gap: 10px;

    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px dashed ${sectionBorderColor};
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;

export const TotalItemsText = styled.h4`
    opacity: 0.5;
`;

export const AddGroceryButton = styled.div`
    ${ButtonCSS()}
`;

export const ClearGroceriesButton = styled.div`
    ${ButtonCSS()}
`;

export const GroceryFooter = styled.div`
    display: grid;
    place-items: center;

    height: 100px;
    border-bottom: 1px dashed ${sectionBorderColor};
`;

export const AddItemsToListText = styled.p`
    font-size: 17px;
    text-align: center;    
`;

export const ModalTitle = styled.h2`
    width: 100%;
    text-align: center;
`;

export const GroceryNameInput = styled.input<{
    hasError: boolean
}>`
    ${({hasError}) => TextInputCSS(hasError)}
`;

export const AisleSelector = styled.select`
    text-transform: capitalize;
    background-color: ${sectionBackgroundColor};
    color: white;

    height: 40px;
    padding-left: 15px;
    outline: none;
    border: 1px solid ${sectionBorderColor};
`;

export const SaveButton = styled.div`
    ${ButtonCSS()}
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 11px;
`;

export const Modal = styled(_Modal)`
    .modal {
        background-color: ${backgroundColor};
        width: 90vw;
    }

    .modal-background {
        background-color: rgba(0, 0, 0, .75);
    }
`;

export const NewGroceryModalFrame = styled(_ModalFrame)`
    margin: 15px;
    padding: 15px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    gap: 15px;
`;

export const ClearWarningModalFrame = styled(_ModalFrame)`
    margin: 15px;
    padding: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    place-items: center;

    gap: 15px;
`;

export const ClearButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 75%;
`;

export const ClearButton = styled.div`
    ${ButtonCSS()}
    width: 25%;
`;
