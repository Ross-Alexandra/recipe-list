import styled from '@emotion/styled';
import { Modal } from '@ross-alexandra/react-utilities';
import { Link } from 'react-router-dom';
import {
    HamburgerMenu,
} from './icons';
import { accentColor, backgroundColor, contentObscureBackgroundColor, navigationBackgroundColor, sectionBackgroundColor, sectionBorderColor } from './palette';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    height: 100vh;
    width: 100vw;

    overflow: hidden;

    color: white;
    background-color: ${backgroundColor};
`;

export const AppTitle = styled.h1<{
    page: Page;
}>`
    box-sizing: border-box;
    padding: 20px 0px 0px 10px;
    margin-bottom: 20px;

    text-transform: uppercase;
    width: 100%;
    text-align: left;

    background-color: ${({page}) => accentColor(page)};
    border-bottom: 1px solid ${sectionBorderColor};
`;

export const AppBodyOuter = styled.div`
    box-sizing: border-box;
    padding: 0px 10px;
    width: 100%;
    flex-grow: 1;

    margin-bottom: 70px;
    overflow: hidden;
`;

export const AppBodyInner = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;

    background-color: ${sectionBackgroundColor};
    border: 1px solid ${sectionBackgroundColor};
    border-radius: 4px;

    overflow-y: auto;
`;

export const TabTray = styled.div`
    width: 100%;
    height: 50px;
    min-height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: 1px solid ${sectionBorderColor};
    background-color: ${navigationBackgroundColor};
`;

export const Tab = styled(Link)<{activePage: boolean}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
    flex: 1 1 0px;

    text-decoration: none;
    color: unset;

    -webkit-tap-highlight-color: transparent;

    box-sizing: border-box;
    ${({activePage}) => activePage ? `
        border-top: 1px solid white
    ` : `
        padding-top: 1px;
    `};
`;

export const TabText = styled.h3`
    text-transform: capitalize;
`;

export const HamburgerMenuIcon = styled(HamburgerMenu)`
    position: absolute;
    top: 27.5px;
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

        background-color: ${contentObscureBackgroundColor};
    }
`;
