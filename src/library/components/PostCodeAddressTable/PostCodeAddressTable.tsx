import React from 'react';
import { PostCodeAddressTableProps } from './PostCodeAddressTable.types';
import * as Styles from './PostCodeAddressTable.styles';
import { usePostcodeAddressContext } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';

const PostCodeAddressTable: React.FunctionComponent<PostCodeAddressTableProps> = () => {
  const {
    postcodeValue: { postcode: postcode, setPostcode: setPostCode },
    resultsValue: { results: results, setResults: setResults },
  } = usePostcodeAddressContext();

  const hasResults = results.addresses.length > 0;

  return (
    <>
      {hasResults && (
        <Styles.Container data-testid="PostCodeAddressTable">
          <div className="table-container">
            <table>
              <caption>List of addresses</caption>
              <thead>
                <tr>
                  <th scope="col">Address</th>
                  <th scope="col">Band</th>
                  <th scope="col">Annual charge</th>
                </tr>
              </thead>
              <tbody>
                {results.addresses.map((addr, i) => (
                  <tr key={i}>
                    <th scope="row">{addr.single_line_address}</th>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Styles.Container>
      )}
    </>
  );
};

export default PostCodeAddressTable;
