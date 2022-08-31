import React from 'react';

export const Chevron: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=10,
    height=10,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                stroke={stroke}
                fill={stroke}
            />
        </svg>
    );
};
