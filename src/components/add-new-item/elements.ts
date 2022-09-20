import styled from '@emotion/styled';

import {
    Plus as _NewItem
} from '../../icons';

import {
    Modal as _Modal
} from '@ross-alexandra/react-utilities';
import { contentObscureBackgroundColor, accentColor } from '../../palette';
import { keyframes } from '@emotion/react';

export const NewItemWrapper = styled.div<{
    overlayOpen: boolean;
    currentPage: Page;
}>`
    position: fixed;
    bottom: 60px;
    right: 10%;
     
    display: grid;
    place-items: center;

    border-radius: 50%;
    width: 40px;
    height: 40px;

    transition: background-color 600ms;
    background-color: ${({currentPage, overlayOpen}) => overlayOpen ? accentColor(currentPage) : 'white'};

    cursor: pointer;

    ${({overlayOpen}) => overlayOpen && 'z-index: 10;'}
`;

export const NewItem = styled(_NewItem)`
`;

export const Modal = styled(_Modal)`
    .modal {
        background-color: transparent;
        z-index: 9;

        bottom: 60px;
        right: 10%;
        left: unset;
        top: unset;
        transform: unset;
    }

    .modal-background {
        background-color: ${contentObscureBackgroundColor};
    }
`;

export const MainButonAlternate = styled.div`
    height: 15px;
    width: 15px;
`;

export const ModalContentWrapper = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: 40px 40px 40px;
    row-gap: 10px;

    place-items: center;
`;

export const ModalItemName = styled.h5<{
    index: number;
}>`
    justify-self: end;
    margin-right: 10px;

    font-weight: 700;
    font-size: 15px;

    animation-name: ${keyframes`
        from {opacity: 0}
        to {opacity: 1}
    `};

    animation-duration: 300ms;
    animation-delay: ${({index}) => index * 100}ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
`;

export const ModalItemIcon = styled.div<{
    index: number;
    forPage: Page;
}>`
    display: grid;
    place-items: center;

    width: 27.5px;
    height: 27.5px;

    background-color: ${({forPage}) => accentColor(forPage)};
    border-radius: 50%;

    color: black;
    cursor: pointer;

    animation-name: ${keyframes`
        from {opacity: 0}
        to {opacity: 1}
    `};

    animation-duration: 300ms;
    animation-delay: ${({index}) => index * 100}ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
`;