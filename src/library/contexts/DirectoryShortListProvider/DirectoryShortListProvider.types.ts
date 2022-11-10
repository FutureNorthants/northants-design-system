import React, { SetStateAction, Dispatch } from 'react';

export interface DirectoryShortListProviderProps {
  /**
   * The child components
   */
  children: React.ReactNode;
}

export interface DirectoryShortListContextType {
  favourites?: {
    favourites: ShortListProps[];
    setFavourites: Dispatch<SetStateAction<ShortListProps[]>>;
  };
  toggleFavourites?: (id: string, name: string, snippet: string) => void;
  isFavourite?: (id: string) => boolean;
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
}
