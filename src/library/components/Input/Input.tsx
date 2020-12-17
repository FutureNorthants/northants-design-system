
import React from "react";

import { InputProps } from "./Input.types";
import * as Styles from "./Input.styles";

/**
 * Primary UI component for user interaction
 */
const Input: React.FC<InputProps> = ({
    type = "text",
    placeholder = "",
    name
  }) => {
    return (
      <Styles.StyledInput type={type} placeholder={placeholder} name={name} />
    );
  };
  

export default Input;

