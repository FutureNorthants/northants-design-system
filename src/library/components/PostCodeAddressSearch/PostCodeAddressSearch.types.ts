import { SignpostLinkProp } from '../../structure/SignpostLinks/SignpostLinks.types';

export interface PostCodeAddressSearchProps {
  /**
   * Title of postcode search link
   */
  title?: string;
  /**
   * Is there an error in the form?
   */
  formError?: boolean;
  /**
   * An array of the SignpostLinks
   */
  signPostLinks?: Array<SignpostLinkProp>;
  /**
   * Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage
   */
  otherCouncilLink?: string;
  /**
   * Optional - changes it to only give back the area you are from
   */
  isUnitary?: boolean;
}
