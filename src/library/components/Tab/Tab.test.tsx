
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import Tab from "./Tab";
import { TabProps } from "./Tab.types";

describe("Test Component", () => {
  let props: TabProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <Tab {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tab");

    expect(component).toHaveTextContent("example content");
  });
});
