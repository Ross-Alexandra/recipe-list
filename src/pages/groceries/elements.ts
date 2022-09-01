import styled from '@emotion/styled';
import { ButtonCSS, sectionBorderColor } from '../../palette';

export const GroceryHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px dashed ${sectionBorderColor};
`;

export const TotalItemsText = styled.h4``;

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
    text-align: center;    
`;