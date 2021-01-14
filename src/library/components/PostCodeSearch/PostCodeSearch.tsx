import React, { useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { PostCodeSearchProps } from "./PostCodeSearch.types";
import * as Styles from "./PostCodeSearch.styles";

import HintText from "../HintText/HintText";
import FormWithLine from "../FormWithLine/FormWithLine";
import Input from "../Input/Input";
import FormButton from "../FormButton/FormButton";

import ChevronIcon from '../icons/ChevronIcon/ChevronIcon';

/**
 * The functionality for searching for a postcode
 */
const PostCodeSearch: React.FC<PostCodeSearchProps> = ({
    title = "Find your local area based on your postcode",
    formError = false
  }) => {
    const themeContext = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [isError, setisError] = useState(formError);

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
            <FormWithLine isError={isError} lineColour={themeContext.theme_vars.colours.grey_dark}>
              <Styles.Label for="postcode">Enter your postcode</Styles.Label>
              <HintText text={"For example NN16 0AP"} />
              
              {/* TODO replace input and button with reusable components */}
              <Input type="text" placeholder="Search" name="postcode" />
              <FormButton type="submit" aria-label="Submit" text="Find" />
            </FormWithLine>
          </Styles.DropDownContent>
        }
      </Styles.Container>
    );
  };
  

export default PostCodeSearch;

