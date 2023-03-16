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
          d="M182 733 c-7 -3 -17 -16 -22 -29 -6 -14 -18 -24 -29 -24 -11 0 -25
-9 -31 -19 -16 -30 -14 -602 3 -624 11 -16 35 -17 252 -15 233 3 240 4 249 24
5 11 22 26 38 32 l28 10 0 269 0 269 -58 57 -58 57 -179 -1 c-99 0 -186 -3
-193 -6z m358 -68 l0 -54 55 -3 c30 -2 55 -6 55 -10 0 -5 0 -118 0 -253 l0
-245 -235 0 -235 0 0 303 c0 167 3 307 7 310 3 4 84 7 180 7 l173 0 0 -55z
m65 -5 l29 -30 -37 0 c-34 0 -37 2 -37 30 0 17 4 30 8 30 5 0 21 -13 37 -30z
m-445 -285 c0 -271 1 -285 19 -295 12 -6 100 -10 216 -10 153 0 196 -3 193
-12 -7 -19 -458 -24 -470 -6 -9 15 -11 568 -2 592 3 9 15 16 25 16 18 0 19
-12 19 -285z"
        />
      </g>
    </svg>
  );
};

export default ServiceIcon;
