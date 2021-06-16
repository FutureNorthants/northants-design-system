
import React, {useState} from "react";

import { PostCodeAddressDropdownProps } from "./PostCodeAddressDropdown.types";
import * as Styles from "./PostCodeAddressDropdown.styles";


import {usePostcodeAddressContext} from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import DropDownSelect from "../../components/DropDownSelect/DropDownSelect";

const PostCodeAddressDropdown: React.FC<PostCodeAddressDropdownProps> = () => {

    const [currentAddress, setCurrentAddress] = useState(null);
    const {postcodeValue: {state: {postcode}, actions: {setPostCode}}, resultsValue: {state: {results}, actions: {setResults}}} = usePostcodeAddressContext();

    const optionPicked = (e) => {

        if(e.target.value !== "") {
            const singleAddress = addresses.find(address => address.value === e.target.value);
            setCurrentAddress(singleAddress);
          }

    }

    const hasResults = (Object.keys(results).length > 0) ? true : false;

    
    let addresses = [{
        title: 'No results found',
        value: 'no-results'
    }];

    if(hasResults) {
        addresses = results.addresses.map((addr) => {
            return {
                title: addr.DPA.ADDRESS,
                // .split(',')[0].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + ", " + addr.DPA.ADDRESS.split(',')[1].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
                value: addr.DPA.UPRN,
                extra: addr.DPA
            }
        });
        addresses = [{ title: "Choose an address", value: 'choose-address'}, ...addresses]
    }


    return (
        <>
            {hasResults &&
                <Styles.Container data-testid="PostCodeAddressDropdown">
                     <DropDownSelect id="postcodeAddressLookup" label="Select your address" options={addresses} onChange={optionPicked} selected={hasResults ? 'choose-address' : 'no-results' }/>
                     <br />

                    {currentAddress &&
                        <Styles.AddressList>

                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Council tax band:</Styles.AddressListKey> 
                                <Styles.AddressListValue>D</Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Charge per year:</Styles.AddressListKey> 
                                <Styles.AddressListValue>£1,342</Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Town/Parish:</Styles.AddressListKey> 
                                <Styles.AddressListValue>Hunsbury</Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Address:</Styles.AddressListKey> 
                                <Styles.AddressListValue>{currentAddress.extra.ADDRESS}</Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Postcode:</Styles.AddressListKey> 
                                <Styles.AddressListValue>{currentAddress.extra.POSTCODE}</Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Area:</Styles.AddressListKey> 
                                <Styles.AddressListValue><p>This address is in <strong>{currentAddress.extra.UNITARY_COUNCIL_NAME} Northamptonshire</strong>, in the <strong>{currentAddress.extra.SOVEREIGN_COUNCIL_NAME}</strong> area.</p></Styles.AddressListValue>
                            </Styles.AddressListRow>
                            <Styles.AddressListRow>
                                <Styles.AddressListKey>Map:</Styles.AddressListKey> 
                                <Styles.AddressListValue><a href={`https://www.google.com/maps/search/?api=1&query=${currentAddress.extra.LAT},${currentAddress.extra.LNG}`} target="_blank">View on google maps</a> (link opens in a new window)</Styles.AddressListValue>
                            </Styles.AddressListRow>

                        </Styles.AddressList>
                    }
                </Styles.Container>
            }
        </>
            
        )

};

export default PostCodeAddressDropdown;

