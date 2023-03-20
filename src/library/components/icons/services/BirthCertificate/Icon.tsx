import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 20.108 20.108" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.636.854h5.153l3.3 3.299v10.472c0 .87-.682 1.586-1.536 1.644v-.97a2.315 2.315 0 1 0-3.175 0v.974H6.636c-.906 0-1.647-.74-1.647-1.647V2.501c0-.906.74-1.647 1.647-1.647zm6.784 14.158-.44 4.055-1.016-1.309-1.015 1.309-.532-3.76c-.44-.317-.727-1.09-.727-1.674 0-.962.78-2.388 2.238-2.33 1.678.068 2.33 1.331 2.33 2.293 0 .584-.145 1.162-.807 1.405zm-1.456-.743c.304 0 .304.462 0 .462a1.117 1.117 0 1 1 1.117-1.116c0 .304-.462.304-.462 0a.654.654 0 1 0-.654.654zm-1.926-9.575a3.046 3.046 0 1 1 0 6.092 3.046 3.046 0 0 1 0-6.092zm.719 1.2c.088-.336.2-.3.11.037-.563.742-1.374-.226-1.377-1.02-1.334-.075-2.504 1.748-2.504 2.845 0 1.39 1.071 3.09 3.044 3.028a3.092 3.092 0 0 0 3.064-3.058c0-1.39-1.611-3-3-3-.08 0-.06.03-.137.038l-.005.878c-.004.565.663.69.805.252zm3.348-1.656h-1.21a1.21 1.21 0 0 1-1.207-1.207v-1.21Z"
        fill="none"
        stroke={colourFill}
        strokeWidth="0.47025"
      />
      <ellipse cx="2.884" cy="8.566" rx=".169" ry="1.39" fill="none" strokeWidth="0.251354" />
      <ellipse cx="2.395" cy="8.115" rx="1.064" ry=".931" fill="none" strokeWidth="0.251354" />
      <ellipse cx="10.11" cy="10.199" rx="9.578" ry="6.74" fill="none" strokeWidth="0.251354" />
      <ellipse cx="5.833" cy="3.848" rx="3.033" ry="1.559" fill="none" strokeWidth="0.251354" />
      <path
        d="M5.723 4.457a.946 1.116 0 0 1-.314.83.946 1.116 0 0 1-.732.28l.1-1.11Z"
        strokeWidth=".251354"
        fill="none"
      />
      <path
        d="M8.025 7.715s.042-.802.692-.785c.518.012.61.329.655.82"
        strokeWidth=".353049"
        fill="none"
        stroke={colourFill}
      />
      <path d="M11.354 8.788s-1.196 1.6-2.608-.061" strokeWidth=".453071" fill="none" stroke={colourFill} />
      <path
        d="M11.95 7.726s-.041-.801-.691-.785c-.518.012-.61.329-.655.82"
        strokeWidth=".353049"
        fill="none"
        stroke={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
