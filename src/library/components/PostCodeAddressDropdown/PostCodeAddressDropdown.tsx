import React, { useState } from 'react';
import { PostCodeAddressDropdownProps } from './PostCodeAddressDropdown.types';
import * as Styles from './PostCodeAddressDropdown.styles';
import { usePostcodeAddressContext } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import Heading from '../Heading/Heading';
import { AddressesProps } from '../../helpers/api-helpers';

/**
 * The dropdown component for selecting and displaying address information
 */
const PostCodeAddressDropdown: React.FunctionComponent<PostCodeAddressDropdownProps> = () => {
  const [currentAddress, setCurrentAddress] = useState<AddressesProps>(null);
  const {
    resultsValue: { results: results },
  } = usePostcodeAddressContext();

  const optionPicked = (e) => {
    if (e.target.value !== '') {
      const singleAddress = addresses.find((address) => parseInt(address.value) === parseInt(e.target.value));
      setCurrentAddress(singleAddress);
    }
  };

  const hasResults = results.total_records > 0;

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
          <Heading level={3} text="Address Results" />
          <DropDownSelect
            id="postcodeAddressLookup"
            label="Select your address"
            options={addresses}
            onChange={optionPicked}
            selected={hasResults ? 'choose-address' : 'no-results'}
          />
          <br />

          {currentAddress && (
            <>
              {currentAddress.extra.bands && (
                <>
                  <Heading level={3} text="Council Tax Bands" />
                  <Styles.AddressList>
                    {Object.keys(currentAddress.extra.bands).map((band) => (
                      <Styles.AddressListRow key={band}>
                        <Styles.AddressListKey>{band.toUpperCase()}</Styles.AddressListKey>
                        <Styles.AddressListValue>
                          {Number(currentAddress.extra.bands[band]).toLocaleString('en-GB', {
                            style: 'currency',
                            currency: 'GBP',
                          })}
                        </Styles.AddressListValue>
                      </Styles.AddressListRow>
                    ))}
                  </Styles.AddressList>
                </>
              )}
              <Heading level={3} text="Property Details" />
              <Styles.AddressList>
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
            </>
          )}
        </Styles.Container>
      )}
    </>
  );
};

export default PostCodeAddressDropdown;
