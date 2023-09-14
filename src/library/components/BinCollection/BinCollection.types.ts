import { AddressProps, SovereignProps, UnitaryProps } from '../../helpers/api-helpers';

export interface BinCollectionProps {
  /**
   * Title of bin collection search
   */
  title?: string;

  /**
   * Error in the form
   */
  formError?: boolean;

  /**
   * Link to send the user to another related service page or resource.
   */
  relatedServiceLink?: string;

  /**
   * Modifies search behavior based on the specific area (e.g., different collection zones or services)
   */
  isSpecificArea?: boolean;

  /**
   * BaseUrl of the Drupal application API
   */
  baseUrl?: string;
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
   * The address as a one line string
   */
  info?: string;
}

export interface AddressOptionInfoProps {
  /**
   * An array of sovereigns
   */
  sovereigns: SovereignProps[];

  /**
   * An array of Unitaries
   */
  unitaries: UnitaryProps[];

  /**
   * An array of addresses for the postcode
   */
  addresses: AddressProps[];
}
