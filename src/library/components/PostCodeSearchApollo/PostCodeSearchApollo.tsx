import React, { useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { gql } from '@apollo/client';
import { PostCodeSearchApolloProps } from './PostCodeSearchApollo.types';
import * as Styles from './PostCodeSearchApollo.styles';

const PostCodeSearchApollo: React.FunctionComponent<PostCodeSearchApolloProps> = ({ foo }) => {
  const [addresses, setAddresses] = useState([]);
  const [input, setInput] = useState('');
  const [hasError, setHasError] = useState(false);

  // Set `RestLink` with your endpoint
  const restLink = new RestLink({ uri: 'https://api.westnorthants.digital/' });

  // Setup your client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
  });

  const query = gql`
    query Postcode($postcode: String!, $page: Number) {
      postcode(postcode: $postcode, page: $page)
        @rest(type: "Postcode", path: "address-search/postcode/{args.postcode}/page/{args.page}") {
        apiversion
        totalrecords
        addresses {
          uprn
          postcode
          single_line_address
        }
      }
    }
  `;

  const getResults = () => {
    setHasError(false);
    client
      .query({ query, variables: { postcode: input, page: 1 } })
      .then((response) => {
        setAddresses(response.data.postcode.addresses);
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <Styles.Container data-testid="PostCodeSearchApollo">
      {addresses.length > 0 && (
        <ul>
          {addresses.map((address) => (
            <li key={address.uprn}>
              {address.uprn} {address.single_line_address}
            </li>
          ))}
        </ul>
      )}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={getResults}>Get results</button>
      {hasError && <p>An error occurred, please try again.</p>}
    </Styles.Container>
  );
};

export default PostCodeSearchApollo;
