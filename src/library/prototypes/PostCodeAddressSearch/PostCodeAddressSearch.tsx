import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios'

import { PostCodeAddressSearchProps } from "./PostCodeAddressSearch.types";
import * as Styles from "./PostCodeAddressSearch.styles";

import HintText from "./../../components/HintText/HintText";
import FormWithLine from "./../../components/FormWithLine/FormWithLine";
import Input from "./../../components/Input/Input";
import FormButton from "./../../components/FormButton/FormButton";

import Button from "./../../components/Button/Button";
import DropDownSelect from "./../../components/DropDownSelect/DropDownSelect";
import LoadingSpinner from "./../../components/LoadingSpinner/LoadingSpinner";


// PostCodeAddressSearchApiKey
import {PostCodeAddressSearchApiUrl} from '../../helpers/api-helpers';

import {useUser, usePostcodeAddressContext} from './../contexts/PostCodeAddressProvider/PostCodeAddressProvider';

/**
 * The functionality for searching for a postcode
 */
const PostCodeAddressSearch: React.FC<PostCodeAddressSearchProps> = ({
    title = "Enter your postcode to find your area",
    formError = false,
    otherCouncilLink,
    signPostLinks,
    isUnitary = false
  }) => {
    const themeContext = useContext(ThemeContext);
    const {postcodeValue: {state: {postcode}, actions: {setPostCode}}, resultsValue: {state: {results}, actions: {setResults}}} = usePostcodeAddressContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setisError] = useState(formError);
    const [errorText, setErrorText] = useState("");
    const [currentPostcode, setCurrentPostcode] = useState("");
    const [isMultiple, setIsMultiple] = useState(false);
    const [addressArray, setAddressArray] = useState([]);

    const defaultArray = { 
      numOfSovereign: 0,
      sovereign: [{
        sovereignName: "",
        sovereignCode: 0 
      }],
      numOfUnitary: 0,
      unitary: [{
        unitary: "",
        unitaryCode: 0
      }],
      addresses: []
    }

    const [responseData, setResponseData] =  useState(defaultArray);

    /**
     * Clear the form and reset
     */
    const clearData = () => {
      setResponseData(defaultArray)
      setCurrentPostcode("")
      setAddressArray([])
      setPostCode('')
      setResults({})
    }

    /**
     * Postcode form submission handler
     * @param e 
     */
    const handleSubmit= (e) => {
      e.preventDefault();
      setCurrentPostcode(e.target.postcode.value)
      if(e.target.postcode.value === "") {
        handleError(true, "You need to enter a postcode");
      } else {
        setPostCode(e.target.postcode.value)
        setIsLoading(true);
        checkPostcode(e.target.postcode.value);
      }
    }

    /**
     * Do the actual postcode lookup
     * This method only returns results if postcode is within north / west
     * @param postcode string
     */
    const checkPostcode = async (postcode) => {
      axios({
        method: "GET",
        url: `${PostCodeAddressSearchApiUrl}${postcode.replace(/ /g,'')}`
        // headers: { 'x-api-key': `${PostCodeAddressSearchApiKey}` }
      })
      .then((response) => {
        setIsLoading(false);
        // num of unitary is whether its in north or west
        if (response.data.numOfUnitary > 0) {
          setResponseData(response.data)
          setResults(response.data)
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

    /**
     * Is there an error and if so what is it
     * @param error boolean
     * @param errorMsg string
     */
    const handleError = (error, errorMsg = "There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes.") => {
      console.log(error, errorMsg)
      setErrorText(errorMsg)
      setisError(error)
    }

    useEffect(() => {
      console.log('use effect');
      if(responseData.numOfUnitary > 0) {
        if(isError) {
          handleError(false, "");
        }
        if(responseData.numOfUnitary > 1) {
          setIsMultiple(true);
          responseData.addresses.map(address => {
            setAddressArray(addressArray => [...addressArray, {
              title: address.DPA.ADDRESS.split(',')[0].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + ", " + address.DPA.ADDRESS.split(',')[1].toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
              value: address.DPA.UPRN,
              info: [{
                numOfSovereign: 1,
                sovereign: [{
                  sovereignName: address.DPA.SOVEREIGN_COUNCIL_NAME,
                  sovereignCode: address.DPA.SOVEREIGN_COUNCIL_CODE, 
                }],
                numOfUnitary: 1,
                unitary: [{
                  unitary: address.DPA.UNITARY_COUNCIL_NAME,
                  unitaryCode: address.DPA.UNITARY_COUNCIL_CODE
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

        
              {/* // <Styles.PostcodeResult>
              //   <Styles.Line />
              //   {
              //   isMultiple ?
              //   <div className="result"> 
              //     <p>This postcode <strong>{currentPostcode}</strong> includes addresses that are in multiple areas, please select your address so that we can tell you which area you are in.</p>
              //     <DropDownSelect onChange={handleAddressChange} id="address" label="Select your address" options={[...[{ title: "Select an address to continue", value: "" }], ...addressArray]}  />
              //   </div>
              //   :
              //   isUnitary ? 
              //     <div className="result">
              //         <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary[0].unitary} Northamptonshire</strong>, in the <strong>{responseData.sovereign[0].sovereignName}</strong> area.</p>
                      
              //         {themeContext.theme_vars.cardinal_name !== responseData.unitary[0].unitary.toLowerCase() ?
              //           <p>In order to find the right information for you, please visit the <a href={themeContext.theme_vars.other_council_link} title="Go to the other council">{responseData.unitary[0].unitary} Northamptonshire website.</a></p>
              //           :
              //           <p>You are on the <strong>correct website for this postcode</strong>.</p>
              //         }

              //       <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
              //     </div>
              //     :
              //     themeContext.theme_vars.cardinal_name !== responseData.unitary[0].unitary.toLowerCase() ?
              //       <div className="result"> 
              //         <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary[0].unitary} Northamptonshire</strong>, in the <strong>{responseData.sovereign[0].sovereignName}</strong> area.</p>
              //         <p>In order to find the right information for you, please visit the {responseData.unitary[0].unitary} Northamptonshire website and find your local area ({responseData.sovereign[0].sovereignName}) for this service.</p>

              //         <Button size="large" colourOverride={themeContext.theme_vars.other_council_action} text={"Go to " + (responseData.unitary[0].unitary) + " Northamptonshire's website"} url={otherCouncilLink} isExternal={true} />
              //         <br />
              //         <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
              //       </div>
              //       :
              //       <div className="result">
              //         <p>The postcode <strong>{currentPostcode}</strong> is in the <strong>{responseData.sovereign[0].sovereignName}</strong> area.</p>
                      
              //         { signPostLinks.find(link => link.sovereignCode === responseData.sovereign[0].sovereignCode) && 
              //           <Button size="large" text={"Go to " + responseData.sovereign[0].sovereignName} url={signPostLinks.find(link => link.sovereignCode === responseData.sovereign[0].sovereignCode).url} />
              //         }<br />
              //         <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
              //       </div>
              //   }
              // </Styles.PostcodeResult> */}

      </Styles.Container>
    );
  };
  

export default PostCodeAddressSearch;

