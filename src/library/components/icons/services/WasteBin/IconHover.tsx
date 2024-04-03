import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m46.18,12.83c0-.62-.51-1.13-1.14-1.13H8.63c-1.44,0-2.73.91-3.22,2.26h40.76v-1.13Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m30.25,8.31c0-.62-.51-1.13-1.14-1.13h-9.1c-.63,0-1.14.51-1.14,1.13v1.13h11.38v-1.13Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m45.04,18.48c.63,0,1.14-.51,1.14-1.13v-1.13H2.94c-.63,0-1.14.51-1.14,1.13s.51,1.13,1.14,1.13h42.09Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m42.27,56.92h-.01c-.21-.02-.43-.04-.64-.04-3.73-.02-6.79,2.92-6.9,6.62-.11,3.7,2.78,6.81,6.5,7,3.72.2,6.92-2.6,7.2-6.28.28-3.69-2.45-6.93-6.16-7.3h0Zm-.65,11.26c-2.51,0-4.55-2.02-4.55-4.52s2.04-4.52,4.55-4.52,4.55,2.02,4.55,4.52c0,1.2-.48,2.35-1.33,3.2-.85.85-2.01,1.32-3.22,1.32Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path d="m43.9,63.66c0,3.01-4.55,3.01-4.55,0s4.55-3.01,4.55,0" fill={colourFill} strokeWidth="0" />
      <path
        d="m51.86,13.96h-3.41v2.26h3.41c.63,0,1.14-.51,1.14-1.13s-.51-1.13-1.14-1.13Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m41.23,54.65l1.49-33.91H6.4l2.05,46.46c.07,1.81,1.57,3.24,3.4,3.24h23.78c-2.8-2.43-3.82-6.3-2.59-9.78,1.23-3.48,4.48-5.86,8.19-6.01h0Z"
        fill={colourFill}
        strokeWidth="0"
      />
    </svg>
  );
};

export default ServiceIcon;
