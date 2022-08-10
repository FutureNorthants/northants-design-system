import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { AddressSearchProviderProps } from './AddressSearchProvider.types';

const AddressSearchProvider: React.FunctionComponent<AddressSearchProviderProps> = ({ children }) => {
  const restLink = new RestLink({ uri: 'https://api.westnorthants.digital/' });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AddressSearchProvider;
