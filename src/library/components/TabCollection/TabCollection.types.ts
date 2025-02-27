import React from 'react';
import { whitespace } from 'stylis';

export interface TabCollectionContentProps {
  tabName: string;

  tabColour?: string;

  tabTextColour?: string;

  tabContents: React.ReactElement;
}

export interface TabCollectionProps {
  tabSizesInPixels?: number;

  tabColoursInPixels?: string;

  tabTextColoursInPixels?: string;

  tabCollectionContents: Array<TabCollectionContentProps>;
}

/*

import React from 'react';

export interface TabCollectionProps {

  tabNames: string[];

  children: React.ReactElement;
}

*/
