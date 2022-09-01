import {css} from '@emotion/react';

export const backgroundColor = '#1c1b22';
export const sectionBackgroundColor = 'rgba(255, 255, 255, 0.1)';
export const sectionBorderColor = 'rgba(255, 255, 255, 0.15)';

export const TextInputCSS = (hasErrors: boolean) => css`
    ${hasErrors ? `
        border: 1px solid red;
    ` : `
        border: 1px solid ${sectionBorderColor};
    `}

    box-sizing: border-box;
    padding-left: 15px;
    background-color: ${sectionBackgroundColor};

    width: 100%;
    height: 40px;

    // Remove default styling.
    outline: none;
    appearance: none;

    ::placeholder {
        //font-family: 'Poppins', sans-serif;
    }
`;

export const ButtonCSS = () => css`
    display: grid;
    place-items: center;
    height: 40px;
    padding: 0px 20px;

    font-size: 17px;
    font-family: 'Poppins', sans-serif;

    background-color: ${sectionBackgroundColor};
    border: 1px solid ${sectionBorderColor};

    cursor: pointer;

    border-radius: 4px;
`;