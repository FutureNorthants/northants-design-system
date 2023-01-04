import React from 'react';

export interface SummaryProps {
  /**
   * Should the summary have padding
   */
  hasPadding?: boolean;

  /**
   * Should the summary have a background colour
   */
  hasBackground?: boolean;

  /**
   * The contents of the summary
   */
  children?: React.ReactNode;
}
