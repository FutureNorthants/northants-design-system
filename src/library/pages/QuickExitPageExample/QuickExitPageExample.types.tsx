import React from 'react';

export interface QuickExitPageExampleProps {
  /**
   * The text for the 'Quick Exit' button (Default: 'Quick exit')
   */
  label?: string;

  /**
   * The hyperlink that the 'Quick exit' button redirects to  (default: www.bbc.co.uk/iplayer)
   */
  url?: string;

  /**
   * Whether the 'Quick Exit' button includes the 'Quick Exit' icon.
   */
  hasIcon?: boolean;

  /**
   * Whether 'Quick Exit Page Example' includes the 'Back to Top' icon for comparison.
   */
  includeBackToTopInExample?: boolean;

  /**
   * Children
   */
  children: React.ReactElement;
}
