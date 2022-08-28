import React from 'react';
import styled from '@emotion/styled';

const SVGElement = styled.svg`
    overflow: visible;

    cursor: pointer;
`;

export const HamburgerMenu: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=35,
    height=35,
    stroke='#000000',
    ...props
}) => {
    return (
        <SVGElement 
            width={width}
            height={height}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z"
                stroke={stroke}
                fill={stroke} 
            />
        </SVGElement>
    );
};