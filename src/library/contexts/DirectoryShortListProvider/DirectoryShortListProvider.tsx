import React, { createContext, useContext } from 'react';
import useLocalStorage from '../../helpers/UseLocalStorage';
import {
  DirectoryShortListContextType,
  DirectoryShortListProviderProps,
  ShortListProps,
} from './DirectoryShortListProvider.types';
import { PhysicalAddressProps } from '../../directory/DirectoryService/DirectoryService.types';

const DirectoryShortListContext = createContext<DirectoryShortListContextType>({});

export const DirectoryShortListProvider: React.FunctionComponent<DirectoryShortListProviderProps> = ({
  shortlistKey = 'DirectoryShort',
  children,
}) => {
  const [favourites, setFavourites] = useLocalStorage(shortlistKey, []);

  const toggleFavourites = (
    id: string,
    name: string,
    snippet?: string,
    email?: string,
    website?: string,
    phone?: string,
    addresses?: PhysicalAddressProps[],
    fees?: string
  ) => {
    const updatedFavourites: ShortListProps[] = [...favourites];

    if (isFavourite(id)) {
      const favouriteToRemove = updatedFavourites.find((favourite) => favourite.id === id);
      updatedFavourites.splice(updatedFavourites.indexOf(favouriteToRemove), 1);
    } else {
      updatedFavourites.push({
        id: id,
        name: name,
        snippet: snippet,
        email: email,
        website: website,
        phone: phone,
        addresses: addresses,
        fees: fees,
      });
    }

    setFavourites(updatedFavourites);
  };

  const isFavourite = (id: string) => {
    return typeof favourites.find((favourite) => favourite.id === id) !== 'undefined';
  };

  const clearShortlist = () => {
    setFavourites([]);
  };

  const value = {
    favourites: {
      favourites: favourites,
      setFavourites: setFavourites,
    },
    toggleFavourites: toggleFavourites,
    isFavourite: isFavourite,
    clearShortlist: clearShortlist,
  };

  return <DirectoryShortListContext.Provider value={value}>{children}</DirectoryShortListContext.Provider>;
};

export const useDirectoryShortListContext = () => {
  return useContext(DirectoryShortListContext);
};
