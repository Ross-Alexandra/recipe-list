import styled from '@emotion/styled';
import {
    NewItem as _NewItem
} from '../../icons';
import { sectionBorderColor } from '../../palette';

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
    font-size: 25px;
`;

export const NewItem = styled(_NewItem)`
    overflow: visible;
`;

