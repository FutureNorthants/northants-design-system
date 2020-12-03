
import React from "react";

import { HeadingProps } from "./Heading.types";
import * as Styles from "./Heading.styles";

/**
 * A heading of different levels
 */
const Heading: React.FC<HeadingProps> = ({
  level = 2,
  text,
  ...props
}) => {
  if (level === 1) return <Styles.H1 data-testid="test-heading" {...props}>{text}</Styles.H1> 
  if (level === 2) return <Styles.H2 data-testid="test-heading" {...props}>{text}</Styles.H2> 
  if (level === 3) return <Styles.H3 data-testid="test-heading" {...props}>{text}</Styles.H3> 
  if (level === 4) return <Styles.H4 data-testid="test-heading" {...props}>{text}</Styles.H4> 
  return null
};

export default Heading;

