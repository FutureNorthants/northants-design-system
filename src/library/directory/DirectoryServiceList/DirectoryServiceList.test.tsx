
import React from "react";
import { render } from "@testing-library/react";

import DirectoryServiceList from "./DirectoryServiceList";
import { DirectoryServiceListProps } from "./DirectoryServiceList.types";

describe("Test Component", () => {
  let props: DirectoryServiceListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<DirectoryServiceList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DirectoryServiceList");

    expect(component).toHaveTextContent("example content");
  });
});
