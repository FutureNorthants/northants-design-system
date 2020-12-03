
import React from "react";

import Button from "../../components/Button/Button";
import { ButtonProps } from "../../components/Button/Button.types";
import * as Styles from "./CallToAction.styles";

/**
 * A button wrapped in a div used as a slice in the content management system
 */
const CallToAction: React.FC<ButtonProps> = ({
    primary,
    size,
    label,
    url,
    isExternalLink,
    isDisabled,
    ...props
  }) => {
    return (
      <Styles.Container>
        <Button 
          primary={primary} 
          size={size} 
          label={label}
          url={url}
          isExternalLink={isExternalLink}
          isDisabled={isDisabled}
        />
      </Styles.Container>
    );
  };
  

export default CallToAction;

