import styled from '@emotion/styled';
import { backgroundColor, contentObscureBackgroundColor, sectionBackgroundColor, sectionBorderColor } from '../../../palette';

import {
    CheckedBox,
    Chevron as _Chevron,
    GarbageCan as _GarbageCan,
    UncheckedBox
} from '../../../icons';
import {
    Animate as _Animate,
    Modal as _Modal, 
} from '@ross-alexandra/react-utilities';

export const Animate = styled(_Animate)`
    overflow: hidden;
`;

export const AisleWrapper = styled.div`
    border-bottom: 1px solid ${sectionBorderColor};

    :last-of-type {
        border-bottom: unset;
    }
`;

export const AisleHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 65px;
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

export const AisleItemCount = styled.p`
    margin-left: auto;

    opacity: 0.5;
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
`;

export const GROCERY_ROW_HEIGHT = 70;
export const GroceryRow = styled.div<{
    checked: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0px 25px;

    height: ${GROCERY_ROW_HEIGHT}px;
    background-color: ${sectionBackgroundColor};
    border-bottom: 1px dashed ${sectionBorderColor};

    cursor: pointer;

    :last-of-type {
        border-bottom: unset;
    }

    ${({checked}) => checked ? `
        opacity: 0.5;
    ` : `
        opacity: 1;
    `}
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

export const GarbageCan = styled(_GarbageCan)`
    margin-left: auto;
    flex-shrink: 0;
    mix-width: 0px;

    cursor: pointer;
`;

export const Modal = styled(_Modal)`
    .modal {
        background-color: ${backgroundColor};
        width: 75vw;
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

export const LongNameText = styled.h3`
    padding: 15px 25px;

    text-transform: capitalize;
    text-align: center;
`;