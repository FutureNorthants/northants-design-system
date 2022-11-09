import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../../helpers/UseLocalStorage';
import { DirectoryFavouritesContextType, DirectoryFavouritesProviderProps } from './DirectoryFavouritesProvider.types';

const DirectoryFavouritesContext = createContext<DirectoryFavouritesContextType>({});

export const DirectoryFavouritesProvider: React.FunctionComponent<DirectoryFavouritesProviderProps> = ({
  children,
}) => {
  const [favourites, setFavourites] = useLocalStorage('directoryFavourites', []);

  const toggleFavourites = (id: string) => {
    const updatedFavourites = [...favourites];

    if (updatedFavourites.includes(id)) {
      updatedFavourites.splice(updatedFavourites.indexOf(id), 1);
    } else {
      updatedFavourites.push(id);
    }

    setFavourites(updatedFavourites);
  };

  const value = {
    favourites: {
      favourites: favourites,
      setFavourites: setFavourites,
    },
    toggleFavourites: toggleFavourites,
  };

  return <DirectoryFavouritesContext.Provider value={value}>{children}</DirectoryFavouritesContext.Provider>;
};

export const useDirectoryFavouritesContext = () => {
  return useContext(DirectoryFavouritesContext);
};
