
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuickExit2 from "./QuickExit2";
import { QuickExit2Props } from "./QuickExit2.types";

describe("Test Component", () => {
  let props: QuickExit2Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <QuickExit2 {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("QuickExit2");

    expect(component).toHaveTextContent("example content");
  });
});
