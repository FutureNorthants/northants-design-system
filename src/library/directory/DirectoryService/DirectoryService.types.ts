import React from 'react';
import { ServiceContactProps } from '../ServiceContact/ServiceContact.types';
import { FileDownloadProps } from '../../components/FileDownload/FileDownload.types';
import { ServiceSocialLinksProps, SocialProfile } from '../ServiceSocialLinks/ServiceSocialLinks.types';

export interface DirectoryServiceProps {
  id: string;
  accreditations?: string;
  contacts?: ServiceContactProps[];
  description: string;
  descriptionElement?: React.ReactNode;
  eligibilitys: EligibilitiesProps[];
  email?: string;
  fees?: string;
  languages?: LanguagesProps[];
  name: string;
  organization: OrganizationProps;
  regular_schedules?: RegularScheduleProps[];
  service_areas: ServiceAreaProps[];
  service_at_locations?: LocationProps[];
  service_social_profiles?: SocialProfile[];
  url?: string;
  uploads?: FileDownloadProps[];

  /**
   * The url to the shortlist
   */
  shortListPath?: string;
}

export interface OrganizationProps {
  id: string;
  description: string;
  logo: string;
  name: string;
  uri: string;
  url: string;
}

export interface RegularScheduleProps {
  closes_at: string;
  opens_at: string;
  weekday: string;
}

export interface LocationProps {
  id: number;
  name: string;
  description: string;
  is_visitable?: boolean;
  latitude: string;
  longitude: string;
  physical_addresses: PhysicalAddressProps[];
  accessibility_for_disabilities: AccessibilityForDisabilityProps[];
}

export interface PhysicalAddressProps {
  id: number;
  address_1: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
}

export interface AccessibilityForDisabilityProps {
  id: number;
  accessibility: string;
}

export interface ServiceAreaProps {
  id: number;
  extent?: string | null;
  service_area: string;
  uri?: string | null;
}

export interface EligibilitiesProps {
  id: number;
  eligibility: string;
  minimum_age: number;
  maximum_age: number;
}

export interface LanguagesProps {
  id: number;
  language: string;
}
