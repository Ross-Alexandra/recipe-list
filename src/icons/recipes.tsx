import React from 'react';

export const RecipesIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=40,
    height=40,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
            <path
                d="M8.742 2.397A4.486 4.486 0 0112 1c1.282 0 2.439.536 3.258 1.397A6.503 6.503 0 0124 8.5a6.494 6.494 0 01-3 5.476V23H3v-9.024A6.497 6.497 0 010 8.5a6.503 6.503 0 018.742-6.103zM15 22h5v-7.505c-.715.307-1.38.47-1.953.525a.5.5 0 11-.094-.995C19.341 13.893 23 12.626 23 8.5 23 5.464 20.535 3 17.5 3c-1.099 0-1.771.29-2.512.563C13.467 1.967 12.586 2 12 2c-.595 0-1.474-.026-2.987 1.563C8.226 3.272 7.591 3 6.5 3A5.503 5.503 0 001 8.5c0 4.13 3.663 5.394 5.048 5.525a.499.499 0 11-.095.995A6.604 6.604 0 014 14.495V22h5v-3.5a.5.5 0 111 0V22h4v-3.5a.5.5 0 111 0V22z"
                stroke={stroke}
            />
        </svg>
    );
};