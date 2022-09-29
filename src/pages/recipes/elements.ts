import styled from '@emotion/styled';
import { backgroundColor, contentObscureBackgroundColor, sectionBorderColor } from '../../palette';
import {
    Modal as _Modal
} from '@ross-alexandra/react-utilities';

export const RecipesWrapper = styled.div``;

export const RecipesHeader = styled.div`
    border-bottom: 1px dashed ${sectionBorderColor};
`;

export const RecipesTitleText = styled.h4`
    opacity: 0.5;

    padding-bottom: 10px;
`;

export const AddRecipiesHelpText = styled.p`
    font-size: 17px;
    text-align: center;

    border-top: 1px dashed ${sectionBorderColor};
    padding: 10px 0px;
`;

export const Modal = styled(_Modal)`
    .modal {
        width: 90vw;
        border: 1px solid ${sectionBorderColor};
        border-radius: 4px;

        background-color: ${backgroundColor};
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
