import React from "react";
import { AutocompleteProps } from "./Autocomplete.types";
import * as Styles from "./Autocomplete.styles";

const Autocomplete: React.FC<AutocompleteProps> = ({
    name,
    value = "",
    placeholder = "",
    isErrored = false,
    errorText = ""
  }) => {
    return (
      <>
      {isErrored && errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.StyledAutocomplete type="text" placeholder={placeholder} name={name} value={value}/>
      </>
    );
  };
  
export default Autocomplete;

