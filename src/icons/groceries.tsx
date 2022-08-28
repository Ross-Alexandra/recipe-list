import React from 'react';

export const GroceriesIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=40,
    height=40,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M4.558 7l4.701-4.702a1.02 1.02 0 011.442 1.442L7.441 7H4.558zm12.001 0h2.883l-4.701-4.702a1.02 1.02 0 00-1.442 1.442L16.559 7zm3.703 4l-.016.041L16.648 20H7.352l-3.597-8.961L3.739 11h16.523zM24 9H0v2h.643c.534 0 1.021.304 1.256.784L6 22h12l4.102-10.214A1.396 1.396 0 0123.358 11H24V9z" 
                stroke={stroke}
                fill={stroke}
            />
        </svg>
    );
};