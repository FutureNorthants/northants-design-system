
import React, {createContext, useContext, useState} from "react";

import { PostCodeAddressProviderProps, PostCodeAddressContextType } from "./PostCodeAddressProvider.types";

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

const PostCodeAddressContext = createContext({});
const UserContext = createContext({});

export const useUser = () => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const [name, setName] = useState('World');
    const value = {
      state: {name},
      actions: {setName},
    };
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    )
  }



export const PostCodeAddressProvider: React.FC<PostCodeAddressProviderProps> = ({ children }) => {    
    const [postcode, setPostCode] = useState('');
    const [results, setResults] = useState({});

    const value = {
        postcodeValue: {
            state: {postcode},
            actions: {setPostCode}
        },
        resultsValue: {
            state: {results},
            actions: {setResults}
        }
    }

    return (
        <PostCodeAddressContext.Provider value={value}>
            {children}
        </PostCodeAddressContext.Provider>
    )

};


export const usePostcodeAddressContext = () => {
    return useContext(PostCodeAddressContext)// as PostCodeAddressContextType;
}