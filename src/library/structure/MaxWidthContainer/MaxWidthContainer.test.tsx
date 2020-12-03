
import React from "react";
import { render } from "@testing-library/react";

import MaxWidthContainer from "./MaxWidthContainer";
import { MaxWidthContainerProps } from "./MaxWidthContainer.types";

describe("Page Main Container", () => {
  let props: MaxWidthContainerProps;

  beforeEach(() => {
    props = {
      classes: "bar"
    };
  });

  const renderComponent = () => render(<MaxWidthContainer {...props} />);

  it("should render classes class correctly", () => {
    props.classes = "testclass";
    const { getByTestId } = renderComponent();

    const component = getByTestId("test-maxwidth");

    expect(component).toHaveClass("testclass");
  });
});
