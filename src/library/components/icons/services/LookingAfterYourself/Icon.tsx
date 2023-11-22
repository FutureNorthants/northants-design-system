import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m58.28,32.23c2.64-1.76,4.41-4.5,4.9-7.56.49-3.06-.34-6.19-2.3-8.64s-4.88-4.02-8.07-4.33v-2.05c0-3.12-2.52-5.65-5.62-5.65H5.62C2.52,4,0,6.53,0,9.65v37.23c0,3.09,2.53,5.59,5.65,5.59h30.52v7.74c0,.48.05.96.2,1.42.64,1.95,2.42,3.14,4.32,3.14h1.27v6.51h2.17v-23.15h-2.17v14.47h-.63c-1.25,0-2.26-1.01-2.26-2.26v-13.56c0-2.96.96-5.84,2.73-8.2,1.77-2.36,4.25-4.06,7.07-4.85,2.32.81,4.85.81,7.17,0,2.82.79,5.3,2.49,7.07,4.85,1.77,2.36,2.73,5.24,2.73,8.2v13.56c0,.6-.23,1.18-.65,1.6-.42.42-.99.66-1.58.66h-1.39v-14.47h-2.17v23.15h2.17v-6.51h1.16c.31,0,.62-.02.93-.08,2.29-.52,3.7-2.41,3.7-4.44v-13.56c0-3.06-.91-6.06-2.64-8.62-1.72-2.56-4.18-4.59-7.08-5.83h0ZM5.56,50.3c-1.87,0-3.39-1.52-3.39-3.39V9.56c0-1.87,1.52-3.39,3.39-3.39h44.12c.93,0,1.68.75,1.68,1.68v3.8c-.74.07-1.46.22-2.17.44v-2.07c0-.93-.75-1.68-1.68-1.68H7.73c-1.87,0-3.39,1.52-3.39,3.39v33.01c0,1.87,1.52,3.39,3.39,3.39h28.44v2.17H5.56Zm19.49-17.1c-3.66,0-6.95-2.2-8.35-5.58-1.4-3.38-.63-7.27,1.96-9.86,2.59-2.59,6.48-3.36,9.86-1.96,3.38,1.4,5.58,4.7,5.58,8.35,0,4.99-4.05,9.04-9.04,9.04h0Zm0,2.59c1.23,0,2.46-.21,3.63-.61,3.69,1.02,6.77,3.55,8.48,6.97-.41,1.23-.66,2.51-.75,3.81H11.68c.43-2.54,1.57-4.9,3.3-6.81,1.72-1.91,3.96-3.29,6.44-3.97,1.17.4,2.4.61,3.63.61h0Zm12.93,3.11c-1.67-2.52-4.05-4.51-6.85-5.72,2.68-1.81,4.44-4.68,4.84-7.86.4-3.18-.61-6.38-2.76-8.79-2.16-2.4-5.25-3.78-8.51-3.78s-6.35,1.37-8.51,3.77c-2.16,2.4-3.17,5.59-2.78,8.78.39,3.18,2.15,6.05,4.83,7.87-5,2.18-8.51,6.74-9.29,12.07h-1.31c-.62,0-1.13-.51-1.13-1.13v-6.25l5.35-5.27-1.61-1.58-3.74,3.69V11.64c0-.62.51-1.13,1.13-1.13h24.54l-1.47,1.45,1.61,1.58,3.08-3.03h2.47l-3.74,3.69,1.61,1.58,5.35-5.27h4.08c.3,0,.59.12.8.33s.33.5.33.79v1.51c-3.37,1.92-5.52,5.4-5.68,9.24-.16,3.83,1.69,7.48,4.9,9.66-3.21,1.4-5.86,3.81-7.53,6.86h0Zm5.15-15.87c0-3.66,2.2-6.95,5.58-8.35,3.38-1.4,7.27-.63,9.86,1.96,2.59,2.59,3.36,6.48,1.96,9.86-1.4,3.38-4.7,5.58-8.35,5.58-4.99,0-9.04-4.05-9.04-9.04h0Z"
        fill={colourFill}
      />
      <path d="m51.36,64.04h2.17v7.96h-2.17v-7.96Z" fill={colourFill} />
      <path d="m22.79,23.02c0,1.51-2.26,1.51-2.26,0s2.26-1.51,2.26,0" fill={colourFill} />
      <path d="m29.57,23.02c0,1.51-2.26,1.51-2.26,0s2.26-1.51,2.26,0" fill={colourFill} />
      <path
        d="m25.05,28.67c-1.42,0-2.77-.66-3.62-1.81l-1.81,1.36c1.28,1.71,3.29,2.71,5.43,2.71s4.15-1.01,5.43-2.71l-1.81-1.36c-.85,1.14-2.19,1.81-3.62,1.81Z"
        fill={colourFill}
      />
      <path d="m8.43,27.87l2.26-2.26,1.6,1.6-2.26,2.26-1.6-1.6Z" fill={colourFill} />
    </svg>
  );
};

export default ServiceIcon;