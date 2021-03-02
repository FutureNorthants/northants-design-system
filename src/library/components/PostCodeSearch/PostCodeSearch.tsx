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
    const [isError, setisError] = useState(formError);
    const [errorText, setErrorText] = useState("");
    const [currentPostcode, setCurrentPostcode] = useState("");

    const defaultArray = { 
      "numOfSovereign": 0,
      "sovereign": [{
        "sovereign": "",
        "sovereignCode": 0 
      }],
      "numOfUnitary": 0,
      "unitary": [{
        "unitary": "",
        "unitaryCode": 0
      }],
      "addresses": []
    }

    let [responseData, setResponseData] =  useState(defaultArray);


    const handleSubmit= (e) => {
      e.preventDefault();
      setCurrentPostcode(e.target.postcode.value)
      if(e.target.postcode.value === "") {
        handleError(true, "You need to enter a postcode");
      } else {
        checkPostcode(e.target.postcode.value);
      }
    }

    const checkPostcode = async (postcode) => {
      axios({
        method: "GET",
        url: `https://api.westnorthants.digital/check-postcode/${postcode}`
        // headers: { 'x-api-key': 'kBexTqkLpj6ZOkGUNguti58JijxQcGvf9tLqBWWh' }
      })
      .then((response) => {
        if (response.data.unitary.unitary) {
          setResponseData(response.data)
        } else {
          handleError(true);
        }
      })
      .catch((error) => {
        handleError(true);
        console.log(error)
      })
    }

    const handleError = (error, errorMsg = "There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes.") => {
      setErrorText(errorMsg)
      setisError(error)
    }

    useEffect(() => {
      if(responseData.unitary.unitary !== "") {
        if(isError) {
          handleError(false, "");
        }
      }
    }, [responseData]);

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
            {responseData.sovereign.sovereign === "" ?
              <FormWithLine onSubmit={e => { handleSubmit(e) }} isError={isError} lineColour={themeContext.theme_vars.colours.grey_dark}>
                <Styles.Label for="postcode">
                  Enter your postcode
                  <HintText text={themeContext.cardinal_name === "north" ? "For example NN16 0AP" : "For example NN1 1DE"} />
                  
                  <Input type="text" placeholder="Search" name="postcode" errorText={errorText} isErrored={isError} />
                </Styles.Label>

                <FormButton type="submit" aria-label="Submit" text="Find" />
              </FormWithLine>
              :
              <Styles.PostcodeResult>
                <Styles.Line />
                {isUnitary ? 
                  <div className="result">
                      <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary.unitary} Northamptonshire</strong>, in the <strong>{responseData.sovereign.sovereign}</strong> area.</p>
                      
                      {themeContext.cardinal_name !== responseData.unitary.unitary.toLowerCase() ?
                        <p>In order to find the right information for you, please visit the <a href={themeContext.theme_vars.other_council_link} title="Go to the other council">{responseData.unitary.unitary} Northamptonshire website.</a></p>
                        :
                        <p>You are on the <strong>correct website for this postcode</strong>.</p>
                      }

                    <Styles.StartAgain onClick={() => setResponseData(defaultArray)}>Find another postcode</Styles.StartAgain>
                  </div>
                  :
                  themeContext.cardinal_name !== responseData.unitary.unitary.toLowerCase() ?
                    <div className="result"> 
                      <p>This postcode <strong>{currentPostcode}</strong> is in <strong>{responseData.unitary.unitary} Northamptonshire</strong>, in the <strong>{responseData.sovereign.sovereign}</strong> area.</p>
                      <p>In order to find the right information for you, please visit the {responseData.unitary.unitary} Northamptonshire website and find your local area - {responseData.sovereign.sovereign} - for this service.</p>

                      <Button size="large" text={"Go to " + responseData.unitary + " Northamptonshire's website"} url={otherCouncilLink} isExternal={true} />
                      <br />
                      <Styles.StartAgain onClick={() => setResponseData(defaultArray)}>Find another postcode</Styles.StartAgain>
                    </div>
                    :
                    <div className="result">
                      <p>The postcode <strong>{currentPostcode}</strong> is in the <strong>{responseData.sovereign.sovereign}</strong> area.</p>

                      <Button size="large" text={"Go to " + responseData.sovereign.sovereign} url={signPostLinks.find(link => link.sovereignCode == responseData.sovereign.sovereignCode).url} />
                      <br />
                      <Styles.StartAgain onClick={() => setResponseData(defaultArray)}>Find another postcode</Styles.StartAgain>
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

