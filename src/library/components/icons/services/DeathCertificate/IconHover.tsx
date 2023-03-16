import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="76px"
      height="76px"
      viewBox="0 0 76 76"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)" fill={colourFill} stroke="none">
        <path
          d="M186 679 c-8 -12 -25 -27 -38 -33 l-23 -12 -3 -274 c-2 -250 -1 -276
15 -287 12 -10 73 -13 219 -13 171 0 205 2 218 16 9 8 16 19 16 22 0 4 10 12
23 17 22 10 22 12 25 244 l2 235 -52 53 -52 53 -168 0 c-159 0 -168 -1 -182
-21z m391 -35 l53 -46 -2 -236 c-3 -233 -3 -237 -24 -240 -12 -2 -26 -14 -32
-28 l-12 -24 -204 0 c-160 0 -206 3 -215 14 -8 9 -11 91 -9 277 l3 264 28 13
c15 7 27 19 27 27 0 21 16 23 179 24 l154 1 54 -46z"
        />
        <path
          d="M210 405 l0 -265 200 0 200 0 0 214 0 215 -47 3 -48 3 -3 48 -3 47
-150 0 -149 0 0 -265z"
        />
        <path
          d="M540 620 c0 -15 7 -20 27 -20 25 0 26 0 8 20 -10 11 -22 20 -27 20
-4 0 -8 -9 -8 -20z"
        />
        <path
          d="M155 607 c-3 -7 -4 -125 -3 -262 l3 -250 194 -3 c123 -1 198 1 205 8
7 7 -47 10 -170 10 -127 0 -184 4 -192 12 -9 9 -12 79 -12 255 0 160 -4 243
-10 243 -6 0 -13 -6 -15 -13z"
        />
      </g>
    </svg>
  );
};

export default ServiceIcon;
