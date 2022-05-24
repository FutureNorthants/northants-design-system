import React from 'react';

export interface CardProps {
  /**
   * Optional card header
   */
  header?: string;

  /**
   * The card content
   */
  content: React.ReactNode;

  /**
   * The optional footer link
   */
  footer?: CardFooterProps;
}

export interface CardFooterProps {
  /**
   * The url for the link
   */
  url: string;

  /**
   * The text for the link
   */
  text: string;
}
