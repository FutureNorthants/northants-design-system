
import React from "react";
import { render } from "@testing-library/react";

import TitledLinkList from "./TitledLinkList";
import { TitledLinkListProps } from "./TitledLinkList.types";

describe("Test Component", () => {
  let props: TitledLinkListProps;

  beforeEach(() => {
    props = {
      Title: "testing section",
      Sections: []
    };
  });

  const renderComponent = () => render(<TitledLinkList {...props} />);

  it("should render foo text correctly", () => {
    props.Title = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TitledLinkList");

    expect(component).toHaveTextContent("example content");
  });
});
