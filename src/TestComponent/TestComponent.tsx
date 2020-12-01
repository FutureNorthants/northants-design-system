import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import * as Styles from "./TestComponent.styles";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Styles.StyledDiv data-testid="test-component" theme={theme}>
    <Styles.StyledHeading className="heading">I'm the test component</Styles.StyledHeading>
    <Styles.StyledDescription>Made with love</Styles.StyledDescription>
  </Styles.StyledDiv>
);

export default TestComponent;
