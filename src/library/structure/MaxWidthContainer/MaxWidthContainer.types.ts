export interface MaxWidthContainerProps {
  /**
   * Any unique class names to apply to the page container outer div
   */
  classes?: string;
  
  /**
   * Remove background colour
   */
  noBackground?: boolean;

  /**
   * Remove bottom padding
   */
  noPadding?: boolean;

  /**
   * Allow overflow to be visible in inner div (only makes sense with padding allowed)
   */
   overflowVisible?: boolean;
}
