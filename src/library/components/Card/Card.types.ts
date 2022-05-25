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

  /** Optional large image */
  imageLarge?: string;

  /**
   * Optional small image
   */
  imageSmall?: string;

  /**
   * Optional image alt text
   */
  imageAltText?: string;

  /**
   * The optional footer link
   */
  footerLink?: CardFooterLinkProps;
}

export interface CardFooterLinkProps {
  /**
   * The url for the link
   */
  url: string;

  /**
   * The text for the link
   */
  text: string;
}
