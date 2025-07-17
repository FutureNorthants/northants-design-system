import React from 'react';

export interface SummaryListProps {
  /**
   * An array of SummaryRowProps
   */
  terms: SummaryRowProps[];

  /**
   * Option to remove margin (default is true)
   */
  hasMargin?: boolean;
}

export interface SummaryRowProps {
  /**
   * The title for the summary item
   */
  term: string;

  /**
   * The detail content
   */
  detail: string;
}
