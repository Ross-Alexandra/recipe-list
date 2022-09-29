import styled from '@emotion/styled';
import {
    backgroundColor,
    ButtonCSS,
    contentObscureBackgroundColor,
    sectionBorderColor,
    TextInputCSS
} from '../../palette';

import {
    Modal as _Modal,
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';

export const Modal = styled(_Modal)`
    .modal {
        background-color: ${backgroundColor};
        border: 1px solid ${sectionBorderColor};

        width: 90vw;
    }

    .modal-background {
        // inset not supported by ionic.
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;

        background-color: ${contentObscureBackgroundColor};
    }
`;

export const ModalFrame = styled(_ModalFrame)`
    padding: 20px 10px 10px 10px;
`;

export const MealCountWrapper = styled.div`
    border-bottom: 1px dashed ${sectionBorderColor};
    padding-bottom: 10px;
`;

export const MealCountText = styled.h4`
    opacity: 0.5;
`;

export const NoMealsRow = styled.div`
    display: grid;
    place-items: center;

    padding: 10px 0px;
    border-bottom: 1px dashed ${sectionBorderColor};
`;

export const NoMealsText = styled.p`
    text-align: center;

    font-size: 17px;
`;

export const NewMealForm = styled.form`;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    row-gap: 10px;
`;

export const NewMealTitle = styled.h2`
    text-align: center;
`;

export const NewMealNameInput = styled.input<{
    hasErrors: boolean;
}>`
    ${({hasErrors}) => TextInputCSS(hasErrors)}
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 11px;
`;

export const SubmitMealButton = styled.button`
    ${ButtonCSS}
`;
