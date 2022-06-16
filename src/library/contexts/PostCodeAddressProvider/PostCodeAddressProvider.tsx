import React, { createContext, useContext, useState } from 'react';

import { PostCodeAddressProviderProps, PostCodeAddressContextType } from './PostCodeAddressProvider.types';

// const PostCodeAddressContext = createContext(
//     {
//         postcode: {
//             state: {},
//             actions: {}
//         },
//         results: {
//             state: {},
//             actions: {}
//         }
//     }
// );

const PostCodeAddressContext = createContext<PostCodeAddressContextType>({});

export const PostCodeAddressProvider: React.FunctionComponent<PostCodeAddressProviderProps> = ({ children }) => {
  const [postcode, setPostCode] = useState<PostCodeAddressContextType['postcodeValue']['postcode']>('');
  const [results, setResults] = useState<PostCodeAddressContextType['resultsValue']['results']>([]);

  const value: PostCodeAddressContextType = {
    postcodeValue: {
      postcode: postcode,
      setPostcode: setPostCode,
    },
    resultsValue: {
      results: results,
      setResults: setResults,
    },
  };

  return <PostCodeAddressContext.Provider value={value}>{children}</PostCodeAddressContext.Provider>;
};

export const usePostcodeAddressContext = () => {
  return useContext(PostCodeAddressContext); // as PostCodeAddressContextType;
};
