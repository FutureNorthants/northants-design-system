
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import TabCollection from "./TabCollection";
import { TabCollectionProps } from "./TabCollection.types";

describe("Test Component", () => {
  let props: TabCollectionProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <TabCollection {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabCollection");

    expect(component).toHaveTextContent("example content");
  });
});
