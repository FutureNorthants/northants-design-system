import React from 'react';
import { IconProps } from '../services/Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path
        d="m0,5.14v25.72c0,2.84,2.31,5.14,5.14,5.14h25.72c2.84,0,5.14-2.31,5.14-5.14V5.14c0-2.83-2.31-5.14-5.14-5.14H5.14C2.31,0,0,2.31,0,5.14Zm29.01,1.61l-8.34,9.53,9.81,12.97h-7.68l-6.01-7.86-6.88,7.86h-3.81l8.92-10.19L5.59,6.75h7.87l5.45,7.19,6.29-7.19s3.81,0,3.81,0Zm-3.03,20.17L12.31,8.84h-2.27l13.83,18.08h2.13Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
