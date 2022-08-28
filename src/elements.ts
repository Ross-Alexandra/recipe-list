import styled from '@emotion/styled';
import { Modal } from '@ross-alexandra/react-utilities';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './icons';
import { backgroundColor, sectionBackgroundColor, sectionBorderColor } from './palette';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    padding-top: 20px;

    overflow: hidden;

    color: white;
    background-color: ${backgroundColor};
`;

export const AppTitle = styled.h1`
    margin: 0px 0px 20px 0px;

    text-transform: uppercase;
`;

export const AppBodyOuter = styled.div`
    box-sizing: border-box;
    padding: 0px 10px;
    width: 100%;
    flex-grow: 1;

    margin-bottom: 20px;
`;

export const AppBodyInner = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;

    background-color: ${sectionBackgroundColor};
    border: ${sectionBackgroundColor};
    border-radius: 4px;
`;

export const TabTray = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: 1px solid ${sectionBorderColor};
    background-color: ${sectionBackgroundColor};
`;

export const Tab = styled(Link)<{activePage: boolean}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
    flex: 1 1 0px;
    border-right: 1px solid ${sectionBorderColor};

    text-decoration: none;
    color: unset;

    :last-of-type {
        border-right: unset;
    }

    ${({activePage}) => activePage && `
        background-color: ${sectionBackgroundColor};
    `}
`;

export const TabText = styled.h3`
    margin: unset;
    text-transform: capitalize;
`;

export const HamburgerMenuIcon = styled(HamburgerMenu)`
    position: absolute;
    top: 20px;
    right: 10px;
`;

export const AppPopout = styled(Modal)`
    .modal {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 85vw;
    
        background-color: ${backgroundColor};
    
        // Remove default styling.
        left: unset;
        transform: unset;
    }

    .modal-background {
        // inset not supported by ionic.
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }
`;
