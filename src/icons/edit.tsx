import React from 'react';

export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=24,
    height=24,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M5 21h-5v-2h5v2zm3.424-5.718l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534z"
                stroke={stroke}
                fill={stroke}    
            />
        </svg>
    );
};