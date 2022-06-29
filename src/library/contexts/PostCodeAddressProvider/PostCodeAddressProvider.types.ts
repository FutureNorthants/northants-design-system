import React, { SetStateAction, Dispatch } from 'react';
import { PostcodeResultsProps } from '../../helpers/api-helpers';

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
    results?: PostcodeResultsProps;
    setResults: Dispatch<SetStateAction<PostcodeResultsProps>>;
  };
}
