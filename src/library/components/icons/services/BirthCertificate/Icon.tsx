import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 56.88 57" height="76" version="1.0">
      <defs>
        <clipPath id="a">
          <path d="M0 12h44.906v40.898H0Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="M0 8h44.906v44.898H0Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M0 5.746h44.906v47.152H0Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M0 5.746h43v47.152H0Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="M5 5.746h32v47.152H5Zm0 0" />
        </clipPath>
      </defs>
      <g clip-path="url(#a)" fill="none" stroke={colourFill} stroke-width="4" stroke-miterlimit="10">
        <path
          d="M19.914 41.582c0 3.145-4.715 3.145-4.715 0s4.715-3.145 4.715 0M27.46 41.582c0 3.145-4.714 3.145-4.714 0s4.715-3.145 4.715 0"
          stroke-width="1.88604"
        />
      </g>
      <g clip-path="url(#b)">
        <path
          fill="none"
          d="m26.566 34.934-.05 1.933s0 2.36-2.829 2.36h-4.714c-2.828 0-2.828-2.36-2.828-2.36V34.98Zm0 0"
          stroke={colourFill}
          stroke-width="1.88604"
          stroke-miterlimit="10"
        />
      </g>
      <g clip-path="url(#c)">
        <path
          fill="none"
          d="M22.746 30.266h-.473v4.714l4.293-.046-.05-.895s0-3.773-3.77-3.773Zm0 0"
          stroke={colourFill}
          stroke-width="1.88604"
          stroke-miterlimit="10"
        />
      </g>
      <g clip-path="url(#d)">
        <path
          fill="none"
          d="M16.145 34.039s0-1.414-1.415-1.414h-.472"
          stroke={colourFill}
          stroke-width="1.88604"
          stroke-miterlimit="10"
        />
      </g>
      <path
        fill="none"
        stroke-linejoin="round"
        d="M22.273 17.535h-8.015M28.402 22.25H14.258M28.402 25.55H14.258"
        stroke={colourFill}
        stroke-width="1.88604"
        stroke-miterlimit="10"
      />
      <path
        stroke-linecap="round"
        fill="none"
        stroke-linejoin="round"
        d="M35.477 15.648h-4.715c-4.246 0-4.246-3.77-4.246-3.77V7.165"
        stroke={colourFill}
        stroke-width="1.88604"
        stroke-miterlimit="10"
      />
      <g clip-path="url(#e)">
        <path
          stroke-linecap="round"
          fill="none"
          stroke-linejoin="round"
          d="M35.898 15.836 26.422 6.69H10.484c-3.773 0-3.773 3.774-3.773 3.774v37.719s0 3.773 3.773 3.773h21.692c3.77 0 3.77-3.773 3.77-3.773Zm0 0"
          stroke={colourFill}
          stroke-width="1.88604"
          stroke-miterlimit="10"
        />
      </g>
    </svg>
  );
};

export default ServiceIcon;
