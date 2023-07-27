import React from 'react';
import { WebsiteIconProps } from './WebsiteIcon.types';

const WebsiteIcon: React.FunctionComponent<WebsiteIconProps> = ({ colourFill = '' }) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      height="36px"
    >
      <desc />
      <g>
        <path
          d="M29,27H3   c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2v18C31,26.105,30.105,27,29,27z"
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <rect
          fill="none"
          height="4"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          width="4"
          x="14"
          y="27"
        />
        <line
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="31"
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
          x1="9"
          x2="23"
          y1="31"
          y2="31"
        />
      </g>
    </svg>
  );
};

export default WebsiteIcon;
