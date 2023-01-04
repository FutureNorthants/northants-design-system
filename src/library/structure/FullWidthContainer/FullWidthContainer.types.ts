import React from 'react';

export interface FullWidthContainerProps {
  /**
   * Show background colour when true
   */
  hasBackground?: boolean;

  /**
   * Show top and bottom padding when true
   */
  hasPadding?: boolean;

  /**
   * The FullWidthContainer contents
   */
  children?: React.ReactNode;
}
