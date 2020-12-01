// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Heading from "./Heading";
import { HeadingProps } from "./Heading.types";

describe("Test Component", () => {
  let props: HeadingProps;

  beforeEach(() => {
    props = {
      text: "example heading"
    };
  });

  const renderComponent = () => render(<Heading {...props} />);

  it("should render text text correctly", () => {
    props.text = "example heading";
    const { getByTestId } = renderComponent();

    const component = getByTestId("test-heading");

    expect(component).toHaveTextContent("example heading");
  });
});
