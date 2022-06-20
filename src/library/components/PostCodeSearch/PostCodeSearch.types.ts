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
}

export interface SovereignProps {
  /**
   * The soverign name
   */
  name: string;

  /**
   * The optional website
   */
  website?: string;
}

export interface UnitaryProps {
  /**
   * The Unitary council name
   */
  name: string;

  /**
   * The optional unitary council code
   */
  unitaryCode?: number;
}

export interface AddressArrayProps {
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
  info: PostcodeResponseProps[];
}

export interface AddressProps {
  /**
   * The address as a one line string
   */
  single_line_address: string;

  /**
   * Council tax amount
   */
  ctaxamount: string;

  /**
   * Council tax band
   */
  ctaxband: string;

  /**
   * Lattitude of the address
   */
  lattitude: string;

  /**
   * Longitude of the address
   */
  longitude: string;

  /**
   * The parish
   */
  parish: string;

  /**
   * The polling district
   */
  polling_district: string;

  /**
   * The postcode
   */
  postcode: string;

  /**
   * The postcode without spaces
   */
  postcodens: string;

  /**
   * The soverign council name
   */
  sovereign: string;

  /**
   * The unitary council name
   */
  unitary: string;

  /**
   * The Unique Property Reference Number
   */
  uprn: string;

  /**
   * The ward
   */
  ward: string;

  /**
   * The website url
   */
  website_url: string;
}

export interface PostcodeResponseProps {
  /**
   * The quantity of soverigns
   */
  numOfSovereign: number;

  /**
   * An array of soverigns
   */
  sovereigns: SovereignProps[];

  /**
   * The quantity of Unitaries
   */
  numOfUnitary: number;

  /**
   * An array of Unitaries
   */
  unitary: UnitaryProps[];

  /**
   * An array of addresses for the postcode
   */
  addresses: AddressProps[];
}
