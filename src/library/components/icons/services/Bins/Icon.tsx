import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <defs>
        <clipPath id="uuid-937e9ad4-d350-4552-8f2a-b23badb0669c">
          <rect x="4.7" y="18.09" width="39.53" height="52.91" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-0afcf5ee-0b46-4efd-a938-cc294df2e2a1">
          <rect x="31.06" y="52.67" width="18.25" height="18.33" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-dbc5c52f-15a5-4b1d-af2d-7480e3b76eb2">
          <rect x="16.86" y="5" width="15.2" height="6.8" fill="none" strokeWidth="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#uuid-937e9ad4-d350-4552-8f2a-b23badb0669c)">
        <path
          d="m40.95,54.53l1.48-35.23H6.25l1.96,46.39c.1,2.35,1.96,4.21,4.24,4.21h27.84"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <g clipPath="url(#uuid-0afcf5ee-0b46-4efd-a938-cc294df2e2a1)">
        <path
          d="m47.75,62.2c0,4.25-3.34,7.7-7.45,7.7s-7.45-3.45-7.45-7.7,3.33-7.7,7.45-7.7,7.45,3.45,7.45,7.7"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m43.49,62.2c0,4.4-6.38,4.4-6.38,0s6.38-4.4,6.38,0"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m4.13,14.9h41.49v2.2c0,1.21-.95,2.2-2.13,2.2H4.13c-1.18,0-2.13-.99-2.13-2.2s.95-2.2,2.13-2.2h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m9.44,10.5h34.05c1.18,0,2.13.99,2.13,2.2v2.2H5.19c0-2.43,1.9-4.4,4.25-4.4h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <g clipPath="url(#uuid-dbc5c52f-15a5-4b1d-af2d-7480e3b76eb2)">
        <path
          d="m20.08,6.1h8.51c1.18,0,2.13.98,2.13,2.2v2.2h-12.77v-2.2c0-1.22.95-2.2,2.13-2.2h0Z"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m45.62,12.7h4.26c1.18,0,2.13.98,2.13,2.2s-.95,2.2-2.13,2.2h-4.26v-4.4Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m31.79,43.5c0,3.39-2.15,6.39-5.3,7.36-3.14.97-6.53-.29-8.35-3.12-1.81-2.83-1.62-6.55.48-9.16,2.09-2.61,5.6-3.5,8.62-2.18"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m28.49,34.57l-2.41,4.81,4.7-.53-2.29-4.28Z"
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
