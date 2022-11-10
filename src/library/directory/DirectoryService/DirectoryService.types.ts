import React from 'react';
import { ServiceContactProps } from '../ServiceContact/ServiceContact.types';

export interface DirectoryServiceProps {
  id: string;
  contacts?: ServiceContactProps[];
  description: string;
  descriptionElement?: React.ReactNode;
  eligibilitys: EligibilitiesProps[];
  email?: string;
  name: string;
  organization: OrganizationProps;
  regular_schedules?: RegularScheduleProps[];
  service_at_locations?: LocationProps[];
  url?: string;
  accreditations?: string;
  fees?: string;
  service_areas: ServiceAreaProps[];
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
  name: string;
  description: string;
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
