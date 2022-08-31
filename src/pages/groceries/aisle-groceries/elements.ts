import styled from '@emotion/styled';
import { sectionBackgroundColor, sectionBorderColor } from '../../../palette';

import {
    CheckedBox,
    Chevron as _Chevron,
    UncheckedBox
} from '../../../icons';
import { Animate as _Animate } from '@ross-alexandra/react-utilities';

export const Animate = styled(_Animate)`
    overflow: hidden;
`;

export const AisleWrapper = styled.div`
`;

export const AisleHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 65px;

    border-bottom: 1px solid ${sectionBorderColor};
`;

export const Chevron = styled(_Chevron)<{
    expanded: boolean
}>`
    margin: 0px 10px 0px 5px;
    
    transition: transform 250ms;
    ${({expanded}) => expanded ? `
        transform: rotate(90deg);
    ` : `
        transform: rotate(0deg);
    `}
`;

export const AisleTitle = styled.h3`
    margin: 0px;

    font-size: 25px;
    text-transform: capitalize;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const AisleBody = styled.div`
    border-bottom: 1px solid ${sectionBorderColor};
    background-color: ${sectionBackgroundColor};

    padding: 0px 10px;
`;

export const GROCERY_ROW_HEIGHT = 70;
export const GroceryRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    height: ${GROCERY_ROW_HEIGHT}px;
    border-bottom: 1px dashed ${sectionBorderColor};

    :last-of-type {
        border-bottom: unset;
    }
`;

export const GroceryInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // Don't allow the text element to infinitely expand this flex.
    min-width: 0px;
`;

export const GroceryCheckedBox = styled(CheckedBox)`
    margin-right: 20px;

    height: 20px;
    width: 20px;

    flex-shrink: 0;

    cursor: pointer;
`;

export const GroceryUncheckedBox = styled(UncheckedBox)`
    margin-right: 20px;

    height: 20px;
    width: 20px;

    flex-shrink: 0;

    cursor: pointer;
`;

export const GroceryName = styled.h4`
    font-size: 20px;
    text-transform: capitalize;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const GroceryUsedBy = styled.p`
    font-size: 12px;

    opacity: 0.5;
    text-overflow: ellipsis;
    overflow: hidden;
`;
