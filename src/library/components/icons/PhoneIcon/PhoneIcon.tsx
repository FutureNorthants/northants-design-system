import React from 'react';
import { PhoneIconProps } from './PhoneIcon.types';
import * as Styles from './PhoneIcon.styles';

const ChevronIcon: React.FunctionComponent<PhoneIconProps> = ({ colourFill = '' }) => {
  return (
    <Styles.StyledSVG
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
          d="M22,9V1h-4   c-4.418,0-8,3.582-8,8v14c0,4.418,3.582,8,8,8h4v-8h-4c-2.209,0-4-1.791-4-4v-6c0-2.209,1.791-4,4-4H22z"
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
          x1="18"
          x2="18"
          y1="9"
          y2="1"
        />
        <line
          fill="none"
          stroke={colourFill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="18"
          x2="18"
          y1="23"
          y2="31"
        />
      </g>
    </Styles.StyledSVG>
  );
};

export default ChevronIcon;
