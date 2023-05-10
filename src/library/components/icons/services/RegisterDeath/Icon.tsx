import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="M33.76 62.15 38 66.37l-5.44 1.27ZM48 47.91l4.23 4.23-11.3 11.29-4.23-4.23Zm16-1.66L53.88 36.13 30 60l-3 13.2 13.06-3Zm-42.24-27.2H11.09L21.76 8.79Zm23.44 17h4.26V2H23.07L4 20.35v41.31h22.73V57.4H8.26V23.31H26v-17h19.2Zm10 13.1L50.93 45l3-2.95 4.23 4.23Z"
        fill={colourFill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ServiceIcon;
