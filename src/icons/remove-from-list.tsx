import React from 'react';

export const RemoveFromList: React.FC<React.SVGProps<SVGSVGElement>> = ({
    width=40,
    height=40,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg width={width} height={height} {...props} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.979 5c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.979-1c-.592 0-3.408 0-4 0-.265 0-.5.235-.5.5s.235.5.5.5h4c.265 0 .5-.235.5-.5s-.235-.5-.5-.5zm-6.873-3c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
                fill={stroke}
            />
        </svg>
    );
};
