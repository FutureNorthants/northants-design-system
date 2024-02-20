import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <defs>
        <clipPath id="uuid-1bd45cd2-dc09-4254-9caf-6e8ca10ab50a">
          <rect x="3.95" y="18.48" width="42.11" height="54.52" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-08775c01-7b60-4195-b1f9-d3ce794ff0bd">
          <rect x="32.03" y="54.12" width="19.44" height="18.88" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-b8624d23-48c1-431d-ba59-7735700f512e">
          <rect x="16.91" y="5" width="16.2" height="7.01" fill="none" strokeWidth="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#uuid-1bd45cd2-dc09-4254-9caf-6e8ca10ab50a)">
        <path
          d="m42.57,56.03l1.57-36.3H5.61l2.09,47.79c.1,2.43,2.09,4.34,4.52,4.34h29.66"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <g clip-path="url(#uuid-08775c01-7b60-4195-b1f9-d3ce794ff0bd)">
        <path
          d="m49.81,63.93c0,4.38-3.56,7.93-7.93,7.93s-7.93-3.55-7.93-7.93,3.55-7.93,7.93-7.93,7.93,3.56,7.93,7.93"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m45.28,63.93c0,4.53-6.8,4.53-6.8,0s6.8-4.53,6.8,0"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m3.34,15.2h44.2v2.27c0,1.25-1.01,2.26-2.26,2.26H3.34c-1.25,0-2.26-1.02-2.26-2.26s1.01-2.27,2.26-2.27h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m9.01,10.66h36.27c1.25,0,2.26,1.02,2.26,2.27v2.26H4.48c0-2.5,2.03-4.53,4.53-4.53h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <g clip-path="url(#uuid-b8624d23-48c1-431d-ba59-7735700f512e)">
        <path
          d="m20.34,6.13h9.07c1.25,0,2.26,1.01,2.26,2.26v2.26h-13.6v-2.26c0-1.25,1.02-2.26,2.26-2.26h0Z"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m47.54,12.93h4.53c1.25,0,2.26,1.01,2.26,2.26s-1.01,2.27-2.26,2.27h-4.53v-4.53Z"
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
