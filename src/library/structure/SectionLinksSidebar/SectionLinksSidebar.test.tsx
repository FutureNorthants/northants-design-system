
import React from "react";
import { render } from "@testing-library/react";

import SectionLinksSidebar from "./SectionLinksSidebar";
import { SectionLinksSidebarProps } from "./SectionLinksSidebar.types";

describe("Test Component", () => {
  let props: SectionLinksSidebarProps;

  beforeEach(() => {
    props = {
      Title: "testing section",
      Sections: []
    };
  });

  const renderComponent = () => render(<SectionLinksSidebar {...props} />);

  it("should render foo text correctly", () => {
    props.Title = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SectionLinksSidebar");

    expect(component).toHaveTextContent("example content");
  });
});
