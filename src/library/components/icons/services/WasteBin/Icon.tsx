import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <defs>
        <clipPath id="uuid-65635e94-3c00-4124-85aa-57edffa745eb">
          <rect x="4.21" y="15.61" width="45.8" height="59.29" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-a8412130-62c6-4efb-99c4-af423f0769ce">
          <rect x="34.74" y="54.36" width="21.14" height="20.54" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-7b3dbdd1-c37f-47d1-a609-2025c7b365ee">
          <rect x="18.3" y=".94" width="17.61" height="7.62" fill="none" strokeWidth="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#uuid-65635e94-3c00-4124-85aa-57edffa745eb)">
        <path
          d="m46.2,56.44l1.71-39.47H6l2.27,51.97c.11,2.64,2.28,4.72,4.92,4.72h32.26"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <g clip-path="url(#uuid-a8412130-62c6-4efb-99c4-af423f0769ce)">
        <path
          d="m54.07,65.03c0,4.77-3.87,8.63-8.63,8.63s-8.63-3.86-8.63-8.63,3.86-8.63,8.63-8.63,8.63,3.87,8.63,8.63"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m49.14,65.03c0,4.93-7.39,4.93-7.39,0s7.39-4.93,7.39,0"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m3.54,12.03h48.07v2.47c0,1.36-1.1,2.46-2.46,2.46H3.54c-1.36,0-2.46-1.11-2.46-2.46s1.1-2.47,2.46-2.47h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m9.7,7.1h39.44c1.36,0,2.46,1.11,2.46,2.47v2.46H4.77c0-2.72,2.21-4.93,4.93-4.93h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <g clip-path="url(#uuid-7b3dbdd1-c37f-47d1-a609-2025c7b365ee)">
        <path
          d="m22.02,2.18h9.86c1.36,0,2.46,1.1,2.46,2.46v2.46h-14.79v-2.46c0-1.36,1.11-2.46,2.46-2.46h0Z"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m22.02,23.13h9.86c1.36,0,2.46,1.36,2.46,2.46,0,1.36-1.11,2.46-2.46,2.46h-9.86c-1.36,0-2.46-1.36-2.46-2.46,0-1.36,1.11-2.46,2.46-2.46Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m51.61,9.57h4.93c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.47-2.46,2.47h-4.93v-4.93Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
    </svg>
  );
};

export default ServiceIcon;
