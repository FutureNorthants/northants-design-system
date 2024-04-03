import React, { SetStateAction, Dispatch } from 'react';
import { PhysicalAddressProps } from '../../directory/DirectoryService/DirectoryService.types';

export interface DirectoryShortListProviderProps {
  /**
   * The child components
   */
  children: React.ReactNode;

  /**
   * An optional shortlist key to store and get different directory favourites
   */
  shortlistKey?: string;
}

export interface DirectoryShortListContextType {
  favourites?: {
    favourites: ShortListProps[];
    setFavourites: Dispatch<SetStateAction<ShortListProps[]>>;
  };
  toggleFavourites?: (
    id: string,
    name: string,
    snippet: string,
    email?: string,
    website?: string,
    phone?: string,
    addresses?: PhysicalAddressProps[],
    fees?: string
  ) => void;
  isFavourite?: (id: string) => boolean;
  clearShortlist?: () => void;
}

export interface ShortListProps {
  /**
   * The unique id for the service
   */
  id: string;

  /**
   * The name of the service
   */
  name: string;

  /**
   * The optional description snippet
   */
  snippet?: string;

  /**
   * The optional email
   */
  email?: string;

  /**
   * The optional website
   */
  website?: string;

  /**
   * The optional phone number
   */
  phone?: string;

  /**
   * The optional addresses
   */
  addresses?: PhysicalAddressProps[];

  /**
   * The optional fees for the service
   */
  fees?: string;
}
