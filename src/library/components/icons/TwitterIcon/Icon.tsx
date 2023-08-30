import React from 'react';
import { IconProps } from '../services/Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
      <g>
        <path
          d="m.49,4l11.42,15.27L.42,31.68h2.59l10.06-10.87,8.13,10.87h8.8l-12.06-16.13,10.7-11.56h-2.59l-9.27,10.01-7.49-10.01H.49Zm3.8,1.92h4.04l17.86,23.87h-4.04L4.3,5.92Z"
          fill={colourFill}
        />
      </g>
    </svg>
  );
};

export default ServiceIcon;
