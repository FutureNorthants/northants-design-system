
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import MovableDiv from "./MovableDiv";
import { MovableDivProps } from "./MovableDiv.types";

describe("Test Component", () => {
  let props: MovableDivProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <MovableDiv {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MovableDiv");

    expect(component).toHaveTextContent("example content");
  });
});
