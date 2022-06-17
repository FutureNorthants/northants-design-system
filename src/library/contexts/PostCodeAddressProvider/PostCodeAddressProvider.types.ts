import React, { SetStateAction, Dispatch } from 'react';

export interface PostCodeAddressProviderProps {
  /**
   * What is this?
   */
  children: React.ReactNode;
}

export interface PostCodeAddressContextType {
  postcodeValue?: {
    postcode: string;
    setPostcode: Dispatch<SetStateAction<string>>;
  };
  resultsValue?: {
    results?: ResultsProps;
    setResults: Dispatch<SetStateAction<ResultsProps>>;
  };
}

export interface ResultsProps {
  addresses: AddressProps[];
  postcode: string;
  records_in_payload: number;
  requested_page: number;
  total_pages: number;
  total_records: number;
}

export interface AddressProps {
  bands: CouncilTaxBands;
  latitude: string;
  longitude: string;
  parish: string;
  postcode: string;
  single_line_address: string;
  sovereign: string;
  unitary: string;
  uprn: string;
  ward: string;
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
