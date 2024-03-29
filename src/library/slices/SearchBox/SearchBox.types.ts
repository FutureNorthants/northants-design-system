import { CustomSearchProps } from '../../components/CustomSearch/CustomSearch.types';

export interface SearchBoxProps {
  /**
   * The Custom Search sub-component props
   */
  customSearch: CustomSearchProps;

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
   * Optional call to action link
   */
  searchBoxLink?: SearchBoxLinkProps | null;

  /**
   * Is the search box link primary (true) or secondary (false)
   */
  searchBoxLinkIsPrimary?: boolean;

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
