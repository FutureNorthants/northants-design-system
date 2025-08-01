import * as React from 'react';

export interface PhaseBannerProps {
  /**
   * IsHome - whether or not the Banner is on the Home Page (and, therefore, needs to be darkened)
   */
  isHome?: boolean;

  /**
   * The Phase Title
   */
  phaseTitle?: string;

  /**
   * The children used for the text section of the Phase Banner
   */
  children?: React.ReactNode;
}
