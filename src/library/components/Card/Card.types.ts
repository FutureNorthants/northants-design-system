export interface CardProps {
  /**
   * Optional card header
   */
  header?: string | null;

  /**
   * The card content as a string of html
   */
  content?: string | null;

  /** 
   * Optional large image 
   * */
  imageLarge?: string | null;

  /**
   * Optional small image
   */
  imageSmall?: string | null;

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
