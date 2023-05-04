import React from 'react';
import { PhoneIconProps } from './PhoneIcon.types';

const ChevronIcon: React.FunctionComponent<PhoneIconProps> = ({ colourFill = '' }) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      height="36px"
      width="36px"
    >
      <desc />
      <g>
        <path
          d="M9,19H1v4   c0,4.418,3.582,8,8,8h14c4.418,0,8-3.582,8-8v-4h-8v4c0,2.209-1.791,4-4,4h-6c-2.209,0-4-1.791-4-4V19z"
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="9"
          x2="1"
          y1="23"
          y2="23"
        />
        <line
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="23"
          x2="31"
          y1="23"
          y2="23"
        />
        <circle cx="16" cy="15" r="1" />
        <path
          d="M13.17,12.17C13.9,11.45,14.9,11,16,11   s2.1,0.45,2.83,1.17"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M10.34,9.34C11.79,7.9,13.79,7,16,7   s4.21,0.9,5.66,2.34"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M7.51,6.51C9.68,4.34,12.68,3,16,3   s6.32,1.34,8.49,3.51"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default ChevronIcon;
