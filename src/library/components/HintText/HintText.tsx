
import React from "react";

import { HintTextProps } from "./HintText.types";
import * as Styles from "./HintText.styles";

/**
 * Form element - hint text
 */
const HintText: React.FC<HintTextProps> = ({
    text
  }) => {
    return (
      <Styles.HintText>
        {text}
      </Styles.HintText>
    );
  };
  

export default HintText;

