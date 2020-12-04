
import React from "react";

import { ButtonProps } from "./Button.types";
import * as Styles from "./Button.styles";

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    primary = true,
    size = 'medium',
    label,
    url,
    isExternalLink = false,
    isDisabled = false,
    ...props
  }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
      <Styles.StyledButton
        className={[`button--${size}`, mode].join(' ')}
        href={isDisabled ? false : url}
        title={"Go to " + label}
        target={isExternalLink ? "_blank" : "_self"}
        {...props}
      >
        {/* TODO: add aria roles etc */}
        {label}
      </Styles.StyledButton>
    );
  };
  

export default Button;

