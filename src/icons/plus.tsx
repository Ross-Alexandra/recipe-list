import React from 'react';

export const Plus: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=30,
    height=30,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg 
            width={width}
            height={height}
            stroke={stroke}
            {...props} 
            
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
        >
            <line 
                x1='0'
                x2='24'
                y1='12'
                y2='12'
            />
            <line 
                x1='12'
                x2='12'
                y1='0'
                y2='24'
            />
        </svg>
    );
};
