import React from 'react';
import { PinIconProps } from './PinIcon.types';

/**
 * Map pin icon
 */
const IconDownload: React.FunctionComponent<PinIconProps> = ({ colourFill }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.4 59.1">
      <path
        d="M19.7,5.6c-0.1,0-0.5,0.1-0.9,0.1c-3.3,0.4-6.5,2-8.9,4.4c-2.6,2.6-4.2,5.9-4.6,9.6c-0.1,1,0,3.1,0.1,4.1c0.3,2.1,1.1,4.2,2.3,6.6c0.9,1.6,1.6,2.9,4.2,7c0.9,1.4,1.9,3.1,2.6,4.2c2.3,3.9,4.1,7.9,5.4,11.9c0.2,0.6,0.3,0.8,0.6,0.9c0.5,0.2,1.1,0.1,1.4-0.3c0.1-0.1,0.2-0.5,0.4-0.9c1.1-3.3,2.5-6.5,4.2-9.5c1.2-2.2,2-3.6,4.4-7.4c1.7-2.7,2.3-3.6,2.9-4.8c1.6-2.9,2.5-5.3,2.9-7.8c0.2-1,0.2-3.1,0.1-4.1c-0.2-1.5-0.5-3-1-4.2c-2.1-5.2-6.8-8.9-12.4-9.8C22.9,5.6,20.2,5.5,19.7,5.6z"
        fill={colourFill}
      />
    </svg>
  );
};

export default IconDownload;
