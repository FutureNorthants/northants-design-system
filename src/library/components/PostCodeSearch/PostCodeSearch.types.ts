import { Dispatch, SetStateAction } from 'react';
import { AddressProps, PostcodeResultsProps, SovereignProps, UnitaryProps } from '../../helpers/api-helpers';
import { SignpostLinkProp } from '../../structure/SignpostLinks/SignpostLinks.types';

export interface PostCodeSearchProps {
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

  /**
   * Optional - Type of sovereign
   */
  sovereignType?: 'sovereigns' | 'wastesovereigns';
}

export interface AddressOption {
  /**
   * The title of the address
   */
  title: string;

  /**
   * The uprn value
   */
  value: string;

  /**
   * Array of postcode response props
   */
  info: AddressOptionInfoProps[];
}

export interface AddressOptionInfoProps {
  /**
   * An array of sovereigns
   */
  sovereigns: SovereignProps[];

  /**
   * An array of waste sovereigns
   */
  wasteSovereigns?: SovereignProps[];

  /**
   * An array of Unitaries
   */
  unitaries: UnitaryProps[];

  /**
   * An array of addresses for the postcode
   */
  addresses: AddressProps[];
}
