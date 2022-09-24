import React from 'react';
import { MealsIcon } from './meals';

export const AddMeal: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=30,
    height=30,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
            <line 
                x1={0}
                x2={8}
                y1={18}
                y2={18}
                strokeWidth={2}
                stroke={stroke}
            />
            <line 
                x1={4}
                x2={4}
                y1={14}
                y2={22}
                strokeWidth={2}
                stroke={stroke}
            />

            <MealsIcon 
                x={8}
                y={0}
                width={24}
                height={24}
                stroke={stroke}
            />
        </svg>
    );
};
