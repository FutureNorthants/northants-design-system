import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <defs>
        <clipPath id="uuid-153a211c-5ae1-49e1-a6fe-3d2fb2edd03d">
          <rect x="4.85" y="17.68" width="41.91" height="55.32" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-4570817d-eee5-49ad-91cb-8a220dcd9a25">
          <rect x="32.79" y="53.84" width="19.34" height="19.16" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-3d149009-ecca-4f84-8e9d-d697c07ed449">
          <rect x="17.75" y="4" width="16.12" height="7.11" fill="none" strokeWidth="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#uuid-153a211c-5ae1-49e1-a6fe-3d2fb2edd03d)">
        <path
          d="m43.28,55.78l1.57-36.83H6.5l2.08,48.5c.1,2.46,2.08,4.4,4.5,4.4h29.52"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <g clipPath="url(#uuid-4570817d-eee5-49ad-91cb-8a220dcd9a25)">
        <path
          d="m50.49,63.8c0,4.45-3.54,8.05-7.9,8.05s-7.9-3.6-7.9-8.05,3.53-8.05,7.9-8.05,7.9,3.61,7.9,8.05"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m45.98,63.8c0,4.6-6.77,4.6-6.77,0s6.77-4.6,6.77,0"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m4.24,14.35h43.99v2.3c0,1.27-1.01,2.3-2.25,2.3H4.24c-1.25,0-2.25-1.03-2.25-2.3s1.01-2.3,2.25-2.3h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m9.88,9.75h36.1c1.25,0,2.25,1.03,2.25,2.3v2.3H5.37c0-2.54,2.02-4.6,4.51-4.6h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <g clipPath="url(#uuid-3d149009-ecca-4f84-8e9d-d697c07ed449)">
        <path
          d="m21.16,5.15h9.03c1.25,0,2.25,1.03,2.25,2.3v2.3h-13.54v-2.3c0-1.27,1.01-2.3,2.25-2.3h0Z"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m48.23,12.05h4.51c1.25,0,2.25,1.03,2.25,2.3s-1.01,2.3-2.25,2.3h-4.51v-4.6Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m34.13,32.75c.03,6.11-.51,12.77-4.39,16.53-1.17,1.15-2.75,1.76-4.37,1.71-1.62-.06-3.16-.77-4.25-1.99-2.3-2.56-2.18-6.53.28-8.94,3.87-3.77,9.29-.42,12.73-7.31h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m26.36,44.69s-5.48,3.75-6.58,9.54"
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
