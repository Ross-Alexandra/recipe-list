import styled from '@emotion/styled';
import { backgroundColor, sectionBorderColor } from '../../palette';
import {
    Modal as _Modal
} from '@ross-alexandra/react-utilities';
import {
    NewItem as _NewItem
} from '../../icons';

export const RecipesWrapper = styled.div``;

export const NewRecipeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 90px;
    border-bottom: 1px dashed ${sectionBorderColor};

    padding-bottom: 5px;
`;

export const AddNewItemText = styled.h3`
    margin-bottom: 5px;

    font-size: 25px;
`;

export const NewItem = styled(_NewItem)`
    overflow: visible;
`;

export const Modal = styled(_Modal)`
    .modal {
        width: 90vw;
        border: 1px solid ${sectionBorderColor};
        border-radius: 4px;

        background-color: ${backgroundColor};
    }

    .modal-background {
        background-color: rgba(0, 0, 0, 0.75);
    }
`;
