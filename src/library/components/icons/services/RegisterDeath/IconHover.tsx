import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m33.48 62.47 4.22 4.22L32.25 68ZM47.7 42.34l10.12 10.12 5.89-5.9-10.12-10.12Zm-19.56 17.3 21.32-21.48V2.71H26V24H4v38.37h23.56ZM5.1 19.76h16.66v-16Zm34.7 50.72L54.88 55.4 44.76 45.28 29.68 60.35l-2.93 13.17Z"
        fill={colourFill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ServiceIcon;
