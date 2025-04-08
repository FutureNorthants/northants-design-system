import React from 'react';

export interface QuickExitPageExampleProps {
  /**
  The text for the 'Quick Exit' button (Default: 'Quick exit')
  */  
  quickExitButtonLabel?: string;

  /**
  The hyperlink that the 'Quick exit' button redirects to  (default: www.bbc.co.uk/iplayer)
  */
  quickExitHyperlink?: string;

  /**
  Whether the 'Quick Exit' button is Solid or Transparent
  */
  quickExitButtonSolidOrTransparent?: 'solid' | 'transparent';

  /**
  Whether the 'Quick Exit' button includes the 'Quick Exit' icon.
  */
  quickExitButtonIncludeIcon?: false;

  /**
  Whether 'Quick Exit Page Example' includes the 'Back to Top' icon for comparison.
  */
  includeBackToTopInExample?: boolean;

  /**
  Children
  */
  children: React.ReactElement;
}
