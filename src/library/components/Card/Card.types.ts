import React from 'react';

export interface CardProps {
  /**
   * Optional card header
   */
  header?: string;

  /**
   * The card content as a string of html
   */
  content: string;

  /** Optional large image */
  imageLarge?: string;

  /**
   * Optional small image
   */
  imageSmall?: string;

  /**
   * Optional image alt text
   */
  imageAltText?: string | null;

  /**
   * The optional footer link
   */
  footerLink?: CardFooterLinkProps | null;
}

export interface CardFooterLinkProps {
  /**
   * The url for the link
   */
  url: string;

  /**
   * The text for the link
   */
  title: string;
}
