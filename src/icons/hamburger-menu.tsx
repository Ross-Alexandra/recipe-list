import React from 'react';
import styled from '@emotion/styled';

const SVGElement = styled.svg`
    overflow: visible;

    cursor: pointer;
`;

export const HamburgerMenu: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=25,
    height=25,
    stroke='#000000',
    ...props
}) => {
    return (
        <SVGElement 
            width={width}
            height={height}
            {...props}
            
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 16.745a.75.75 0 01.75-.75h9.5a.75.75 0 010 1.5h-9.5a.75.75 0 01-.75-.75zm-9-5a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm4-5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z"
                fillRule="nonzero"
                stroke={stroke}
                fill={stroke}
            />
        </SVGElement>
    );
};