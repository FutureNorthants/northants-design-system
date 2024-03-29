import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal Button on the page?
   */
  primary?: boolean;

  /**
   * How large should the Button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Button label
   */
  text?: string;

  /**
   * Button title optional
   */
  title?: string;

  /**
   * The URL for where to load when a user clicks on the Button
   */
  url: string;

  /**
   * Is the link to an external page?
   */
  isExternal?: boolean;

  /**
   * Is the button disabled?
   */
  isDisabled?: boolean;

  /**
   * onClick
   */
  onClick?: Function;

  /**
   * Optional override for the colour
   */
  colourOverride?: string;

  /**
   * Button contents
   */
  children?: React.ReactNode;
}
