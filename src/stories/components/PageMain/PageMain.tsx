import React from 'react';
import { StyledPageMain } from './styles';

export interface PageMainProps {
  /**
   * Any unique class names to apply to the page container
   */
  classes?: string;
}

/**
 * A container for holding the main content of a page
 */
export const PageMain: React.FC<PageMainProps> = ({
  classes,
  children,
  ...props
}) => {
  return (
    <StyledPageMain
      role="main" 
      id="main" 
      className={classes}
      {...props}
    >
      {children}
    </StyledPageMain>
  );
};
