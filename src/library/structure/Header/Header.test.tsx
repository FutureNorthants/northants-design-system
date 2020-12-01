// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
import { HeaderProps } from "./Header.types";

describe("Page Main Container", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      classes: "bar"
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should render classes class correctly", () => {
    props.classes = "testclass";
    const { getByTestId } = renderComponent();

    const component = getByTestId("main");

    expect(component).toHaveClass("testclass");
  });
});
