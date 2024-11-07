'use client'

import { JSX, SVGProps } from "react";

export const ExitIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> ) => {
    return (
        <svg
            viewBox="0 0 32 26"
            fill="none"
            width={"1em"}
            height={"1em"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4 22.7294V3.24707H16V5.41178H6.66667V20.5647H16V22.7294H4ZM21.3333 18.4L19.5 16.8306L22.9 14.0706H12V11.9059H22.9L19.5 9.14589L21.3333 7.57648L28 12.9882L21.3333 18.4Z"
                fill="currentColor"
            />
        </svg>
    );
};