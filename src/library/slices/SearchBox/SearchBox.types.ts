export interface SearchBoxProps {
  /**
   * Field name for search box
   */
  fieldName: string;

  /**
   * The search box id
   */
  id?: string;

  /**
   * URL of the hero image (min 400pix high)
   */
  imageLarge?: string | null;

  /**
   * URL of the a smaller version of the image for lazy loading
   */
  imageSmall?: string | null;

  /**
   * Optional alt text for the image - ideally the image should be decorative only and not require a long description
   */
  imageAltText?: string | null;

  /**
   * The search box label
   */
  label: string;

  /**
   * Should the label be visible
   */
  labelHidden?: boolean;

  /**
   * Form submission method
   */
  method: string;

  /**
   * Where to submit the form
   */
  path: string;

  /**
   * Optional placeholder text
   */
  placeholder?: string | null;

  /**
   * The search button text
   */
  searchText: string;

  /**
   * Optional call to action link
   */
  searchBoxLink?: SearchBoxLinkProps | null;

  /**
   * Optional title
   */
  title?: string | null;
}

export interface SearchBoxLinkProps {
  /**
   * The url for the link
   */
  url: string;

  /**
   * The text for the link
   */
  title: string;
}
