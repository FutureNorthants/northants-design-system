import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <defs>
        <clipPath id="uuid-02b47efb-d46d-4726-9747-f1693739ed55">
          <rect x="5.18" y="15.42" width="46.79" height="60.58" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-4dc1773e-ecec-4dcc-b4b7-9ab62bee6b9f">
          <rect x="36.38" y="55.02" width="21.6" height="20.98" fill="none" strokeWidth="0" />
        </clipPath>
        <clipPath id="uuid-5f3564f6-5d85-43cd-a948-48366deca695">
          <rect x="19.58" y=".44" width="18" height="7.78" fill="none" strokeWidth="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#uuid-02b47efb-d46d-4726-9747-f1693739ed55)">
        <path
          d="m48.09,57.14l1.75-40.33H7.02l2.32,53.11c.11,2.69,2.32,4.82,5.02,4.82h32.96"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <g clip-path="url(#uuid-4dc1773e-ecec-4dcc-b4b7-9ab62bee6b9f)">
        <path
          d="m56.14,65.92c0,4.87-3.95,8.82-8.82,8.82s-8.82-3.95-8.82-8.82,3.95-8.82,8.82-8.82,8.82,3.95,8.82,8.82"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m51.1,65.92c0,5.04-7.56,5.04-7.56,0s7.56-5.03,7.56,0"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m4.5,11.77h49.11v2.52c0,1.39-1.12,2.52-2.52,2.52H4.5c-1.39,0-2.52-1.13-2.52-2.52s1.12-2.52,2.52-2.52h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m10.8,6.73h40.3c1.39,0,2.52,1.13,2.52,2.52v2.52H5.76c0-2.78,2.25-5.04,5.03-5.04h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <g clip-path="url(#uuid-5f3564f6-5d85-43cd-a948-48366deca695)">
        <path
          d="m23.39,1.7h10.08c1.39,0,2.52,1.12,2.52,2.52v2.52h-15.11v-2.52c0-1.39,1.13-2.52,2.52-2.52h0Z"
          fill="none"
          stroke={colourFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.1"
        />
      </g>
      <path
        d="m23.39,23.11h10.08c1.39,0,2.52,1.39,2.52,2.52,0,1.39-1.13,2.52-2.52,2.52h-10.08c-1.39,0-2.52-1.39-2.52-2.52,0-1.39,1.13-2.52,2.52-2.52Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m53.62,9.25h5.04c1.39,0,2.52,1.12,2.52,2.52s-1.12,2.52-2.52,2.52h-5.04v-5.04Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m37.87,31.92c.04,6.69-.57,13.99-4.9,18.11-1.31,1.26-3.07,1.93-4.88,1.87-1.81-.06-3.52-.85-4.75-2.18-2.57-2.81-2.43-7.15.31-9.79,4.32-4.12,10.37-.46,14.22-8h0Z"
        fill="none"
        stroke={colourFill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="m29.19,45s-6.12,4.11-7.34,10.45"
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
