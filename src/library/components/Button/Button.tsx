
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
    title,
    url,
    isExternal = false,
    isDisabled = false,
    children,
    ...props
  }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    const href = (isDisabled) ? null : {href: url};
    return (
      <Styles.StyledButton
        className={[`button--${size}`, mode].join(' ')} 
        {...href}
        title={title ? title : ("Go to " + text)}
        {...props}
      >
        {/* TODO: add aria roles etc */}
        {text ? 
            text
            :
            children
        }
      </Styles.StyledButton>
    );
  };
  

export default Button;

