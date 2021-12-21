import React from "react";
import { render } from "@testing-library/react";

import SectionLinksSidebar from "./SectionLinksSidebar";
import { SectionLinksSidebarProps } from "./SectionLinksSidebar.types";

import { ThemeProvider } from "styled-components";
import { west_theme } from "../../../themes/theme_generator";

describe("Test Component", () => {
  let props: SectionLinksSidebarProps;

  beforeEach(() => {
    props = {
      Title: "testing section",
      Sections: [],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SectionLinksSidebar {...props} />
      </ThemeProvider>
    );

  it("should render foo text correctly", () => {
    props.Title = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SectionLinksSidebar");

    expect(component).toHaveTextContent("example content");
  });
});
