import React from 'react';

export interface QuickExitProps {
  /**
   * What is this?
   */
  quickExitButtonLabel?: string;

  quickExitHyperlink?: string;

  quickExitButtonSolidOrTransparent?: 'solid' | 'transparent';

  quickExitButtonIncludeIcon?: boolean;
}

/*
quickExitButtonColour?: string;

quickExitButtonSecondaryColour?: string;

quickExitButtonTextColour?: string;

quickExitButtonFontFamily?: string;

quickExitButtonFontSize?: string;

children?: React.ReactElement;
*/
