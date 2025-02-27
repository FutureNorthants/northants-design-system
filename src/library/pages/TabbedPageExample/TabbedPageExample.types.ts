import { ReactElement } from 'react';

export interface TabbedPageExampleProps {
  /**
   * What is this?
   */
  tabName: string;

  tabIndex: number;

  tabSizeInPixels: number;

  tabColour: string;

  tabTextColour: string;

  zIndex: number;

  onClick?(): any;

  children: ReactElement;
}
