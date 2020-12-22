
import React from "react";
import { render } from "@testing-library/react";

import SkipToMainContent from "./SkipToMainContent";
import { SkipToMainContentProps } from "./SkipToMainContent.types";

describe("Test Component", () => {
  let props: SkipToMainContentProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<SkipToMainContent {...props} />);


});
