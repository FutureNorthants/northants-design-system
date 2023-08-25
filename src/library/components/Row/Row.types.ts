import React from 'react';

export interface RowProps {
  /**
   * Option to display the border
   * Should only used for demonstrating grid
   */
  hasBorder?: boolean;

  /**
   * Is the container an unordered list?
   */
  isList?: boolean;

  /**
   * Option to prevent wrapping
   */
  hasWrap?: boolean;

  /**
   * The contents of the Row (should be Column)
   */
  children?: React.ReactNode;
}
