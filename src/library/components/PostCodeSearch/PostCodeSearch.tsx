import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios'

import { PostCodeSearchProps } from "./PostCodeSearch.types";
import * as Styles from "./PostCodeSearch.styles";

import HintText from "../HintText/HintText";
import FormWithLine from "../FormWithLine/FormWithLine";
import Input from "../Input/Input";
import FormButton from "../FormButton/FormButton";

import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import Button from "../Button/Button";
import { SignpostLinks } from "../../structure/PageStructures";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// PostCodeSearchApiKey
import {PostcodeSearchApiUrl} from '../../helpers/api-helpers';

/**
 * The functionality for searching for a postcode
 */
const PostCodeSearch: React.FC<PostCodeSearchProps> = ({
    title = "Enter your postcode to find your area",
    formError = false,
    otherCouncilLink,
    signPostLinks,
    isUnitary = false
  }) => {
    const themeContext = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setisError] = useState(formError);
    const [errorText, setErrorText] = useState("");
    const [currentPostcode, setCurrentPostcode] = useState("");
    const [isMultiple, setIsMultiple] = useState(false);
    const [addressArray, setAddressArray] = useState([]);

    let defaultArray: any = {}
    defaultArray.numOfSovereign = 0;
    defaultArray.sovereign = [{
      sovereignName: "",
    }];
    defaultArray.numOfUnitary = 0;
    defaultArray.unitary = [{
      unitary: "",
    }];
    defaultArray.addresses = [];


    const [responseData, setResponseData] =  useState(defaultArray);

    const clearData = () => {
      setResponseData(defaultArray)
      setCurrentPostcode("")
      setAddressArray([])
    }

    const handleSubmit= (e) => {
      e.preventDefault();
      setCurrentPostcode(e.target.postcode.value)
      if(e.target.postcode.value === "") {
        setIsLoading(true);
        handleError(true, "You need to enter a postcode");
      } else {
        checkPostcode(e.target.postcode.value);
      }
    }

    const checkPostcode = async (postcode) => {
      axios({
        method: "GET",
        url: `${PostcodeSearchApiUrl}${postcode.replace(/ /g,'')}`
        // headers: { 'x-api-key': `${PostCodeSearchApiKey}` }
      })
      .then((response) => {
        setIsLoading(false);
        // converting from the old api to the new one but easier to keep the old format

        const numOfSovereign = response.data.hasOwnProperty('sovereigns') ? response.data.sovereigns.length : 0;
        const sovereign = response.data.hasOwnProperty('sovereigns') ? response.data.sovereigns : [];
        const numOfUnitary = response.data.hasOwnProperty('unitaries') ? response.data.unitaries.length : 0;
        const unitary = response.data.hasOwnProperty('unitaries') ? response.data.unitaries : [];
        const addresses = response.data.hasOwnProperty('addresses') ? response.data.addresses : [];

        var responseData: any = {};
        responseData.numOfSovereign = numOfSovereign;
        responseData.sovereign = sovereign;
        responseData.numOfUnitary = numOfUnitary;
        responseData.unitary = unitary;
        responseData.addresses = addresses;


        if (responseData.numOfUnitary > 0) {
          console.log(responseData);
          setResponseData(responseData)
        } else {
          // console.log(response)
          handleError(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(true);
        console.log(error)
      })
    }

    const handleError = (error, errorMsg = "There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes.") => {
      setErrorText(errorMsg)
      setisError(error)
    }

    useEffect(() => {
      if(responseData.numOfUnitary > 0) {
        if(isError) {
          handleError(false, "");
        }
        if(responseData.numOfUnitary > 1) {
          setIsMultiple(true);
          responseData.addresses.map(address => {
            // nn15ph
            setAddressArray(addressArray => [...addressArray, {
              title: address.split(',')[0].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + ", " + address.split(',')[1].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
              value: address.uprn,
              info: [{
                numOfSovereign: 1,
                sovereign: [{
                  sovereignName: address.sovereign,
                  // sovereignCode: address.SOVEREIGN_COUNCIL_CODE, 
                }],
                numOfUnitary: 1,
                unitary: [{
                  unitary: address.unitary,
                  // unitaryCode: address.UNITARY_COUNCIL_CODE
                }],
                addresses: []                
              }] 
            }])
          })
        }
      }
    }, [responseData]);


    function handleAddressChange(e){
      if(e.target.value !== "") {
        const singleAddress = addressArray.find(address => address.value === e.target.value);
        setIsMultiple(false);
        setResponseData(singleAddress.info[0]);
        setCurrentPostcode(currentPostcode + " ("+singleAddress.title+")")
      }
    }

    return(
      <Styles.Container>
        <Styles.DropDownButton onClick={() => setOpen(open ? false : true)}>
          <Styles.IconWrapper>
            <ChevronIcon direction={open ? "down" : "right"} colourFill={themeContext.theme_vars.colours.black} />
          </Styles.IconWrapper>
          {title}
        </Styles.DropDownButton>
        {open && 
          <Styles.DropDownContent>
            {responseData.numOfUnitary === 0 ?
              <FormWithLine onSubmit={e => { handleSubmit(e) }} isError={isError} lineColour={themeContext.theme_vars.colours.grey_dark}>
                {isLoading ?
                  <Styles.LoadingContainer>
                    <LoadingSpinner />
                    <p>Loading...</p>
                  </Styles.LoadingContainer>
                  
                :
                <>
                <Styles.Label htmlFor="postcode">
                  Enter your postcode
                  <HintText text={themeContext.cardinal_name === "north" ? "For example NN16 0AP" : "For example NN1 1DE"} />
                  
                  <Input type="text" placeholder="Search" name="postcode" errorText={errorText} isErrored={isError} />
                </Styles.Label>

                <FormButton type="submit" aria-label="Submit" text="Find" />
                </>
                }
              </FormWithLine>
              :
              <Styles.PostcodeResult>
                <Styles.Line />
                {
                isMultiple ?
                <div className="result"> 
                  <p>This postcode <strong>{currentPostcode}</strong> includes addresses that are in multiple areas, please select your address so that we can tell you which area you are in.</p>
                  <DropDownSelect onChange={handleAddressChange} id="address" label="Select your address" options={[...[{ title: "Select an address to continue", value: "" }], ...addressArray]}  />
                </div>
                :
                isUnitary ? 
                  <div className="result">
                      <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary[0].name}</strong>, in the <strong>{responseData.sovereign[0].name}</strong> area.</p>
                      
                      {themeContext.theme_vars.cardinal_name !== responseData.unitary[0].name.toLowerCase() ?
                        <p>In order to find the right information for you, please visit the <a href={themeContext.theme_vars.other_council_link} title="Go to the other council">{responseData.unitary[0].name} website.</a></p>
                        :
                        <p>You are on the <strong>correct website for this postcode</strong>.</p>
                      }

                    <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
                  </div>
                  :
                  themeContext.theme_vars.cardinal_name !== responseData.unitary[0].name.toLowerCase() ?
                    <div className="result"> 
                      <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary[0].name}</strong>, in the <strong>{responseData.sovereign[0].name}</strong> area.</p>
                      <p>In order to find the right information for you, please visit the {responseData.unitary[0].name} website and find your local area ({responseData.sovereign[0].name}) for this service.</p>

                      <Button size="large" colourOverride={themeContext.theme_vars.other_council_action} text={"Go to " + (responseData.unitary[0].name) + "'s website"} url={otherCouncilLink} isExternal={true} />
                      <br />
                      <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
                    </div>
                    :
                    <div className="result">
                      <p>The postcode <strong>{currentPostcode}</strong> is in the <strong>{responseData.sovereign[0].sovereignName}</strong> area.</p>
                      
                      {/* { signPostLinks.find(link => link.sovereignCode === responseData.sovereign[0].sovereignCode) && 
                        <Button size="large" text={"Go to " + responseData.sovereign[0].sovereignName} url={signPostLinks.find(link => link.sovereignCode === responseData.sovereign[0].sovereignCode).url} />
                      }<br /> */}
                      <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
                    </div>
                }
              </Styles.PostcodeResult>
            }
          </Styles.DropDownContent>
        }
      </Styles.Container>
    );
  };
  

export default PostCodeSearch;

