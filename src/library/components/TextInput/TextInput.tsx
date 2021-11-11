import React, { useState } from "react";
import { ErrorText } from "./../Input/Input.styles";
import { TextInputProps } from "./TextInput.types";
import { StyledTextInput } from "./TextInput.styles";

/**
 * Standard text input component
 */
const TextInput: React.FunctionComponent<TextInputProps> = ({
  id,
  name,
  value = "",
  size,
  placeholder = "",
  isLarge = false,
  isErrored = false,
  errorText = ""
}) => {
  return (
    <>
      {isErrored && errorText && <ErrorText>{errorText}</ErrorText>}
      <StyledTextInput type="text" id={id} name={name} defaultValue={value} size={size} 
        placeholder={placeholder} isErrored={isErrored} isLarge={isLarge} />
    </>
  );
};

export default TextInput;
