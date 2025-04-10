import React from 'react';

export interface QuickExitProps {
  /**
  The text for the 'Quick Exit' button
  */  
  label?: string;

  /**
  The hyperlink that the 'Quick exit' button redirects to
  */
  url?: string;

  /**
  Whether the 'Quick Exit' button is Solid or Transparent
  */
  isTransparent?: boolean;

  /**
  Whether the text for the 'Quick Exit' button is accompanied by the 'Quick Exit' icon.
  */
  hasIcon?: boolean;
}