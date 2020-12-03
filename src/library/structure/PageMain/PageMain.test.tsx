
import React from "react";
import { render } from "@testing-library/react";

import PageMain from "./PageMain";
import { PageMainProps } from "./PageMain.types";

describe("Page Main Container", () => {
  let props: PageMainProps;

  beforeEach(() => {
    props = {
      classes: "bar"
    };
  });

  const renderComponent = () => render(<PageMain {...props} />);

  it("should render classes class correctly", () => {
    props.classes = "testclass";
    const { getByTestId } = renderComponent();

    const component = getByTestId("main");

    expect(component).toHaveClass("testclass");
  });
});
