import React from 'react';
import { EmailIconProps } from './EmailIcon.types';

const ChevronIcon: React.FunctionComponent<EmailIconProps> = ({ colourFill = '' }) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
    >
      <desc />
      <g>
        <rect
          fill="none"
          height="22"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          width="30"
          x="1"
          y="5"
        />
        <polyline
          fill="none"
          points="1,5 16,20 31,5     "
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
          x1="1"
          x2="12"
          y1="27"
          y2="16"
        />
        <line
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="31"
          x2="20"
          y1="27"
          y2="16"
        />
      </g>
    </svg>
  );
};

export default ChevronIcon;
