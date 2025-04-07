
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuickExit3 from "./QuickExit3";
import { QuickExit3Props } from "./QuickExit3.types";

describe("Test Component", () => {
  let props: QuickExit3Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <QuickExit3 {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("QuickExit3");

    expect(component).toHaveTextContent("example content");
  });
});
