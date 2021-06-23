
import React from "react";
import { render } from "@testing-library/react";

import PromotedLinks from "./PromotedLinks";
import { PromotedLinksProps } from "./PromotedLinks.types";

describe("Test Component", () => {
  let props: PromotedLinksProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<PromotedLinks {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("PromotedLinks");

    expect(component).toHaveTextContent("example content");
  });
});
