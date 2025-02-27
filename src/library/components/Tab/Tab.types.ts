import { ReactElement } from 'react';

export interface TabProps {
  /**
   * What is this?
   */
  tabName: string;

  tabIndex: number;

  activeTabIndex: number;

  tabSizeInPixels: number;

  tabColour: string;

  tabTextColour: string;

  zIndex: number;

  onClickFn?: () => void;

  children: ReactElement;
}
