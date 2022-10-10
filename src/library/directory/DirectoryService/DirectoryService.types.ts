import { ServiceContactProps } from '../ServiceContact/ServiceContact.types';

export interface DirectoryServiceProps {
  id: string;
  contacts?: ServiceContactProps[];
  description: string;
  email?: string;
  name: string;
  organization: OrganizationProps;
  regular_schedules?: RegularScheduleProps[];
  service_at_locations?: LocationProps[];
  url?: string;
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
}

export interface PhysicalAddressProps {
  address_1: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
}
