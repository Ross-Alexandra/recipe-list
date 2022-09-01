import React from 'react';

export const Close: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=12,
    height=12,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg height={height} width={width} {...props} viewBox="0 0 10 10">
            <line 
                x1={0}
                x2={10}
                y1={0}
                y2={10}
                strokeWidth={1} 
                stroke={stroke}
            />
            <line
                x1={10}
                x2={0}
                y1={0}
                y2={10}
                strokeWidth={1}
                stroke={stroke}
            />
        </svg>
    );
};
