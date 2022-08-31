import React from 'react';

export const UncheckedBox: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=20,
    height=20,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"
                stroke={stroke}
                fill={stroke}
            />
        </svg>
    );
};
