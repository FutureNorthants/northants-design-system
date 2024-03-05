import { BinCollectionRecordProps } from '../components/BinCollection/BinCollection.types';

export const PostcodeSearchApiUrl: string = process.env.NEXT_PUBLIC_POSTCODE_SEARCH_API_URL ?? '';
export const BinFinderApiUrl: string = process.env.NEXT_PUBLIC_BIN_FINDER_API_URL ?? '';

export interface PostcodeResultsProps {
  /**
   * An array of addresses
   */
  addresses: AddressProps[];

  /**
   * The postcode searched for
   */
  postcode: string;

  /**
   * Quantity of records in this payload
   */
  records_in_payload: number;

  /**
   * The requested page
   */
  requested_page: number;

  /**
   * The total number of pages
   */
  total_pages: number;

  /**
   * The total number of records
   */
  total_records: number;

  /**
   * An array of sovereigns
   */
  sovereigns: SovereignProps[];

  /**
   * An array of Unitaries
   */
  unitaries: UnitaryProps[];
}

export interface SovereignProps {
  /**
   * The sovereign name
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
}

export interface AddressProps {
  /**
   * Council tax bands
   */
  bands: CouncilTaxBands;

  /**
   * The address as a one line string
   */
  single_line_address: string;

  /**
   * Latitude of the address
   */
  latitude: string;

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
   * The sovereign council name
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

export interface AddressesProps {
  title: string;
  value: string;
  extra?: AddressProps;
}

export interface CouncilTaxBands {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
}

export interface BinFinderResponseProps {
  sovereign: string;
  uprn: string;
  dateRange?: string;
  calendar: string;
  collectionItems: BinCollectionRecordProps[];
}
