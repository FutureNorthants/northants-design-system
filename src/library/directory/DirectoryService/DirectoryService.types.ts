import React from 'react';
import { ServiceContactProps } from '../ServiceContact/ServiceContact.types';
import { FileDownloadProps } from '../../components/FileDownload/FileDownload.types';
import { SocialProfile } from '../ServiceSocialLinks/ServiceSocialLinks.types';

export interface DirectoryServiceProps {
  /**
   * The unique service id
   */
  id: string;

  /**
   * The optional accreditations, such as Ofsted Grade
   */
  accreditations?: string;

  /**
   * Should the age be displayed in months?
   */
  ageInMonths?: boolean;

  /**
   * An array of contacts with phone numbers
   */
  contacts?: ServiceContactProps[];

  /**
   * The description as a plain HTML string
   */
  description: string;

  /**
   * The description as a react node
   */
  descriptionElement?: React.ReactNode;

  /**
   * The optional min and max ages
   */
  eligibilitys: EligibilitiesProps[];

  /**
   * The optional service email address
   */
  email?: string;

  /**
   * The optional costs of the service
   */
  fees?: string;

  /**
   * The optional additional languages
   */
  languages?: LanguagesProps[];

  /**
   * The service name
   */
  name: string;

  /**
   * The organization that the service belongs to
   */
  organization: OrganizationProps;

  /**
   * The optional opening times for the service
   */
  regular_schedules?: RegularScheduleProps[];

  /**
   * The service areas or locality the service operates in
   */
  service_areas: ServiceAreaProps[];

  /**
   * An optional array of locations, including addresses and facilities
   */
  service_at_locations?: LocationProps[];

  /**
   * An optional array of social profile links
   */
  service_social_profiles?: SocialProfile[];

  /**
   * The filters the service belongs to
   */
  service_taxonomys?: ServiceTaxonomy[];

  /**
   * Which taxonomies should be shown on the service page
   */
  taxonomiesToShow: TaxonomyToShow[];

  /**
   * The service website address
   */
  url?: string;

  /**
   * An optional array of files/links belonging to the service
   */
  uploads?: FileDownloadProps[];

  /**
   * When the service was updated. Expected format YYYY-MM-DD
   */
  updated_at?: string;

  /**
   * The url to the shortlist
   */
  shortListPath?: string;
}

export interface OrganizationProps {
  /**
   * The unique identifier for the service
   */
  id: string;

  /**
   * The description of the organization
   */
  description: string;

  /**
   * The full path to the organization logo
   */
  logo: string;

  /**
   * The name of the organization
   */
  name: string;

  /**
   * An optional uri
   */
  uri: string;

  /**
   * The organization website address
   */
  url: string;
}

export interface RegularScheduleProps {
  /**
   * The closing time in format HH:MM:SS
   */
  closes_at: string;

  /**
   * The opening time in format HH:MM:SS
   */
  opens_at: string;

  /**
   * The day of the week as text, e.g. 'Monday'
   */
  weekday: string;
}

export interface LocationProps {
  /**
   * The unique identifier for the location
   */
  id: number;

  /**
   * The name of the location, such as 'Head Office'
   */
  name: string;

  /**
   * The optional description
   */
  description: string;

  /**
   * Is the location visitable by the public?
   */
  is_visitable?: boolean;

  /**
   * The latitude of the location
   */
  latitude: string;

  /**
   * The longitude of the location
   */
  longitude: string;

  /**
   * An array of addresses for the location
   */
  physical_addresses: PhysicalAddressProps[];

  /**
   * An array of facilities that the location offers
   */
  accessibility_for_disabilities: AccessibilityForDisabilityProps[];
}

export interface PhysicalAddressProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The street number and address line 1
   */
  address_1: string;

  /**
   * The city
   */
  city: string;

  /**
   * The county
   */
  state_province: string;

  /**
   * The postcode
   */
  postal_code: string;

  /**
   * The country
   */
  country: string;
}

export interface AccessibilityForDisabilityProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The name of the facility offered by the location
   */
  accessibility: string;
}

export interface ServiceAreaProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * An optional extent string. Not used.
   */
  extent?: string | null;

  /**
   * The locality or service area name
   */
  service_area: string;

  /**
   * An optional uri. Not used.
   */
  uri?: string | null;
}

export interface EligibilitiesProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The eligibility name. Not used.
   */
  eligibility: string;

  /**
   * The minimum age as a number
   */
  minimum_age: number;

  /**
   * The maximum age as a number
   */
  maximum_age: number;
}

export interface LanguagesProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The additional language offered by the service
   */
  language: string;
}

export interface ServiceTaxonomy {
  /**
   * The unique identifier, in CURIE format. e.g. 'referralRoute:1'
   */
  id: string;

  /**
   * The name/label for the taxonomy
   */
  name: string;

  /**
   * The vocabulary in camelCase. e.g. 'referralRoute'
   */
  vocabulary: string;

  /**
   * An optional parent id. Not used.
   */
  parent?: string;
}

export interface TaxonomyToShow {
  /**
   * The camelCase vocabulary
   */
  vocabulary: string;

  /**
   * The label to present to the user for the taxonomy
   */
  label: string;
}
