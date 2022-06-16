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
    results: ResultsProps;
    setResults: Dispatch<SetStateAction<ResultsProps>>;
  };
}

export interface ResultsProps {
  addresses: AddressProps[];
}

export interface AddressProps {
  ctaxband: string;
  ctaxbands: [];
  ctaxamount: string;
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
