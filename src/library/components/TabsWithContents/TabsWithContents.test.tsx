
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import TabsWithContents from "./TabsWithContents";
import { TabsWithContentsProps } from "./TabsWithContents.types";

describe("Test Component", () => {
  let props: TabsWithContentsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <TabsWithContents {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabsWithContents");

    expect(component).toHaveTextContent("example content");
  });
});
