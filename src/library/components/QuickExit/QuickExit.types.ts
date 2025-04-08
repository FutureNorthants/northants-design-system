import React from 'react';

export interface QuickExitProps {
  /**
  The text for the 'Quick Exit' button
  */  
  quickExitButtonLabel?: string;

  /**
  The hyperlink that the 'Quick exit' button redirects to
  */
  quickExitHyperlink?: string;

  /**
  Whether the 'Quick Exit' button is Solid or Transparent
  */
  quickExitButtonSolidOrTransparent?: 'solid' | 'transparent';

  /**
  Whether the text for the 'Quick Exit' button is accompanied by the 'Quick Exit' icon.
  */
  quickExitButtonIncludeIcon?: boolean;
}