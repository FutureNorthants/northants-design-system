import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <g fill="none">
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-miterlimit="10"
          d="M23.29,54.08c0,4.3-6.46,4.3-6.46,0s6.46-4.31,6.46,0"
        />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-miterlimit="10"
          d="M33.62,54.08c0,4.3-6.46,4.3-6.46,0s6.46-4.31,6.46,0"
        />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-miterlimit="10"
          d="M32.39,45l-.06,2.65s0,3.23-3.88,3.23H22c-3.88,0-3.88-3.23-3.88-3.23V45Z"
        />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-miterlimit="10"
          d="M27.16,38.58h-.64V45L32.39,45l-.06-1.23s0-5.16-5.17-5.16Z"
        />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-miterlimit="10"
          d="M18.12,43.74a1.89,1.89,0,0,0-1.93-1.93h-.65"
        />
        <path stroke={colourFill} stroke-width="2.58px" stroke-linejoin="round" d="M26.52,21.14h-11" />
        <path stroke={colourFill} stroke-width="2.58px" stroke-linejoin="round" d="M34.91,27.6H15.54" />
        <path stroke={colourFill} stroke-width="2.58px" stroke-linejoin="round" d="M34.91,32.12H15.54" />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M44.6,18.56H38.14c-5.81,0-5.81-5.17-5.81-5.17V6.94"
        />
        <path
          stroke={colourFill}
          stroke-width="2.58px"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M45.18,18.82,32.2,6.29H10.37c-5.16,0-5.16,5.17-5.16,5.17V63.12s0,5.16,5.16,5.16H40.08c5.16,0,5.16-5.16,5.16-5.16l-.06-44.3Z"
        />
      </g>
    </svg>
  );
};

export default ServiceIcon;
