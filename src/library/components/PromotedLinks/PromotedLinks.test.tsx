import React from "react";
import { render } from "@testing-library/react";

import PromotedLinks from "./PromotedLinks";
import { PromotedLinksProps } from "./PromotedLinks.types";
import { ThemeProvider } from "styled-components";
import { west_theme } from "../../../themes/theme_generator";

describe("Test Component", () => {
  let props: PromotedLinksProps;

  beforeEach(() => {
    props = {
      promotedLinksArray: [
        {
          title: "The first link",
          url: "/the-first-url/",
        },
        {
          title: "The second link",
          url: "/the-second-url/",
        },
      ],
      oneCol: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromotedLinks {...props} />
      </ThemeProvider>
    );

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PromotedLinks");

    expect(component).toHaveTextContent("The first link");
  });
});
