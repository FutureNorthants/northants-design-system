// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";
import * as Styles from "./Button.styles";

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    label,
    ...props
  }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
      <Styles.StyledButton
        type="button"
        className={[`button--${size}`, mode].join(' ')}
        {...props}
      >
        {label}
      </Styles.StyledButton>
    );
  };
  

export default Button;

