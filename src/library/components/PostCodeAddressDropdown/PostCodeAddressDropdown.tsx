import React, { useState } from 'react';
import { PostCodeAddressDropdownProps } from './PostCodeAddressDropdown.types';
import * as Styles from './PostCodeAddressDropdown.styles';
import { usePostcodeAddressContext } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import { AddressesProps } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider.types';

const PostCodeAddressDropdown: React.FunctionComponent<PostCodeAddressDropdownProps> = () => {
  const [currentAddress, setCurrentAddress] = useState<AddressesProps>(null);
  const {
    postcodeValue: { postcode: postcode, setPostcode: setPostCode },
    resultsValue: { results: results, setResults: setResults },
  } = usePostcodeAddressContext();

  const optionPicked = (e) => {
    if (e.target.value !== '') {
      const singleAddress = addresses.find((address) => parseInt(address.value) === parseInt(e.target.value));
      setCurrentAddress(singleAddress);
    }
  };

  const hasResults = Object.keys(results).length > 0 ? true : false;

  let addresses: AddressesProps[] = [
    {
      title: 'No results found',
      value: 'no-results',
    },
  ];

  if (hasResults) {
    addresses = results.addresses.map((addr) => {
      return {
        title: addr.single_line_address,
        value: addr.uprn,
        extra: addr,
      };
    });
    addresses = [{ title: 'Choose an address', value: 'choose-address' }, ...addresses];
  }

  return (
    <>
      {hasResults && (
        <Styles.Container data-testid="PostCodeAddressDropdown">
          <DropDownSelect
            id="postcodeAddressLookup"
            label="Select your address"
            options={addresses}
            onChange={optionPicked}
            selected={hasResults ? 'choose-address' : 'no-results'}
          />
          <br />

          {currentAddress && (
            <Styles.AddressList>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Council tax band:</Styles.AddressListKey>
                <Styles.AddressListValue>{currentAddress.extra.ctaxband}</Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Charge per year:</Styles.AddressListKey>
                <Styles.AddressListValue>{currentAddress.extra.ctaxamount}</Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Town/Parish:</Styles.AddressListKey>
                <Styles.AddressListValue>{currentAddress.extra.parish}</Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Address:</Styles.AddressListKey>
                <Styles.AddressListValue>{currentAddress.extra.single_line_address}</Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Postcode:</Styles.AddressListKey>
                <Styles.AddressListValue>{currentAddress.extra.postcode}</Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Area:</Styles.AddressListKey>
                <Styles.AddressListValue>
                  <p>
                    This address is in <strong>{currentAddress.extra.unitary}</strong> Northamptonshire, in the{' '}
                    <strong>{currentAddress.extra.sovereign}</strong> area.
                  </p>
                </Styles.AddressListValue>
              </Styles.AddressListRow>
              <Styles.AddressListRow>
                <Styles.AddressListKey>Map:</Styles.AddressListKey>
                <Styles.AddressListValue>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${currentAddress.extra.latitude},${currentAddress.extra.longitude}`}
                    target="_blank"
                  >
                    View on google maps
                  </a>{' '}
                  (link opens in a new window)
                </Styles.AddressListValue>
              </Styles.AddressListRow>
            </Styles.AddressList>
          )}
        </Styles.Container>
      )}
    </>
  );
};

export default PostCodeAddressDropdown;
