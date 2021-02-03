
import React from "react";

import { ButtonProps } from "./Button.types";
import * as Styles from "./Button.styles";

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    primary = true,
    size = 'medium',
    text,
    url,
    isExternal = false,
    isDisabled = false,
    ...props
  }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    const href = (isDisabled) ? null : {href: url};
    return (
      <Styles.StyledButton
        className={[`button--${size}`, mode].join(' ')} 
        {...href}
        title={"Go to " + text}
        {...props}
      >
        {/* TODO: add aria roles etc */}
        {text}
      </Styles.StyledButton>
    );
  };
  

export default Button;

