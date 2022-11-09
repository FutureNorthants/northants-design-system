import React, { SetStateAction, Dispatch } from 'react';

export interface DirectoryFavouritesProviderProps {
  /**
   * What is this?
   */
  children: React.ReactNode;
}

export interface DirectoryFavouritesContextType {
  favourites?: {
    favourites: string[];
    setFavourites: Dispatch<SetStateAction<string[]>>;
  };
  toggleFavourites?: (id: string) => void;
}
