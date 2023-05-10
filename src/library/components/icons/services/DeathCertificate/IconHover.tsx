import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="M6.28 2A2.27 2.27 0 0 0 4 4.26v67.63a2.27 2.27 0 0 0 2.28 2.26h52.44A2.27 2.27 0 0 0 61 71.89v-46.8H40.18a2.28 2.28 0 0 1-2.27-2.26V2Zm36 .9V20h17.11ZM16 33.75h32.9a2.21 2.21 0 0 1 1.56.61 2.17 2.17 0 0 1-1.56 3.72H16.22a2.17 2.17 0 0 1-.22-4.33Zm-.68 10.82.23.72h34.08a2.17 2.17 0 1 1 0 4.33H15.54s-2.25-1-2.32-2.2a2.26 2.26 0 0 1 2.09-2.36v-.49Zm.22 12.26a.81.81 0 0 1 .22 0h32.68a2.11 2.11 0 0 1 1.56.61 2.15 2.15 0 0 1 0 3.1 2.15 2.15 0 0 1-1.56.61H15.76a2.16 2.16 0 0 1-.22-4.32Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
