import React from "react";
import { render } from "@testing-library/react";

import SkipToMainContent from "./SkipToMainContent";
import { SkipToMainContentProps } from "./SkipToMainContent.types";

import { ThemeProvider } from "styled-components";
import { west_theme } from "../../../index";

describe("Test Component", () => {
  let props: SkipToMainContentProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SkipToMainContent {...props} />
      </ThemeProvider>
    );

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SkipToMainContent");

    expect(component).toHaveTextContent("Skip to main content");
  });
});
